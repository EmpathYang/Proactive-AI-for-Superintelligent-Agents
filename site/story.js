/* Proactive AI: the scroll-driven film
   Scroll position drives a single camera over one world plane. Every number below
   is in "units": one unit is a little under one viewport of scrolling. */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => t * t * t * (t * (t * 6 - 15) + 10);
  const prog = (u, a, b) => clamp((u - a) / (b - a));
  const D2R = Math.PI / 180;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const END = 35;
  // The opening (why the topic matters) plays before story time 0, so every later cue keeps its number.
  const PRE = 3.4;
  const SPAN = END + PRE;
  const DATA_BASE = $('meta[name="story-data"]')?.content || "../data/";

  /* ------------------------------------------------------------------ geometry */
  const RING = { x: 6800, y: 5300, r: 620 };
  const CAPS = [
    { id: "awareness", hue: "--aw" },
    { id: "anticipation", hue: "--an" },
    { id: "agenda", hue: "--ag" },
    { id: "arbitration", hue: "--ar" },
    { id: "action", hue: "--ac" },
    { id: "adaptation", hue: "--ad" }
  ];
  const css = getComputedStyle(document.documentElement);
  const color = name => css.getPropertyValue(name).trim();
  CAPS.forEach(c => { c.color = color(c.hue); });
  const SPARK = color("--spark") || "#ffb44c";
  const COLD = color("--cold") || "#93a9bd";

  const CAP_START = i => 15.0 + 1.1 * i;
  const nodeAngle = i => -90 + 60 * i;
  const nodePos = i => {
    const a = nodeAngle(i) * D2R;
    return { x: RING.x + RING.r * Math.cos(a), y: RING.y + RING.r * Math.sin(a) };
  };
  const EVAL_R = [1000, 1300, 1600];
  const EVAL_START = k => 22.55 + 0.7 * k;

  const MAP = { left: 9700, top: 4440, col: 448, lane: 104, pad: 40, cols: ["Reactive", "Trigger", "Forecast", "Mandate", "Agenda-generative"] };
  MAP.right = MAP.left + MAP.col * MAP.cols.length;
  MAP.colX = i => MAP.left + MAP.col / 2 + MAP.col * i;
  // the authority axis, top to bottom; `empty` is shown when the survey places no domain in a band
  MAP.bands = [
    { key: "unsupervised", label: "Unsupervised", sub: "acts unsupervised", lanes: 1, empty: "No domain acts unsupervised" },
    { key: "gated", label: "Gated action", sub: "acts inside a gate", lanes: 9, empty: "No domain acts inside a gate" },
    { key: "suggestion", label: "Suggestion", sub: "only suggests", lanes: 4, empty: "No domain only suggests" }
  ];
  function layoutBands() {
    let y = MAP.top;
    MAP.bands.forEach(b => {
      b.top = y;
      b.h = b.lanes * MAP.lane + MAP.pad * 2;
      b.cy = y + b.h / 2;
      y += b.h;
      // where the band's bars sit: filled in by buildMap, and used to frame the band
      b.x0 = MAP.left;
      b.x1 = MAP.right;
      b.rows = [];
    });
    MAP.bottom = y;
  }
  layoutBands();

  // Scene 2. The brief becomes a sheet of explicit instructions (left); the residual decision space (right)
  // holds four open slots. The divider between them is the line the agent's light climbs.
  const SPACE = {
    frame: { x0: -410, x1: 1226, y0: -978, y1: 400 },
    explicit: { x0: -350, x1: 350, y0: -800, y1: 280 },
    residual: { x0: 446, x1: 1166, y0: -800, y1: 280 },
    divider: 398,
    nodes: [-648, -390, -132, 126],
    cardLeft: 490,
    // camera framings: the whole diagram, and each half for phones
    box: { x0: -438, x1: 1254, y0: -1012, y1: 424 },
    explicitBox: { x0: -390, x1: 390, y0: -1012, y1: 300 },
    residualBox: { x0: 340, x1: 1200, y0: -1012, y1: 300 }
  };
  const ZONE_T = z => 4.5 + 0.33 * z; // when the light reaches each open decision

  // Scene 8. The survey's figure as a table: a row per capability with a low and a high example, then the
  // question of trust, then the autonomy that follows. The light comes down the line between low and high.
  const TRUST = {
    rail: 14632, rows: [4900, 5100, 5300], over: 4640, head: 4800, node: 5490,
    box: { x0: 13510, x1: 15238, y0: 4560, y1: 5796 },
    // a phone is too narrow for the capability column as well: it frames the two example columns
    phoneBox: { x0: 14032, x1: 15232, y0: 4700, y1: 5790 }
  };
  const TRUST_T = i => 29.62 + 0.12 * i; // when the light passes each row

  const TRENDS_Y = 6900;

  /* ------------------------------------------------------------- camera script */
  // [u, x, y, scale, rotation°, anchorX, anchorY]; holds are repeated frames.
  let KEYS = [];
  function buildKeys() {
    const L = 0.64;
    const k = [
      [0, 0, 30, 0.86, 0, 0.68, 0.5],
      [1.0, 0, 30, 0.92, 0, 0.67, 0.5],
      [2.5, 0, 40, 1.0, 0, 0.67, 0.5],
      [3.1, 0, 40, 1.0, 0, 0.67, 0.5],
      [3.72, "spaceA", null, null, 0],
      [4.3, "spaceA", null, null, 0],
      [4.55, "spaceB", null, null, 0],
      [6.0, "spaceB", null, null, 0],
      [6.75, 2900, -20, 0.76, 0, 0.67, 0.5],
      [7.2, 2900, -20, 0.76, 0, 0.67, 0.5],
      [7.65, 4100, -20, 0.76, 0, 0.67, 0.5],
      [8.05, 4100, -20, 0.76, 0, 0.67, 0.5],
      [8.5, 5300, -20, 0.76, 0, 0.67, 0.5],
      [9.0, 5300, -20, 0.76, 0, 0.67, 0.5],
      [9.75, 6800, -900, 0.6, -0.8, 0.67, 0.5],
      [13.2, 6800, 3300, 0.6, 0.8, 0.67, 0.5],
      [14.0, RING.x, RING.y, 0.42, 0, L, 0.5],
      [14.8, RING.x, RING.y, 0.44, 0, L, 0.5]
    ];
    CAPS.forEach((c, i) => {
      const p = nodePos(i);
      const r = -60 * i;
      // the node sits low in the frame, so the dimensions above it stay clear of the top bar
      k.push([CAP_START(i) + 0.3, p.x, p.y, 0.84, r, 0.67, 0.79]);
      k.push([CAP_START(i) + 0.88, p.x, p.y, 0.84, r, 0.67, 0.79]);
    });
    k.push(
      [21.95, RING.x, RING.y, 0.4, -360, L, 0.5],
      [22.45, RING.x, RING.y, 0.4, -362, L, 0.5],
      [EVAL_START(0) + 0.5, RING.x, RING.y, 0.36, -366, L, 0.5],
      [EVAL_START(1) + 0.5, RING.x, RING.y, 0.3, -371, L, 0.5],
      [EVAL_START(2) + 0.5, RING.x, RING.y, 0.245, -376, L, 0.5]
    );
    k.push(
      // the whole map, then its three bands in the order the captions take them: middle, lowest, top
      [25.25, "map", null, null, -360],
      [25.7, "map", null, null, -360],
      [26.15, "mapMidB", null, null, -360],
      [26.8, "mapMidA", null, null, -360],
      [27.08, "mapLow", null, null, -360],
      [27.28, "mapLow", null, null, -360],
      [27.6, "mapTop", null, null, -360],
      [27.85, "mapTop", null, null, -360],
      [28.25, 10200, TRENDS_Y - 160, 0.5, -360, 0.71, 0.5],
      [28.6, 10800, TRENDS_Y - 160, 0.5, -360, 0.71, 0.5],
      [29.0, 11400, TRENDS_Y - 160, 0.5, -360, 0.71, 0.5],
      [29.5, "trust", null, null, -360],
      [30.4, "trust", null, null, -360],
      // the wide shot: the scenes gather into one frame as the camera pulls back (layoutGather)
      [31.0, "wide", null, null, -360],
      [31.35, "wide", null, null, -360],
      [32.3, 0, 50, 0.95, -360, 0.67, 0.5],
      [33.0, 0, 50, 0.95, -360, 0.67, 0.5],
      [34.0, 0, 30, 0.8, -360, 0.5, 0.5],
      [END, 0, 30, 0.76, -360, 0.5, 0.5]
    );
    KEYS = k;
  }
  buildKeys();

  /* ------------------------------------------------------------ the agent path */
  // [u, x, y, glow, "line"?]; "line" makes the segment that starts there straight.
  // A null row is a cut (the trail stops, the spark reappears).
  const N = SPACE.nodes, DV = SPACE.divider;
  let PATH_SEGS = [];
  // rebuilt once the data has set the height of the application map
  function buildPath() {
    const PATH = [
      [0, 0, 330, 0.25], [3.0, 0, 330, 0.3],
      // along the foot of the brief, up the line between what it states and what it leaves open,
      // then back down that line, stopping at each open decision
      [3.42, DV - 30, 338, 0.4], [3.55, DV, 286, 0.42, "line"], [4.15, DV, N[0] - 80, 0.48, "line"],
      [ZONE_T(0), DV, N[0], 0.5, "line"], [ZONE_T(1), DV, N[1], 0.55, "line"], [ZONE_T(2), DV, N[2], 0.6, "line"],
      [ZONE_T(3), DV, N[3], 0.65], [5.62, DV, N[3], 0.65],
      [5.82, 480, 334, 0.67], [6.08, 1330, 328, 0.69], [6.4, 2050, -6, 0.7],
      [6.75, 2900, 0, 0.72], [7.2, 2900, 0, 0.75], [7.65, 4100, 0, 0.85], [8.05, 4100, 0, 0.88], [8.5, 5300, 0, 1], [9.0, 5300, 0, 1],
      [9.75, 6800, -1250, 1], [13.2, 6800, 3330, 1],
      [14.1, RING.x, RING.y, 1], [24.75, RING.x, RING.y, 1],
      // around the application map, never through it: over the top while the whole map is in view, so it has
      // left the frame before the camera closes in on a band
      // (its far side runs straight, so it stays clear of the frame the last table is shown in)
      [25.3, MAP.left - 140, MAP.top - 240, 1], [26.0, MAP.right - 60, MAP.top - 240, 1], [26.08, MAP.right + 140, MAP.top - 40, 1, "line"],
      [27.42, MAP.right + 140, MAP.bottom + 130, 1], [27.5, MAP.right - 60, MAP.bottom + 330, 1], [27.95, MAP.left, MAP.bottom + 330, 1],
      [28.25, 9850, TRENDS_Y, 1], [29.0, 11750, TRENDS_Y, 1],
      // on past the trends, around the last table outside its frame (below it, then up its far side), and in
      // over the top: down the line between low and high, one stop per capability, and the take rests on the
      // question of trust. Going around keeps the trail out from behind the caption.
      [29.12, 13600, 6960, 1], [29.22, 15250, 6800, 1], [29.3, 15640, 6000, 1], [29.38, 15640, 4900, 1],
      [29.42, 15440, TRUST.over, 1, "line"], [29.5, TRUST.rail + 235, TRUST.over, 1, "line"],
      [29.515, TRUST.rail + 45, TRUST.over, 1], [29.53, TRUST.rail, TRUST.over + 45, 1, "line"],
      [TRUST_T(0), TRUST.rail, TRUST.rows[0], 1, "line"], [TRUST_T(1), TRUST.rail, TRUST.rows[1], 1, "line"],
      [TRUST_T(2), TRUST.rail, TRUST.rows[2], 1, "line"], [29.99, TRUST.rail, TRUST.node, 1.1], [30.9, TRUST.rail, TRUST.node, 1.1],
      null,
      [31.6, 0, 340, 1.1], [END, 0, 340, 1.1]
    ];
    const segs = [[]];
    PATH.forEach(p => (p ? segs[segs.length - 1].push(p) : segs.push([])));
    PATH_SEGS = segs;
  }
  buildPath();
  const CUT_A = 30.9, CUT_B = 31.6;
  // the last scene clears (CURTAIN) as the credits come up (CREDITS), so one page does not dissolve through the other
  const CURTAIN = [32.88, 33.14], CREDITS = 33.1;

  // cardinal spline with low tension so long jumps don't loop back on themselves
  function catmull(p0, p1, p2, p3, t) {
    const c = 0.32, m1 = c * (p2 - p0), m2 = c * (p3 - p1);
    const t2 = t * t, t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * p1 + (t3 - 2 * t2 + t) * m1 + (-2 * t3 + 3 * t2) * p2 + (t3 - t2) * m2;
  }
  function pathAt(u) {
    const seg = u < (CUT_A + CUT_B) / 2 ? PATH_SEGS[0] : PATH_SEGS[1];
    if (u <= seg[0][0]) return { x: seg[0][1], y: seg[0][2], g: seg[0][3] };
    const last = seg[seg.length - 1];
    if (u >= last[0]) return { x: last[1], y: last[2], g: last[3] };
    let i = 0;
    while (i < seg.length - 2 && u > seg[i + 1][0]) i++;
    const a = seg[Math.max(0, i - 1)], b = seg[i], c = seg[i + 1], d = seg[Math.min(seg.length - 1, i + 2)];
    const t = ease(prog(u, b[0], c[0]));
    if (b[1] === c[1] && b[2] === c[2]) return { x: b[1], y: b[2], g: lerp(b[3], c[3], t) };
    if (b[4] === "line") return { x: lerp(b[1], c[1], t), y: lerp(b[2], c[2], t), g: lerp(b[3], c[3], t) };
    return { x: catmull(a[1], b[1], c[1], d[1], t), y: catmull(a[2], b[2], c[2], d[2], t), g: lerp(b[3], c[3], t) };
  }

  /* --------------------------------------------------------- the gathered frame */
  // The wide shot does not show the scenes where the camera found them, strung out along the journey. As the
  // camera pulls back they gather into one compact frame: the brief's task space and the spectrum on top, the
  // 6A loop with the lineage coming down beside it, the application map and the last table below. Each scene
  // moves and scales as a block (its labels through its .scene element, its line-work through the canvas),
  // the light's trail goes with them, and they return to their places as the camera leaves. No other shot
  // uses these positions.
  const GATHER = { scenes: {}, stays: [], box: { x0: 0, x1: 1, y0: 0, y1: 1 } };
  const gatherAt = u => ease(prog(u, 30.42, 30.98)) * (1 - ease(prog(u, 31.4, 31.95)));
  // a scene's placement when the frame is g of the way gathered: a point p of the scene shows at s * p + (x, y)
  const SAME = { s: 1, x: 0, y: 0 };
  const sceneAt = (id, g) => {
    const S = GATHER.scenes[id];
    return g && S ? { s: 1 + (S.s - 1) * g, x: S.tx * g, y: S.ty * g } : SAME;
  };
  function layoutGather() {
    // what each scene covers, with its line-work and the stretch of the light's route that belongs to it
    const B = {
      space: SPACE.box,
      spectrum: { x0: 2440, x1: 5790, y0: -440, y1: 300 },
      lineage: { x0: 6150, x1: 7450, y0: -1260, y1: 3660 },
      ring: { x0: RING.x - 1720, x1: RING.x + 1720, y0: RING.y - 1660, y1: RING.y + 1630 },
      field: { x0: MAP.left - 390, x1: MAP.right + 170, y0: MAP.top - 270, y1: TRENDS_Y + 40 },
      trust: { x0: TRUST.box.x0, x1: 15670, y0: TRUST.over - 40, y1: 6990 }
    };
    const w = id => B[id].x1 - B[id].x0, h = id => B[id].y1 - B[id].y0;
    const GAP = 240;
    // the frame grows from the first scene's own corner, so the camera leaves it by closing in on the brief
    const ox = B.space.x0, oy = B.space.y0;
    const place = (id, s, x, y) => { GATHER.scenes[id] = { ...GATHER.scenes[id], s, tx: ox + x - s * B[id].x0, ty: oy + y - s * B[id].y0 }; };

    // bottom row: the application map and the last table keep their sizes and their level (the light's lane
    // under both is one line), and move closer
    const W = w("field") + 300 + w("trust");
    const bottom = Math.max(h("field"), B.trust.y1 - B.field.y0);
    // middle row: the 6A loop, and the lineage down the right-hand side
    const H2 = 3600, c = H2 / h("lineage"), xLineage = W - w("lineage") * c;
    const d = Math.min(H2 / h("ring"), (xLineage - GAP) / w("ring"));
    // top row: the task space, then the spectrum, whose rail runs on into the top of the lineage
    const a = 0.9, R = 300;
    const xLine = xLineage + (6800 - B.lineage.x0) * c;            // the lineage's own line
    const xSpectrum = w("space") * a + GAP;
    const b = (xLine - R - 80 - xSpectrum) / (5770 - B.spectrum.x0); // the rail's arrowhead stops short of the bend
    const H1 = Math.max(h("space") * a, h("spectrum") * b);
    const y2 = H1 + GAP, y3 = y2 + H2 + GAP;

    place("space", a, 0, (H1 - h("space") * a) / 2);
    place("spectrum", b, xSpectrum, (H1 - h("spectrum") * b) / 2);
    place("lineage", c, xLineage, y2);
    place("ring", d, (xLineage - GAP - w("ring") * d) / 2, y2 + (H2 - h("ring") * d) / 2);
    place("field", 1, 0, y3);
    place("trust", 1, w("field") + 300, y3 + B.trust.y0 - B.field.y0);
    GATHER.box = { x0: ox - 70, x1: ox + W + 70, y0: oy - 70, y1: oy + y3 + bottom + 70 };

    // The light's path, scene by scene. Between two scenes it eases from one placement to the other; from
    // the spectrum it follows the rail on, and turns down into the lineage.
    const at = (S, x, y) => ({ x: S.s * x + S.tx, y: S.s * y + S.ty });
    const G = GATHER.scenes;
    const p0 = at(G.spectrum, 5300, 0), p1 = at(G.lineage, 6800, -1250);
    const l1 = p1.x - R - p0.x, l2 = (Math.PI * R) / 2, l3 = p1.y - p0.y - R;
    const turn = f => {
      const run = f * (l1 + l2 + l3);
      if (run <= l1) return { x: p0.x + run, y: p0.y };
      if (run <= l1 + l2) {
        const t = (run - l1) / R;
        return { x: p1.x - R + R * Math.sin(t), y: p0.y + R - R * Math.cos(t) };
      }
      return { x: p1.x, y: p0.y + R + run - l1 - l2 };
    };
    GATHER.stays = [
      { from: -Infinity, to: 5.62, S: G.space },
      { from: 6.75, to: 9.0, S: G.spectrum },
      { from: 9.75, to: 13.2, S: G.lineage, route: turn },
      { from: 14.1, to: 24.75, S: G.ring },
      { from: 25.3, to: 29.0, S: G.field },
      { from: 29.12, to: Infinity, S: G.trust }
    ];
    GATHER.at = at;
  }
  layoutGather();
  // where the light's path point p, reached at path time t, sits in the gathered frame
  function gathered(t, p) {
    const stays = GATHER.stays;
    let i = 0;
    while (i < stays.length - 1 && t > stays[i].to) i++;
    const here = stays[i];
    if (t >= here.from) return GATHER.at(here.S, p.x, p.y);
    const before = stays[i - 1], f = (t - before.to) / (here.from - before.to);
    if (here.route) return here.route(f);
    const A = GATHER.at(before.S, p.x, p.y), Z = GATHER.at(here.S, p.x, p.y), e = ease(f);
    return { x: lerp(A.x, Z.x, e), y: lerp(A.y, Z.y, e) };
  }
  // the light's path as drawn: where it runs in the world, or, g of the way, in the gathered frame
  function lightAt(t, g) {
    const p = pathAt(t);
    if (!g) return p;
    const q = gathered(t, p);
    return { x: lerp(p.x, q.x, g), y: lerp(p.y, q.y, g), g: p.g };
  }

  /* ------------------------------------------------------------ viewport state */
  const stage = $("#stage"), world = $("#world"), canvas = $("#light"), ctx = canvas.getContext("2d");
  let vw = 0, vh = 0, dpr = 1, unit = 1, fit = 1, mobile = false, lastW = 0, capRight = 0, hudBottom = 0;

  function resize() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    stage.style.height = `${vh}px`;
    dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(vh * dpr);
    mobile = vw <= 760 || vw / vh < 0.8;
    fit = mobile ? vw / 820 : Math.min(vw / 1320, vh / 830);
    capRight = $("#captions").getBoundingClientRect().right;
    limitMap();
    // mobile browsers resize the viewport while the address bar hides; keep the scroll scale stable
    const next = Math.max(520, vh * 0.92);
    if (!unit || unit === 1 || Math.abs(next - unit) > 110 || vw !== lastW) {
      unit = next;
      lastW = vw;
      $("#film").style.height = `${Math.round(SPAN * unit + vh)}px`;
    }
  }

  // caption column width, read from the stylesheet so the two stay in step
  const capWidth = () => $("#captions").getBoundingClientRect().width || Math.min(440, vw * 0.34);

  // The space the captions leave free: beside them on a desktop, above the caption sheet on a phone.
  function room() {
    const capRight = capWidth() + Math.min(72, Math.max(16, vw * 0.05)) + 28;
    return mobile
      ? { x0: 12, x1: vw - 12, y0: 64, y1: vh * 0.5 }
      : { x0: capRight, x1: vw - 32, y0: 72, y1: vh - 56 };
  }
  // Named framings: a world box fitted into that space.
  function fitBox(box) {
    const r = room();
    const k = Math.min((r.x1 - r.x0) / (box.x1 - box.x0), (r.y1 - r.y0) / (box.y1 - box.y0));
    return {
      x: (box.x0 + box.x1) / 2, y: (box.y0 + box.y1) / 2, s: k / fit,
      ax: (r.x0 + r.x1) / 2 / vw, ay: (r.y0 + r.y1) / 2 / vh
    };
  }
  // A box too wide to fit at a readable size: fitted to the height of the space, looking at its near or far end.
  function fitEnd(box, far) {
    const r = room();
    const k = (r.y1 - r.y0) / (box.y1 - box.y0);
    const half = (r.x1 - r.x0) / k / 2;
    return {
      x: far ? box.x1 - half : box.x0 + half, y: (box.y0 + box.y1) / 2, s: k / fit,
      ax: (r.x0 + r.x1) / 2 / vw, ay: (r.y0 + r.y1) / 2 / vh
    };
  }
  // The middle band of the map. It is framed from the second rung: the first runs on under the captions,
  // and a bar that starts there keeps its name in view (tuckBars). Below READABLE the bars' names are too
  // small to read, so a narrow screen looks at the band's far end and travels back to its near end.
  const READABLE = 0.32;
  function mapMid(far) {
    const g = MAP.bands[1];
    const box = {
      x0: Math.max(g.x0, MAP.left + MAP.col) - 50, x1: g.x1 + 50,
      // a desktop has the height to keep the band above in the frame as well
      y0: mobile ? g.top - 10 : MAP.top - 90, y1: g.top + g.h + (mobile ? 10 : 30)
    };
    const m = fitBox(box);
    return m.s * fit >= READABLE ? m : fitEnd(box, far);
  }
  const VIEWS = {
    // the whole map, with the lane over its top that the light travels (buildPath)
    map: () => fitBox({ x0: MAP.left - 380, x1: MAP.right + 40, y0: MAP.top - 330, y1: MAP.bottom + 170 }),
    mapMidA: () => mapMid(false),
    mapMidB: () => mapMid(true),
    // the lowest band, with the rung names under it
    mapLow: () => {
      const b = MAP.bands[MAP.bands.length - 1];
      return fitBox({ x0: b.x0 - 50, x1: b.x1 + 50, y0: b.top - 30, y1: MAP.bottom + 95 });
    },
    // the top band, with the three lanes under it
    mapTop: () => {
      const [top, next] = MAP.bands, lanes = next.rows.slice(0, 3);
      return fitBox({
        x0: Math.min(top.x0, ...lanes.map(r => r.x0)) - 50, x1: Math.max(top.x1, ...lanes.map(r => r.x1)) + 50,
        y0: MAP.top - 40, y1: next.top + MAP.pad + MAP.lane * 3 + 20
      });
    },
    // a phone is too narrow for both halves at a readable size, so it looks at one, then the other
    spaceA: () => fitBox(mobile ? SPACE.explicitBox : SPACE.box),
    spaceB: () => fitBox(mobile ? SPACE.residualBox : SPACE.box),
    trust: () => fitBox(mobile ? TRUST.phoneBox : TRUST.box),
    wide: () => fitBox(GATHER.box)
  };
  function resolveKey(K) {
    const view = VIEWS[K[1]];
    if (!view) return K;
    const m = view();
    return [K[0], m.x, m.y, m.s, K[4], m.ax, m.ay, true];
  }

  function camAt(u) {
    let i = 0;
    while (i < KEYS.length - 2 && u > KEYS[i + 1][0]) i++;
    const A = resolveKey(KEYS[i]), B = resolveKey(KEYS[i + 1]);
    const e = ease(prog(u, A[0], B[0]));
    const sA = A[3], sB = B[3];
    const s = Math.exp(lerp(Math.log(sA), Math.log(sB), e));
    let x, y;
    if (sB < sA * 0.98) {
      const w = (sB / s) * e;
      x = lerp(A[1], B[1], w); y = lerp(A[2], B[2], w);
    } else if (sB > sA * 1.02) {
      const w = 1 - (sA / s) * (1 - e);
      x = lerp(A[1], B[1], w); y = lerp(A[2], B[2], w);
    } else {
      x = lerp(A[1], B[1], e); y = lerp(A[2], B[2], e);
    }
    let ax = lerp(A[5], B[5], e), ay = lerp(A[6], B[6], e);
    if (mobile) {
      // phones keep the world above the caption sheet; named framings bring their own anchor
      const orbit = prog(u, 14.9, 15.3) * (1 - prog(u, 21.5, 21.9));
      const free = lerp(lerp(0.32, 0.44, orbit), 0.45, centerness(u));
      ax = lerp(A[7] ? A[5] : 0.5, B[7] ? B[5] : 0.5, e);
      ay = lerp(A[7] ? A[6] : free, B[7] ? B[6] : free, e);
    }
    return { x, y, s, r: lerp(A[4], B[4], e), ax, ay };
  }
  // 1 where the frame is composed around the centre (the opening pages and the credits)
  const centerness = u => Math.max(1 - prog(u, -0.5, 0.1), prog(u, 33.2, 34));

  /* ---------------------------------------------------------- reveal registry */
  let reveals = [], typers = [];
  function collect() {
    reveals = [...document.querySelectorAll("#film [data-show]")].map(el => {
      const [a, b] = el.dataset.show.split(" ").map(Number);
      return { el, a, b, o: -1 };
    });
    // only the film's typed lines: library table rows also carry data-type
    typers = [...document.querySelectorAll("#world [data-type][data-full]")].map(el => {
      const [a, b] = el.dataset.type.split(" ").map(Number);
      return { el, a, b, full: el.dataset.full, n: -1 };
    });
  }
  const FADE = 0.28;
  const vis = (u, a, b) => Math.min(prog(u, a, a + FADE), 1 - prog(u, b - FADE, b));

  /* ------------------------------------------------------------- world content */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const GATE_FAIL = [
    ["Low confidence", "clarify or seek more information"],
    ["Low net value", "suppress, defer, or re-plan"],
    ["Bad moment", "wait or reschedule for a task boundary"],
    ["Unsafe or unauthorized", "safer fallback, approval, escalation, or refusal"]
  ];

  function buildRing(tax, papers) {
    const counts = {};
    (papers?.papers || []).forEach(p => (p.capacities || []).forEach(c => { counts[c] = (counts[c] || 0) + 1; }));
    const caps = CAPS.map(c => ({ ...c, ...(tax.capacities.find(t => t.id === c.id) || {}) }));
    let html = "";
    caps.forEach((c, i) => {
      const p = nodePos(i);
      html += `<div class="w up node rv" data-show="${(14.25 + i * 0.1).toFixed(2)} 99" data-node="${i}" style="--x:${p.x.toFixed(0)};--y:${p.y.toFixed(0)};--h:${c.color}"><i>0${i + 1}</i><b>${esc(c.name)}</b></div>`;
      const dims = c.subdimensions || [];
      const n = dims.length;
      const a = nodeAngle(i) * D2R;
      const out = { x: Math.cos(a), y: Math.sin(a) }, tan = { x: -Math.sin(a), y: Math.cos(a) };
      dims.forEach((d, k) => {
        const row = Math.floor(k / 2), inRow = Math.min(2, n - row * 2);
        const side = inRow === 1 ? 0 : (k % 2 === 0 ? -1 : 1);
        const up = 330 + row * 230 + (c.id === "arbitration" ? row * 30 : 0), across = side * 215;
        const x = p.x + out.x * up + tan.x * across, y = p.y + out.y * up + tan.y * across;
        const extra = c.id === "arbitration" && GATE_FAIL[k] ? `<em>${esc(GATE_FAIL[k][0])}: ${esc(GATE_FAIL[k][1])}</em>` : "";
        const label = c.id === "arbitration" ? `Gate ${k + 1} of 4` : `Dimension ${k + 1}`;
        html += `<div class="w up sat rv" data-show="${(CAP_START(i) + 0.22 + k * 0.08).toFixed(2)} ${(CAP_START(i) + 1.2).toFixed(2)}" style="--x:${x.toFixed(0)};--y:${y.toFixed(0)};--h:${c.color}"><span class="sat-k">${label}</span><b>${esc(d.name)}</b>${extra}</div>`;
      });
    });
    $("#ring-layer").innerHTML = html;

    $("#cap-capacities").innerHTML = caps.map((c, i) => {
      const s = CAP_START(i);
      const gate = c.id === "arbitration"
        ? `<ul class="gate">${GATE_FAIL.map(g => `<li><b>${esc(g[0])}</b> → ${esc(g[1])}</li>`).join("")}<li><b>All four pass</b> → license to intervene</li></ul>`
        : "";
      return `<section class="cap rv" data-show="${(s + 0.12).toFixed(2)} ${(s + 1.1).toFixed(2)}">
        <p class="kicker">Capacity 0${i + 1} of 06</p>
        <h2 style="color:${c.color}">${esc(c.name)}</h2>
        <p class="q">“${esc(c.question)}”</p>
        <p>${esc(c.description)}</p>
        ${counts[c.id] ? `<a class="cap-lib" href="#library" data-cap="${c.id}">${counts[c.id]} papers in the library →</a>` : ""}
        ${gate || `<ul class="dims">${(c.subdimensions || []).map(d => `<li><b>${esc(d.name)}</b><span>${esc(d.works.join(" · "))}</span></li>`).join("")}</ul>`}
      </section>`;
    }).join("");
  }

  function buildEvaluation(ev) {
    // the survey's order: task utility, mechanism-level, user experience. Three complementary levels.
    const levels = ev.levels;
    const hue = id => (CAPS.find(c => c.id === id) || {}).color;
    let html = "";
    levels.forEach((lvl, k) => {
      const R = EVAL_R[k];
      const t = EVAL_START(k);
      html += `<div class="w up ring-name rv" data-show="${(t + 0.1).toFixed(2)} 99" style="--x:${RING.x};--y:${RING.y - R}">${k + 1} · ${esc(lvl.name)}</div>`;
      const n = lvl.categories.length;
      lvl.categories.forEach((cat, j) => {
        const ang = (-90 + (360 / n) * (j + 0.5) + k * 17) * D2R;
        const tint = cat.capacity ? ` style="--x:${(RING.x + R * Math.cos(ang)).toFixed(0)};--y:${(RING.y + R * Math.sin(ang)).toFixed(0)};--h:${hue(cat.capacity)}"` : ` style="--x:${(RING.x + R * Math.cos(ang)).toFixed(0)};--y:${(RING.y + R * Math.sin(ang)).toFixed(0)}"`;
        html += `<div class="w up eval-tag${cat.capacity ? " eval-cap" : ""} rv" data-show="${(t + 0.2 + j * 0.06).toFixed(2)} 99"${tint}>${esc(cat.name)}</div>`;
      });
    });
    $("#eval-layer").innerHTML = html;

    $("#cap-evaluation").innerHTML = levels.map((lvl, k) => {
      const t = EVAL_START(k);
      const head = k === 0
        ? `<h2>Evaluating proactiveness requires evidence beyond task completion.</h2><p>Three complementary levels, and none substitutes for the others: a successful intervention may be poorly justified or burdensome.</p>`
        : `<h2>${esc(lvl.name)}</h2>`;
      const rows = lvl.categories.map(c => c.capacity
        ? `<div class="metric-cap" style="--h:${hue(c.capacity)}"><b>${esc(c.name)}</b><span>${esc(CAPS.find(x => x.id === c.capacity).id)}</span></div>`
        : `<div><b>${esc(c.name)}</b><span>${esc(c.metrics.slice(0, 2).join(" · "))}</span></div>`).join("");
      return `<section class="cap rv" data-show="${(t - 0.05).toFixed(2)} ${(t + 0.7).toFixed(2)}">
        <p class="kicker">Evaluation · level ${k + 1} of 3 · ${esc(lvl.name)}</p>
        ${head}
        <p class="q">“${esc(lvl.question)}”</p>
        <div class="metrics">${rows}</div>
      </section>`;
    }).join("");
  }

  const INITIATIVE = { reactive: 0, trigger: 1, forecast: 2, mandate: 3 };
  const DOMAIN_ALIAS = {
    "GUI agents / CUA": "GUI Agents", "Embodied / robotics": "Embodied & Robotics",
    "Entertainment": "Entertainment & Media"
  };
  function buildMap(mat, apps) {
    const counts = {};
    apps.systems.forEach(s => { const key = s.domain.toLowerCase(); counts[key] = (counts[key] || 0) + 1; });
    const rows = mat.domains.map(d => {
      const span = d.initiative.toLowerCase().split(/[–-]/).map(s => INITIATIVE[s.trim()]).filter(v => v !== undefined);
      const auth = d.authority.toLowerCase();
      // a label such as "Suggestion / action" sits in the band it starts from and keeps its wording on the bar
      const band = auth.includes("unsupervised") ? 0 : auth.startsWith("suggestion") ? 2 : 1;
      const name = d.applications || DOMAIN_ALIAS[d.domain] || d.domain;
      const n = counts[name.toLowerCase()] ?? 0;
      // the survey's exact authority label when it says more than the band name
      const gate = /^(gated action|suggestion)$/i.test(d.authority) ? "" : d.authority.replace(/^unsupervised\s*\((.*)\)$/i, "$1");
      return { ...d, lo: Math.min(...span), hi: Math.max(...span), band, n, gate, reaches: /\/\s*action/i.test(d.authority) };
    });
    MAP.bands.forEach((b, i) => { b.lanes = Math.max(1, rows.filter(r => r.band === i).length); });
    layoutBands();
    buildKeys();
    buildPath();

    let html = `<div class="w axis axis-title rv" data-show="24.95 99" style="--x:${(MAP.left + MAP.right) / 2};--y:${MAP.bottom + 125}">Initiative: where the agent’s task comes from →</div>`;
    html += `<div class="w rung-empty rv" data-show="25.3 99" style="--x:${MAP.colX(4)};--y:${(MAP.top + MAP.bottom) / 2}">No domain has reached this rung</div>`;
    html += `<div class="w axis axis-title band-axis rv" data-show="24.95 99" style="--x:${MAP.left - 40};--y:${MAP.top - 70};transform:translate(-100%,-50%)">Authority ↑</div>`;
    MAP.cols.forEach((c, i) => {
      html += `<div class="w axis rv" data-show="24.95 99" style="--x:${MAP.colX(i)};--y:${MAP.bottom + 55}">${c}</div>`;
    });
    MAP.bands.forEach((b, i) => {
      html += `<div class="w band rv" data-show="24.95 99" style="--x:${MAP.left - 40};--y:${b.cy}"><b>${b.label}</b>${b.sub}</div>`;
      const inBand = rows.filter(r => r.band === i);
      if (inBand.length) { b.x0 = Infinity; b.x1 = -Infinity; }
      else {
        const cx = (MAP.colX(2) + MAP.colX(3)) / 2;
        b.x0 = cx - 330; b.x1 = cx + 330;
        html += `<div class="w band-empty rv" data-show="25.3 99" style="--x:${cx};--y:${b.cy}">${b.empty}</div>`;
      }
      // within a band, the domains whose initiative reaches furthest sit highest;
      // of equals, one whose authority also reaches the band above goes first
      inBand.sort((a, z) => z.hi - a.hi || z.lo - a.lo || z.reaches - a.reaches).forEach((r, lane) => {
        const x0 = MAP.colX(r.lo) - MAP.col / 2 + 14, x1 = MAP.colX(r.hi) + MAP.col / 2 - 14;
        const y = b.top + MAP.pad + MAP.lane * (lane + 0.5);
        const t = 25.0 + i * 0.12 + lane * 0.05;
        const count = r.n ? `${r.n}<i class="bar-unit"> ${r.n === 1 ? "work" : "works"}</i>` : "no table";
        // a one-column bar sets its authority label beside it (fitBars), so the frame leaves room for that
        const reach = x1 + (r.gate && r.hi === r.lo ? 340 : 0);
        b.x0 = Math.min(b.x0, x0); b.x1 = Math.max(b.x1, reach);
        b.rows.push({ x0, x1: reach, y });
        html += `<div class="w bar rv" data-show="${t.toFixed(2)} 99" data-grow="${t.toFixed(2)}" style="--x:${x0};--y:${y};width:${x1 - x0}px" title="${esc(r.domain)}: ${esc(r.constraint)}"><b>${esc(r.domain)}</b>${r.hi - r.lo >= 1 ? `<small>${esc(r.constraint)}</small>` : ""}<span class="bar-n">${r.gate ? `<i class="bar-gate">${esc(r.gate)}</i><i class="bar-sep"> · </i>` : ""}<i class="bar-count">${count}</i></span></div>`;
        // the same label, set beside the bar: shown only when the bar is too short to hold it (fitBars)
        if (r.gate) html += `<div class="w bar-note rv" data-show="${(t + 0.2).toFixed(2)} 99" style="--x:${x1 + 24};--y:${y}">${esc(r.gate)}</div>`;
      });
    });
    mapLayer.innerHTML = html;
    measureMap();
    document.fonts?.ready.then(measureMap);
  }

  // A one-column bar can be too short for what it carries. First the survey's authority label moves
  // out beside the bar; if the name and the count still do not fit, the count drops its noun.
  function fitBars() {
    document.querySelectorAll("#map-layer .bar").forEach(el => {
      // measured at rest: a bar tucked under the captions (tuckMap) has given up part of its width
      el.classList.remove("bar-out", "bar-fit1", "tucked", "bar-tight", "bar-brief");
      el.style.removeProperty("--tuck");
      const over = () => el.scrollWidth > el.clientWidth + 1;
      if (over() && el.querySelector(".bar-gate")) el.classList.add("bar-out");
      if (over()) el.classList.add("bar-fit1");
    });
  }

  // A bar's constraint is cut short with an ellipsis when it does not fit. Under this width (world units) what
  // is left is a scrap ("Arbitra…"), and the bar goes without it.
  const SCRAP = 150;
  // Where the map's labels and bars sit, and the least each bar can show (world units). tuckMap uses them
  // to keep the map clear of the captions, the top bar and the chapter track.
  function measureMap() {
    fitBars();
    const box = el => {
      const x = Number(el.style.getPropertyValue("--x")), y = Number(el.style.getPropertyValue("--y"));
      const w = el.offsetWidth, h = el.offsetHeight;
      // bars and their notes are set from their left end, band names from their right end, the rest from the centre
      const from = el.matches(".bar, .bar-note") ? 0 : el.matches(".band, .band-axis") ? 1 : 0.5;
      return { el, left: x - w * from, right: x + w * (1 - from), top: y - h / 2, bottom: y + h / 2, o: -1 };
    };
    mapNames = [...mapLayer.querySelectorAll(".band, .axis, .band-empty, .rung-empty")].map(box);
    mapBars = [...mapLayer.querySelectorAll(".bar")].map(el => {
      const cs = getComputedStyle(el), gap = parseFloat(cs.columnGap) || 0;
      const padLeft = parseFloat(cs.paddingLeft), pad = padLeft + parseFloat(cs.paddingRight);
      const name = el.querySelector("b").offsetWidth;
      const gate = [...el.querySelectorAll(".bar-gate, .bar-sep")].reduce((w, i) => w + i.offsetWidth, 0);
      // the least a bar can show is its name and its count (the constraint between them shrinks to nothing);
      // `tight` is the same without the constraint and the authority label
      const count = el.querySelector(".bar-n").offsetWidth;
      const note = el.nextElementSibling?.matches(".bar-note") ? box(el.nextElementSibling) : null;
      return {
        ...box(el), name, padLeft, note, tuck: -1, isTight: null, isBrief: null,
        full: pad + name + gap * (el.children.length - 1) + count, tight: pad + name + gap + count - gate,
        // the constraint needs this much room: all of it if it is short, or enough to read as a phrase
        text: Math.min(el.querySelector("small")?.scrollWidth ?? 0, SCRAP)
      };
    });
    limitMap();
  }

  // The screen edges the map has to stay clear of: the captions (beside the map on a desktop, under it on
  // a phone), the top bar and the chapter track.
  function limitMap() {
    // measured from the stage, which is not at the top of the window once the page has scrolled past the film
    const y0 = stage.getBoundingClientRect().top;
    hudBottom = $(".hud-top").getBoundingClientRect().bottom - y0;
    stage.style.setProperty("--hud-b", `${hudBottom.toFixed(1)}px`);
    const top = hudBottom;
    if (mobile) {
      const caps = [...document.querySelectorAll("#captions .cap[data-show]")].filter(c => {
        const from = parseFloat(c.dataset.show);
        return from >= 24.7 && from < 27.9;
      });
      // a caption that is not showing sits 14px low (its entrance), so its top is read that much higher
      mapLimits = { edge: 8, top, bottom: Math.min(vh, ...caps.map(c => c.getBoundingClientRect().top - y0 - 14)) - 8 };
    } else {
      mapLimits = { edge: capRight + 12, top, bottom: $(".hud-bottom").getBoundingClientRect().top - y0 - 1 };
    }
  }

  // A close framing shows part of the map: its bars run on under the captions, and its rows reach the top
  // bar and the chapter track. A bar that runs under the captions keeps its name in view at their edge for
  // as long as it has room, giving up its authority label before its name. A label, or a row, that reaches
  // into one of those zones fades out, so nothing shows through the text.
  function tuckMap(cam, k0, Ax, Ay, M) {
    // M is where the map's scene stands (the wide shot moves it); k, the size its own units show at
    const rad = cam.r * D2R, cos = Math.cos(rad), sin = Math.sin(rad), k = k0 * M.s;
    const sx = (x, y) => Ax + ((x * M.s + M.x - cam.x) * cos - (y * M.s + M.y - cam.y) * sin) * k0;
    const sy = (x, y) => Ay + ((x * M.s + M.x - cam.x) * sin + (y * M.s + M.y - cam.y) * cos) * k0;
    const { edge, top, bottom } = mapLimits;
    // each fade is complete by the time the element would touch what it has to stay clear of, and has not
    // begun inside the space a fitted framing uses (room)
    const inRows = n => clamp((sy(n.left, n.top) - top) / 8 - 1) * clamp((bottom - sy(n.left, n.bottom)) / 10);
    const onScreen = n => clamp((vw - 2 - sx(n.right, n.top)) / 16);
    const show = (n, o) => {
      o = Math.round(o * 20) / 20;
      if (o !== n.o) { n.o = o; n.el.style.setProperty("--shy", o); }
    };
    for (const n of mapNames) show(n, clamp((sx(n.left, n.top) - edge) / 16 + 1) * onScreen(n) * inRows(n));
    for (const b of mapBars) {
      const left = sx(b.left, b.top), width = b.right - b.left;
      const hidden = Math.max(0, (edge - left) / k);
      const tuck = Math.min(hidden, Math.max(0, width - b.tight));
      const tight = hidden > 0 && hidden > width - b.full;
      const brief = width - tuck - b.full < b.text;
      const nameEnd = left + (tuck + b.padLeft + b.name) * k;
      const o = clamp(1 - (hidden - tuck) / 60) * clamp((vw - 4 - nameEnd) / 16) * inRows(b);
      show(b, o);
      if (b.note) show(b.note, o * onScreen(b.note));
      const t = Math.round(tuck);
      if (t !== b.tuck) {
        b.tuck = t;
        b.el.style.setProperty("--tuck", `${t}px`);
        b.el.classList.toggle("tucked", t > 0);
      }
      if (tight !== b.isTight) { b.isTight = tight; b.el.classList.toggle("bar-tight", tight); }
      if (brief !== b.isBrief) { b.isBrief = brief; b.el.classList.toggle("bar-brief", brief); }
    }
  }

  function buildOpening(site, papers, apps) {
    const set = (k, v) => { const el = $(`[data-scope="${k}"]`); if (el) el.textContent = v.toLocaleString("en"); };
    set("papers", papers.papers.length);
    set("systems", apps.systems.length);
  }

  function buildCredits(site) {
    // each name travels with its separator, so a line never breaks inside a name or starts with a dot
    const roll = list => list.map((t, i) => `<span class="nb">${esc(t)}${i < list.length - 1 ? " ·" : ""}</span>`).join(" ");
    // the author list keeps the rows of the paper's title page; on a phone they run on as one list
    const rows = [];
    let at = 0;
    for (const n of site.author_rows || []) { rows.push(site.authors.slice(at, at + n)); at += n; }
    if (at < site.authors.length) rows.push(site.authors.slice(at));
    $("#credit-authors").innerHTML = rows.map((r, i) =>
      `<span class="credits-row">${roll(r)}${i < rows.length - 1 ? '<i class="row-sep"> ·</i>' : ""}</span>`).join(" ");
    $("#credit-aff").innerHTML = roll(site.affiliations);
    $("#bib").textContent = site.citation;
    if (site.links?.github) $("#link-github").href = site.links.github;
  }

  /* ------------------------------------------------------------------ chapters */
  const CHAPTERS = [
    { id: "opening", u: -PRE, go: -PRE, label: "Why it matters" },
    { id: "prologue", u: 0, go: 0.6, label: "Waiting" },
    { id: "discretion", u: 3.1, go: 3.7, label: "Discretion" },
    { id: "spectrum", u: 6.3, go: 6.9, label: "Spectrum" },
    { id: "lineage", u: 9.2, go: 9.9, label: "Lineage" },
    { id: "mechanism", u: 13.5, go: 14.4, label: "The 6A loop" },
    { id: "evaluation", u: 22.4, go: 22.95, label: "Evidence" },
    { id: "applications", u: 24.75, go: 25.4, label: "In the field" },
    { id: "trust", u: 29.15, go: 30.16, label: "Earned autonomy" },
    { id: "epilogue", u: 30.6, go: 32.4, label: "First move" },
    { id: "credits", u: 33.1, go: END, label: "Credits" },
    { id: "library", u: END, go: null, label: "Library" }
  ];
  function buildChapters() {
    $("#chapters").innerHTML = CHAPTERS.map((c, i) =>
      `<li style="left:${(((c.u + PRE) / SPAN) * 100).toFixed(2)}%" data-ch="${i}"><button type="button" data-go="${c.go}" aria-label="Jump to ${c.label}"><span>${c.label}</span></button></li>`
    ).join("");
    document.addEventListener("click", e => {
      const a = e.target.closest("a[data-cap]");
      if (!a) return;
      e.preventDefault();
      document.dispatchEvent(new CustomEvent("library:focus", { detail: { capacity: a.dataset.cap } }));
    });
    $("#chapters").addEventListener("click", e => {
      const b = e.target.closest("button[data-go]");
      if (!b) return;
      if (b.dataset.go === "null") { document.getElementById("library").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); return; }
      const ch = CHAPTERS.find(c => String(c.go) === b.dataset.go);
      if (ch) history.replaceState(null, "", `#${ch.id}`);
      jump(Number(b.dataset.go));
    });
    $(".hud-brand").addEventListener("click", e => { e.preventDefault(); jump(-PRE); });
    $("#replay").addEventListener("click", e => { e.preventDefault(); jump(-PRE); });
  }
  function jump(u) {
    window.scrollTo({ top: Math.round((u + PRE) * unit), behavior: reduceMotion ? "auto" : "smooth" });
  }

  /* -------------------------------------------------------------- canvas: dust */
  const DUST = Array.from({ length: 170 }, () => ({ x: Math.random(), y: Math.random(), z: 0.15 + Math.random() * 0.85, p: Math.random() * 6.28 }));
  // dots fill the residual decision space: undetermined until the light reaches each decision
  const SPACE_DOTS = [];
  for (let x = SPACE.residual.x0 + 26; x <= SPACE.residual.x1 - 22; x += 40) {
    for (let y = SPACE.residual.y0 + 26; y <= SPACE.residual.y1 - 22; y += 40) {
      let zone = 0;
      SPACE.nodes.forEach((ny, i) => { if (Math.abs(y - ny) < Math.abs(y - SPACE.nodes[zone])) zone = i; });
      SPACE_DOTS.push({ x, y, zone, d: Math.hypot(x - SPACE.divider, y - SPACE.nodes[zone]) });
    }
  }

  /* -------------------------------------------------------------- render loop */
  let cu = -PRE, last = performance.now(), noise;
  const chat = $("#chat"), chatPh = $("#chat-ph");
  const zoneEls = [...document.querySelectorAll("#world [data-zone]")].map(el => ({ el, i: Number(el.dataset.zone) }));
  const mapLayer = $("#map-layer");
  let mapNames = [], mapBars = [], mapLimits = { edge: 0, top: 0, bottom: 0 };
  let chatShown = -1, gatherShown = -1;
  const sceneEls = Object.fromEntries(Object.keys(GATHER.scenes).map(id => [id, $(`#scene-${id}`)]));
  const nodesCache = () => [...document.querySelectorAll("[data-node]")];
  let nodes = [], bars = [];
  const sayEls = [...document.querySelectorAll("#world [data-trust]")].map(el => ({ el, i: Number(el.dataset.trust) }));
  const trustEl = $("#world .trust");
  const autoEls = [...document.querySelectorAll("#world .auto-high, #world .auto-arrow")];
  const trendEls = [...document.querySelectorAll(".trend")];
  const slate = $("#slate"), tc = $("#tc"), fill = $("#track-fill"), credits = $("#credits");
  let lastChapter = -1;

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const target = clamp(window.scrollY / unit - PRE, -PRE, END);
    cu = reduceMotion ? target : cu + (target - cu) * (1 - Math.exp(-dt * 5.2));
    if (Math.abs(target - cu) < 0.0005) cu = target;
    if (window.scrollY < SPAN * unit + vh) render(cu, now / 1000);
    requestAnimationFrame(frame);
  }

  function render(u, time) {
    const cam = camAt(u);
    const k = cam.s * fit;
    const Ax = cam.ax * vw, Ay = cam.ay * vh;
    world.style.transform = `translate(${Ax}px, ${Ay}px) rotate(${cam.r}deg) scale(${k}) translate(${-cam.x}px, ${-cam.y}px)`;
    world.style.setProperty("--ur", `${-cam.r}deg`);

    for (const r of reveals) {
      const o = Math.round(vis(u, r.a, r.b) * 100) / 100;
      if (o !== r.o) {
        r.o = o;
        r.el.style.setProperty("--o", o);
        r.el.style.visibility = o === 0 ? "hidden" : "";
      }
    }
    for (const t of typers) {
      const p = prog(u, t.a, t.b);
      const n = Math.round(t.full.length * p);
      if (n !== t.n) {
        t.n = n;
        t.el.textContent = t.full.slice(0, n);
        t.el.classList.toggle("typing", p > 0 && p < 1);
      }
    }
    for (const s of sayEls) s.el.classList.toggle("lit", u >= TRUST_T(s.i) - 0.02);
    trustEl.classList.toggle("lit", u >= 29.97);
    autoEls.forEach(el => el.classList.toggle("lit", u >= 30.09));
    trendEls.forEach((el, i) => el.classList.toggle("lit", trendLit(u, TREND_X[i])));
    for (const b of bars) b.el.style.setProperty("--g", ease(prog(u, b.t, b.t + 0.55)).toFixed(3));

    // the brief gives way to the sheet of explicit instructions, and returns for the epilogue.
    // It leaves as the credits come up (and so do the light and its trail, in draw): nothing shows
    // through that page
    const curtain = 1 - prog(u, CURTAIN[0], CURTAIN[1]);
    const chatO = Math.round(Math.max(Math.min(prog(u, -0.05, 0.23), 1 - prog(u, 3.12, 3.34)), prog(u, 31.35, 31.65) * curtain) * 100) / 100;
    if (chatO !== chatShown) {
      chatShown = chatO;
      chat.style.setProperty("--o", chatO);
      chat.style.visibility = chatO === 0 ? "hidden" : "";
    }
    for (const z of zoneEls) z.el.classList.toggle("lit", u >= ZONE_T(z.i) - 0.02);
    // the wide shot gathers the scenes into one frame (layoutGather)
    const gather = Math.round(gatherAt(u) * 1000) / 1000;
    if (gather !== gatherShown) {
      gatherShown = gather;
      for (const id of Object.keys(GATHER.scenes)) {
        const S = sceneAt(id, gather);
        sceneEls[id].style.transform = gather ? `translate(${S.x.toFixed(1)}px, ${S.y.toFixed(1)}px) scale(${S.s.toFixed(4)})` : "";
      }
    }
    if (u > 24.5 && u < 32.0) tuckMap(cam, k, Ax, Ay, sceneAt("field", gather));

    const epi = u > 31.2;
    chat.classList.toggle("epilogue", epi);
    chatPh.textContent = epi ? "Your call" : u > 2.15 ? "Waiting for the next instruction" : "Waiting for instructions";

    let active = -1;
    CAPS.forEach((c, i) => { if (u >= CAP_START(i) && u < CAP_START(i) + 1.1) active = i; });
    nodes.forEach((n, i) => n.classList.toggle("on", i === active || (u > 21.6 && u < 22.6)));

    document.documentElement.style.setProperty("--lb", (1 - ease(prog(u, 0.15 - PRE, 1.0 - PRE))).toFixed(3));
    // the scrim keeps captions legible over the world. While the last table is held nothing sits behind them
    // (as long as the frame stops short of the application map), so it lifts and the table's first column
    // reads at full strength
    const frameLeft = cam.x - Ax / k;
    const tableHold = mobile ? 0 : prog(u, 29.42, 29.6) * (1 - prog(u, 30.36, 30.5)) * prog(frameLeft, MAP.right + 160, MAP.right + 200);
    // It also lifts where the frame is composed around the centre
    stage.style.setProperty("--scrim", (1 - Math.max(centerness(u) * 0.85, tableHold * 0.8)).toFixed(3));
    credits.classList.toggle("live", u > 33.4);
    // the names and the buttons under them roll up together
    credits.style.setProperty("--roll", ((1 - ease(prog(u, CREDITS, 34.2))) * vh * 0.35).toFixed(1));

    hud(u);
    draw(u, time, cam, k, Ax, Ay);
  }

  function hud(u) {
    fill.style.width = `${((u + PRE) / SPAN) * 100}%`;
    let ch = 0;
    CHAPTERS.forEach((c, i) => { if (u >= c.u - 0.05) ch = i; });
    if (ch !== lastChapter) {
      lastChapter = ch;
      slate.textContent = `SC ${String(ch + 1).padStart(2, "0")} · ${CHAPTERS[ch].label}`;
      document.querySelectorAll("#chapters li").forEach((li, i) => li.classList.toggle("now", i === ch));
    }
    const secs = (u + PRE) * 6.2;
    const f = Math.floor((secs % 1) * 24), s = Math.floor(secs) % 60, m = Math.floor(secs / 60);
    tc.textContent = `TC 00:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`;
  }

  /* --------------------------------------------------------------- canvas draw */
  function rgba(hex, a) {
    const h = hex.replace("#", "");
    const n = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }

  function draw(u, time, cam, k, Ax, Ay) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, vw, vh);

    // world space
    ctx.save();
    ctx.translate(Ax, Ay);
    ctx.rotate(cam.r * D2R);
    ctx.scale(k, k);
    ctx.translate(-cam.x, -cam.y);
    const px = n => n / k; // screen pixels → world units
    // each scene's line-work is drawn where the scene stands: in place, or on its way into the gathered frame
    const gather = gatherAt(u);
    const scene = (id, paint) => {
      const S = sceneAt(id, gather);
      if (S === SAME) return paint(px, S);
      ctx.save();
      ctx.transform(S.s, 0, 0, S.s, S.x, S.y);
      paint(n => n / (k * S.s), S);
      ctx.restore();
    };
    scene("space", p => drawTaskSpace(u, p));
    scene("spectrum", p => drawSpectrum(u, p));
    scene("lineage", p => drawLineage(u, p));
    scene("ring", p => { drawRing(u, p, time); drawEval(u, p); });
    scene("field", (p, S) => { drawMap(u, p, cam, k, Ax, S); drawTrends(u, p); });
    scene("trust", p => drawFinale(u, p));
    drawTrail(u, px, gather);
    ctx.restore();

    // the agent: drawn in screen space so its glow keeps a constant size
    const sp = lightAt(u, gather);
    const cutFade = 1 - prog(u, CUT_A, CUT_A + 0.15) * (1 - prog(u, CUT_B - 0.2, CUT_B));
    const scr = toScreen(sp.x, sp.y, cam, k, Ax, Ay);
    const breathe = reduceMotion ? 1 : 0.86 + 0.14 * Math.sin(time * (u < 3 ? 1.4 : 2.6));
    const openFade = prog(u, -0.35, 0.2); // the agent's light enters with the first scene
    spark(scr.x, scr.y, sp.g * breathe * cutFade * openFade, SPARK);

    // prism: six coloured sparks once the light enters the ring
    const prism = prog(u, 14.15, 14.9);
    if (prism > 0) {
      const R = sceneAt("ring", gather);
      CAPS.forEach((c, i) => {
        const p = nodePos(i);
        const q = { x: lerp(RING.x, p.x, ease(prism)), y: lerp(RING.y, p.y, ease(prism)) };
        const s = toScreen(q.x * R.s + R.x, q.y * R.s + R.y, cam, k, Ax, Ay);
        const on = u >= CAP_START(i) && u < CAP_START(i) + 1.1;
        spark(s.x, s.y, (on ? 0.95 : 0.45) * breathe, c.color);
      });
    }

    // the credits page has nothing behind it: the light and the line-work leave as it comes up
    const curtain = prog(u, CURTAIN[0], CURTAIN[1]);
    if (curtain > 0) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0,0,0,${curtain})`;
      ctx.fillRect(0, 0, vw, vh);
      ctx.globalCompositeOperation = "source-over";
    }

    // dust: screen-space with parallax tied to the camera. Drawn last, so it stays through the credits
    const drift = reduceMotion ? 0 : time * 0.004;
    for (const d of DUST) {
      const dx = (((d.x * vw - cam.x * k * 0.05 * d.z + drift * vw * d.z) % vw) + vw) % vw;
      const dy = (((d.y * vh - cam.y * k * 0.05 * d.z) % vh) + vh) % vh;
      const tw = reduceMotion ? 1 : 0.6 + 0.4 * Math.sin(time * 0.8 + d.p);
      ctx.fillStyle = `rgba(236,230,218,${(0.05 + d.z * 0.16) * tw})`;
      ctx.fillRect(dx, dy, d.z * 1.8, d.z * 1.8);
    }
  }

  function toScreen(x, y, cam, k, Ax, Ay) {
    const dx = (x - cam.x) * k, dy = (y - cam.y) * k;
    const c = Math.cos(cam.r * D2R), s = Math.sin(cam.r * D2R);
    return { x: Ax + dx * c - dy * s, y: Ay + dx * s + dy * c };
  }

  function spark(x, y, g, hue) {
    if (g <= 0.01 || x < -200 || y < -200 || x > vw + 200 || y > vh + 200) return;
    const R = 14 + 46 * g;
    const grd = ctx.createRadialGradient(x, y, 0, x, y, R);
    grd.addColorStop(0, rgba(hue, Math.min(1, 0.9 * g + 0.1)));
    grd.addColorStop(0.18, rgba(hue, 0.45 * g));
    grd.addColorStop(1, rgba(hue, 0));
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(x, y, R, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(255,246,228,${Math.min(1, 0.4 + g)})`;
    ctx.beginPath();
    ctx.arc(x, y, 2.2 + g * 1.4, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawTrail(u, px, gather) {
    const end = Math.min(u, CUT_A);
    if (end <= 0.2) return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const step = 0.025;
    ctx.beginPath();
    let prev = lightAt(0, gather);
    ctx.moveTo(prev.x, prev.y);
    for (let t0 = 0; t0 < end; t0 += step) {
      const t1 = Math.min(t0 + step, end);
      const p = lightAt(t1, gather);
      // where the light covers a lot of ground in one step, fill the step in so its curves stay round
      const n = Math.min(12, Math.ceil(Math.hypot(p.x - prev.x, p.y - prev.y) / 70));
      for (let i = 1; i < n; i++) {
        const q = lightAt(lerp(t0, t1, i / n), gather);
        ctx.lineTo(q.x, q.y);
      }
      ctx.lineTo(p.x, p.y);
      prev = p;
    }
    ctx.strokeStyle = rgba(SPARK, 0.12);
    ctx.lineWidth = px(7);
    ctx.stroke();
    ctx.strokeStyle = rgba(SPARK, 0.55);
    ctx.lineWidth = px(1.3);
    ctx.stroke();
  }

  function roundRect(r, radius) {
    ctx.beginPath();
    ctx.moveTo(r.x0 + radius, r.y0);
    ctx.arcTo(r.x1, r.y0, r.x1, r.y1, radius);
    ctx.arcTo(r.x1, r.y1, r.x0, r.y1, radius);
    ctx.arcTo(r.x0, r.y1, r.x0, r.y0, radius);
    ctx.arcTo(r.x0, r.y0, r.x1, r.y0, radius);
    ctx.closePath();
  }

  function drawTaskSpace(u, px) {
    const late = 1 - prog(u, 31.3, 31.9);
    const frame = prog(u, 3.5, 3.9) * late;
    if (frame <= 0) return;
    // the whole task execution space
    ctx.setLineDash([px(7), px(8)]);
    ctx.strokeStyle = `rgba(180,175,163,${0.55 * frame})`;
    ctx.lineWidth = px(1.2);
    roundRect(SPACE.frame, 64);
    ctx.stroke();

    // the residual decision space: dashed and dotted, because nobody wrote it down
    const open = prog(u, 3.76, 4.14) * late;
    if (open > 0) {
      ctx.strokeStyle = rgba(SPARK, 0.75 * open);
      ctx.lineWidth = px(1.6);
      roundRect(SPACE.residual, 28);
      ctx.stroke();
      ctx.setLineDash([]);
      const s = 6;
      for (const d of SPACE_DOTS) {
        const zp = ease(prog(u, ZONE_T(d.zone), ZONE_T(d.zone) + 0.6));
        const lit = clamp((zp * 820 - d.d) / 140);
        ctx.fillStyle = lit > 0 ? rgba(SPARK, open * (0.2 + 0.55 * lit)) : rgba(COLD, open * 0.28);
        ctx.fillRect(d.x - s / 2, d.y - s / 2, s, s);
      }
      // each open decision hangs off the dividing line
      SPACE.nodes.forEach((y, i) => {
        const on = u >= ZONE_T(i) - 0.02;
        ctx.strokeStyle = on ? rgba(SPARK, 0.9 * open) : rgba(COLD, 0.45 * open);
        ctx.lineWidth = px(1.4);
        ctx.beginPath();
        ctx.moveTo(SPACE.divider + 40, y);
        ctx.lineTo(SPACE.cardLeft, y);
        ctx.stroke();
      });
    }
    ctx.setLineDash([]);
  }

  function drawSpectrum(u, px) {
    const a = prog(u, 6.2, 6.7);
    if (a <= 0) return;
    const g = ctx.createLinearGradient(2450, 0, 5750, 0);
    g.addColorStop(0, rgba(COLD, 0.8 * a));
    g.addColorStop(1, rgba(SPARK, 0.95 * a));
    ctx.strokeStyle = g;
    ctx.lineWidth = px(2);
    ctx.beginPath();
    ctx.moveTo(2450, 0);
    ctx.lineTo(5740, 0);
    ctx.stroke();
    ctx.fillStyle = rgba(SPARK, a);
    ctx.beginPath();
    ctx.moveTo(5770, 0);
    ctx.lineTo(5730, -16);
    ctx.lineTo(5730, 16);
    ctx.fill();
    [2900, 4100, 5300].forEach((x, i) => {
      ctx.strokeStyle = rgba(i === 2 ? SPARK : COLD, a);
      ctx.lineWidth = px(1.5);
      ctx.beginPath();
      ctx.arc(x, 0, 12, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([px(3), px(5)]);
      ctx.beginPath();
      ctx.moveTo(x, -70);
      ctx.lineTo(x, -14);
      ctx.moveTo(x, 14);
      ctx.lineTo(x, 150);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }

  const ERA_Y = [-1100, -460, 180, 820, 1460, 2100, 2740];
  function drawLineage(u, px) {
    const p = prog(u, 9.35, 13.2);
    if (p <= 0) return;
    const y0 = -1400, y1 = 3380;
    const yE = lerp(y0, y1, ease(prog(u, 9.35, 9.75)) * 0.06 + ease(p) * 0.94);
    ctx.strokeStyle = "rgba(236,230,218,0.38)";
    ctx.lineWidth = px(1.5);
    ctx.beginPath();
    ctx.moveTo(6800, y0);
    ctx.lineTo(6800, yE);
    ctx.stroke();
    const sy = pathAt(u).y;
    ERA_Y.forEach((y, i) => {
      if (y > yE) return;
      const passed = sy >= y - 10 || u > 13.2;
      ctx.strokeStyle = passed ? rgba(SPARK, 0.9) : "rgba(236,230,218,0.5)";
      ctx.lineWidth = px(1.5);
      ctx.beginPath();
      const dir = i % 2 === 0 ? -1 : 1;
      ctx.moveTo(6800 + dir * 18, y);
      ctx.lineTo(6800 + dir * 70, y);
      ctx.stroke();
      ctx.fillStyle = passed ? SPARK : "#0b0c0f";
      ctx.beginPath();
      ctx.arc(6800, y, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  }

  function drawRing(u, px, time) {
    const a = prog(u, 13.6, 14.2);
    if (a <= 0) return;
    ctx.strokeStyle = `rgba(236,230,218,${0.14 * a})`;
    ctx.lineWidth = px(1);
    ctx.beginPath();
    ctx.arc(RING.x, RING.y, RING.r, 0, Math.PI * 2);
    ctx.stroke();

    const prism = prog(u, 14.15, 14.9);
    CAPS.forEach((c, i) => {
      const p = nodePos(i);
      if (prism > 0) {
        ctx.strokeStyle = rgba(c.color, 0.5 * (1 - 0.6 * prog(u, 14.9, 15.4)));
        ctx.lineWidth = px(1.4);
        ctx.beginPath();
        ctx.moveTo(RING.x, RING.y);
        ctx.lineTo(lerp(RING.x, p.x, ease(prism)), lerp(RING.y, p.y, ease(prism)));
        ctx.stroke();
      }
      // arc from capacity i to i+1, drawn as the camera orbits past it
      const isLoop = i === CAPS.length - 1;
      const ap = isLoop ? prog(u, 21.5, 22.2) : prog(u, CAP_START(i) + 0.55, CAP_START(i) + 1.25);
      if (ap > 0) {
        const a0 = nodeAngle(i) * D2R + 0.17, a1 = nodeAngle(i + 1) * D2R - 0.17;
        const grd = ctx.createLinearGradient(p.x, p.y, nodePos((i + 1) % 6).x, nodePos((i + 1) % 6).y);
        grd.addColorStop(0, rgba(c.color, 0.95));
        grd.addColorStop(1, rgba(CAPS[(i + 1) % 6].color, 0.95));
        ctx.strokeStyle = grd;
        ctx.lineWidth = px(isLoop ? 2.4 : 2);
        ctx.beginPath();
        ctx.arc(RING.x, RING.y, RING.r, a0, lerp(a0, a1, ease(ap)));
        ctx.stroke();
      }
    });
    // slow orbiting ticks give the ring a pulse
    if (!reduceMotion) {
      ctx.fillStyle = "rgba(236,230,218,0.35)";
      for (let j = 0; j < 36; j++) {
        const ang = (j * 10 + time * 3) * D2R;
        ctx.fillRect(RING.x + (RING.r + 60) * Math.cos(ang) - 2, RING.y + (RING.r + 60) * Math.sin(ang) - 2, 4, 4);
      }
    }
  }

  function drawEval(u, px) {
    EVAL_R.forEach((R, k) => {
      const p = prog(u, EVAL_START(k), EVAL_START(k) + 0.45);
      if (p <= 0) return;
      ctx.strokeStyle = `rgba(236,230,218,${0.28 - k * 0.04})`;
      ctx.lineWidth = px(1.3);
      ctx.beginPath();
      ctx.arc(RING.x, RING.y, R, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * ease(p));
      ctx.stroke();
      ctx.setLineDash([px(2), px(10)]);
      ctx.strokeStyle = "rgba(236,230,218,0.12)";
      ctx.beginPath();
      ctx.arc(RING.x, RING.y, R + 34, 0, Math.PI * 2 * ease(p));
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }

  function drawMap(u, px, cam, k, Ax, M) {
    const a = prog(u, 24.8, 25.3);
    if (a <= 0) return;
    ctx.lineWidth = px(1);
    const line = `rgba(236,230,218,${0.25 * a})`;
    ctx.strokeStyle = line;
    // like the bars (tuckMap), the frame's lines stop at the captions' edge in a close framing
    const edge = (cam.x + (mapLimits.edge - Ax) / k - M.x) / M.s;
    if (!mobile && edge > MAP.left) {
      const fade = ctx.createLinearGradient(edge - px(44), 0, edge, 0);
      fade.addColorStop(0, "rgba(236,230,218,0)");
      fade.addColorStop(1, line);
      ctx.strokeStyle = fade;
    }
    ctx.strokeRect(MAP.left, MAP.top, MAP.right - MAP.left, MAP.bottom - MAP.top);
    ctx.setLineDash([px(4), px(8)]);
    for (let i = 1; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(MAP.left + MAP.col * i, MAP.top);
      ctx.lineTo(MAP.left + MAP.col * i, MAP.bottom);
      ctx.stroke();
    }
    MAP.bands.slice(1).forEach(b => {
      ctx.beginPath();
      ctx.moveTo(MAP.left, b.top);
      ctx.lineTo(MAP.right, b.top);
      ctx.stroke();
    });
    ctx.setLineDash([]);
  }

  const TREND_X = [10200, 10800, 11400];
  const trendLit = (u, x) => u >= 29.0 || (u > 28.0 && pathAt(u).x >= x - 12);
  function drawTrends(u, px) {
    const a = prog(u, 27.8, 28.2);
    if (a <= 0) return;
    ctx.strokeStyle = `rgba(236,230,218,${0.45 * a})`;
    ctx.lineWidth = px(1.5);
    ctx.beginPath();
    ctx.moveTo(9800, TRENDS_Y);
    ctx.lineTo(11860, TRENDS_Y);
    ctx.stroke();
    ctx.fillStyle = `rgba(236,230,218,${0.6 * a})`;
    ctx.beginPath();
    ctx.moveTo(11900, TRENDS_Y);
    ctx.lineTo(11860, TRENDS_Y - 14);
    ctx.lineTo(11860, TRENDS_Y + 14);
    ctx.fill();
    TREND_X.forEach(x => {
      const lit = trendLit(u, x);
      ctx.fillStyle = lit ? SPARK : "#0b0c0f";
      ctx.strokeStyle = lit ? SPARK : `rgba(236,230,218,${0.7 * a})`;
      ctx.lineWidth = px(1.5);
      ctx.beginPath();
      ctx.arc(x, TRENDS_Y, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, TRENDS_Y - 14);
      ctx.lineTo(x, TRENDS_Y - 70);
      ctx.stroke();
    });
  }

  function drawFinale(u, px) {
    const a = prog(u, 29.3, 29.7);
    if (a <= 0) return;
    // the line between low and high, from the column heads down to the question of trust
    ctx.strokeStyle = `rgba(236,230,218,${0.24 * a})`;
    ctx.lineWidth = px(1.3);
    ctx.beginPath();
    ctx.moveTo(TRUST.rail, TRUST.head);
    ctx.lineTo(TRUST.rail, TRUST.node);
    ctx.stroke();
  }

  /* ------------------------------------------------------------------- grain */
  function makeGrain() {
    const c = document.createElement("canvas");
    c.width = c.height = 160;
    const g = c.getContext("2d");
    const img = g.createImageData(160, 160);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    $(".grain").style.backgroundImage = `url(${c.toDataURL()})`;
  }

  /* ----------------------------------------------------------------- copy bib */
  $("#copy-bib").addEventListener("click", async e => {
    const bib = $("#bib");
    bib.hidden = false;
    try {
      await navigator.clipboard.writeText(bib.textContent);
      e.currentTarget.textContent = "BibTeX copied";
    } catch {
      const r = document.createRange();
      r.selectNodeContents(bib);
      const sel = getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      e.currentTarget.textContent = "Selected: press Ctrl/⌘ + C";
    }
  });

  /* -------------------------------------------------------------------- boot */
  async function loadJSON(name) {
    const res = await fetch(DATA_BASE + name);
    if (!res.ok) throw new Error(`Could not load ${name}`);
    return res.json();
  }

  async function boot() {
    resize();
    makeGrain();
    buildChapters();
    collect();
    window.addEventListener("resize", () => { resize(); });
    requestAnimationFrame(t => { last = t; frame(t); });

    try {
      const [site, tax, ev, mat, apps, papers] = await Promise.all(
        ["site.json", "taxonomy.json", "evaluation.json", "maturity.json", "applications.json", "papers.json"].map(loadJSON)
      );
      buildRing(tax, papers);
      buildEvaluation(ev);
      buildMap(mat, apps);
      buildCredits(site);
      buildOpening(site, papers, apps);
    } catch (err) {
      console.error(err);
    }
    collect();
    nodes = nodesCache();
    bars = [...document.querySelectorAll("[data-grow]")].map(el => ({ el, t: Number(el.dataset.grow) }));

    const ch = CHAPTERS.find(c => `#${c.id}` === location.hash);
    if (ch && ch.go !== null && ch.go > -PRE) {
      window.scrollTo({ top: Math.round((ch.go + PRE) * unit), behavior: "auto" });
      cu = ch.go;
    } else {
      cu = clamp(window.scrollY / unit - PRE, -PRE, END);
    }
  }
  boot();
})();
