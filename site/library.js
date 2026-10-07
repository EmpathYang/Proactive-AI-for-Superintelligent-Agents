/* Proactive AI · Library
   A three.js map of every paper (capacity clusters on the 6A ring, domain anchors
   on an outer ring, publication year as depth) linked to a filterable table of
   papers and systems. Data: data/papers.json, data/applications.json, data/taxonomy.json. */
(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const DATA = document.querySelector('meta[name="story-data"]')?.content || "data/";
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const css = getComputedStyle(document.documentElement);
  const token = n => css.getPropertyValue(n).trim();

  const CAPS = [
    { id: "awareness", hue: "--aw" }, { id: "anticipation", hue: "--an" }, { id: "agenda", hue: "--ag" },
    { id: "arbitration", hue: "--ar" }, { id: "action", hue: "--ac" }, { id: "adaptation", hue: "--ad" }
  ].map(c => ({ ...c, color: token(c.hue) }));
  const CAP = Object.fromEntries(CAPS.map((c, i) => [c.id, { ...c, i }]));
  const APP_COLOR = token("--cold") || "#93a9bd";
  const SPARK = token("--spark") || "#ffb44c";
  const KIND_LABEL = { method: "Method", system: "System", benchmark: "Benchmark", study: "Study", position: "Position", survey: "Survey", foundational: "Foundational" };

  const state = {
    tab: "papers", q: "", domain: "", kind: "", since: "", origin: "", caps: new Set(),
    sort: { papers: ["year", -1], systems: ["domain", 1] }, open: null, limit: 0,
    cluster: null // { label, ids } picked on the map
  };
  const PAGE = 150; // rows rendered at a time; the library has well over a thousand papers
  const GENERAL = "General References";
  let papers = [], systems = [], taxonomy = null, newCutoff = "";
  const paperById = new Map(), systemById = new Map();

  /* Entries imported from the manuscript's bibliography keep some BibTeX residue:
     LaTeX escapes, entry types in place of a venue, "arXiv preprint arXiv:…" venues,
     and short names cut from the title. Clean these once, for display only. */
  const ENTRY_TYPES = new Set(["misc", "inproceedings", "article", "online", "manual", "incollection", "unpublished", "booklet"]);
  const VENUE_TYPES = { techreport: "Technical report", phdthesis: "PhD thesis", mastersthesis: "Master's thesis", book: "Book" };
  const tex = s => s == null ? s : String(s)
    .replace(/(^|[^\\])\$([^$]*)\$/g, (_, pre, m) => pre + m.replace(/\\pi/g, "π").replace(/\\alpha/g, "α").replace(/\\tau/g, "τ").replace(/\\[a-z]+/gi, "").replace(/[_^{}]/g, ""))
    .replace(/``/g, "“").replace(/''/g, "”").replace(/\\([&$%#_])/g, "$1").replace(/\\[a-z]+\s*/gi, "").replace(/[{}]/g, "").replace(/\s+/g, " ").trim();
  function tidy(p) {
    ["short", "title", "authors", "venue"].forEach(k => { if (p[k]) p[k] = tex(p[k]); });
    const arxiv = /arxiv[^:]*:\s*(\d{4}\.\d{4,5})/i.exec(p.venue || "");
    if (arxiv && !p.url) p.url = `https://arxiv.org/abs/${arxiv[1]}`;
    if (/^arxiv/i.test(p.venue || "")) p.venue = "arXiv";
    else if (ENTRY_TYPES.has((p.venue || "").toLowerCase())) p.venue = "";
    else if (VENUE_TYPES[(p.venue || "").toLowerCase()]) p.venue = VENUE_TYPES[p.venue.toLowerCase()];
    // short names cut at 60 characters from the title read better as the full title
    if (p.title && p.short && p.short.length >= 55 && p.title.startsWith(p.short)) p.short = p.title.split(/:\s/)[0];
    return p;
  }
  const showTitle = p => p.title && p.title !== p.short;

  /* ------------------------------------------------------------------ boot */
  async function load(name) {
    const r = await fetch(DATA + name);
    if (!r.ok) throw new Error(name);
    return r.json();
  }

  async function boot() {
    let pdoc, adoc, mdoc;
    try {
      [pdoc, adoc, taxonomy, mdoc] = await Promise.all([load("papers.json"), load("applications.json"), load("taxonomy.json"), load("maturity.json")]);
    } catch (e) {
      console.error(e);
      $("#result-count").textContent = "The library data could not be loaded.";
      return;
    }
    papers = pdoc.papers.map(tidy);
    systems = adoc.systems;
    papers.forEach(p => paperById.set(p.id, p));
    systems.forEach(s => systemById.set(s.id, s));
    // entries added after the initial import (the most common date), within 60 days, are marked new
    const byDate = {};
    papers.forEach(p => { byDate[p.added] = (byDate[p.added] || 0) + 1; });
    const initial = Object.keys(byDate).sort((a, b) => byDate[b] - byDate[a] || a.localeCompare(b))[0] || "";
    const cutoff = new Date(Date.now() - 60 * 864e5).toISOString().slice(0, 10);
    newCutoff = initial > cutoff ? initial : cutoff;
    $("#lib-updated").textContent = new Date(pdoc.updated + "T00:00:00").toLocaleDateString("en", { month: "long", year: "numeric" });

    stats(mdoc);
    const bar = $(".lib-bar");
    const setBar = () => document.documentElement.style.setProperty("--bar-h", `${bar.offsetHeight}px`);
    setBar();
    addEventListener("resize", setBar);
    controls();
    readURL();
    render();
    Galaxy.init();
  }

  function stats(mdoc) {
    const years = papers.map(p => p.year).filter(Boolean);
    const domains = new Set(systems.map(s => s.domain));
    const set = (k, v) => { const el = $(`[data-stat="${k}"]`); if (el) el.textContent = v; };
    set("papers", papers.length);
    set("systems", systems.length);
    set("domains", mdoc?.domains?.length || domains.size);
    set("span", `${Math.min(...years)}–${Math.max(...years)}`);
  }

  /* -------------------------------------------------------------- controls */
  function controls() {
    const domains = [...new Set([...papers.flatMap(p => p.domains || []), ...systems.map(s => s.domain)])].sort();
    $("#f-domain").insertAdjacentHTML("beforeend", domains.map(d => `<option>${esc(d)}</option>`).join(""));
    const kinds = [...new Set(papers.map(p => p.kind))].sort();
    $("#f-kind").insertAdjacentHTML("beforeend", kinds.map(k => `<option value="${k}">${KIND_LABEL[k] || k}</option>`).join(""));
    const years = [...new Set(papers.map(p => p.year).filter(Boolean))].sort((a, b) => b - a);
    $("#f-year").insertAdjacentHTML("beforeend", years.filter(y => y >= 2015).map(y => `<option value="${y}">${y} or later</option>`).join("") + `<option value="0">Before 2015</option>`);

    const capName = id => taxonomy.capacities.find(c => c.id === id)?.name || id;
    const count = id => id === "apps" ? papers.filter(p => !(p.capacities || []).length).length : papers.filter(p => (p.capacities || []).includes(id)).length;
    $("#f-caps").innerHTML = CAPS.map(c => `<button type="button" class="chip" aria-pressed="false" data-cap="${c.id}" style="--h:${c.color}">${capName(c.id)} <i>${count(c.id)}</i></button>`).join("")
      + `<button type="button" class="chip" aria-pressed="false" data-cap="apps" style="--h:${APP_COLOR}" title="Papers tagged by domain only: application papers and general references">Domain only <i>${count("apps")}</i></button>`;

    $("#f-caps").addEventListener("click", e => {
      const b = e.target.closest("[data-cap]");
      if (!b) return;
      const id = b.dataset.cap;
      state.caps.has(id) ? state.caps.delete(id) : state.caps.add(id);
      update();
    });
    let t;
    $("#f-q").addEventListener("input", e => { clearTimeout(t); t = setTimeout(() => { state.q = e.target.value.trim(); update(); }, 120); });
    $("#f-domain").addEventListener("change", e => { state.domain = e.target.value; update(); });
    $("#f-kind").addEventListener("change", e => { state.kind = e.target.value; update(); });
    $("#f-year").addEventListener("change", e => { state.since = e.target.value; update(); });
    $("#f-origin").addEventListener("change", e => { state.origin = e.target.value; update(); });
    ["#clear", "#clear-2"].forEach(s => $(s).addEventListener("click", clearFilters));
    $("#tab-papers").addEventListener("click", () => setTab("papers"));
    $("#tab-systems").addEventListener("click", () => setTab("systems"));
    $$(".grid th button").forEach(b => b.addEventListener("click", () => {
      const key = b.dataset.sort, cur = state.sort[state.tab];
      state.sort[state.tab] = [key, cur[0] === key ? -cur[1] : (key === "year" ? -1 : 1)];
      update();
    }));
    $("#rows-papers").addEventListener("click", onRowClick);
    $("#f-cluster").addEventListener("click", () => { state.cluster = null; update(); });
    $("#more-papers").addEventListener("click", () => { state.limit = Math.max(state.limit, PAGE) + PAGE; render(); });
    $("#rows-systems").addEventListener("click", onRowClick);
    $("#rows-papers").addEventListener("mouseover", e => { const r = e.target.closest("tr.row"); Galaxy.highlight(r?.dataset.id || null); });
    $("#rows-papers").addEventListener("mouseleave", () => Galaxy.highlight(null));
    $("#copy-shown").addEventListener("click", () => copy(filteredPapers().filter(p => p.title).map(bibtex).join("\n\n"), "BibTeX copied"));
    $("#csv").addEventListener("click", downloadCSV);
    document.addEventListener("library:focus", e => {
      clearFilters(false);
      state.caps.add(e.detail.capacity);
      setTab("papers", false);
      update();
      $("#galaxy").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  function clearFilters(redraw = true) {
    Object.assign(state, { q: "", domain: "", kind: "", since: "", origin: "", cluster: null });
    state.caps.clear();
    ["#f-q", "#f-domain", "#f-kind", "#f-year", "#f-origin"].forEach(s => { $(s).value = ""; });
    if (redraw !== false) update();
  }

  function setTab(tab, redraw = true) {
    state.tab = tab;
    $("#tab-papers").setAttribute("aria-selected", tab === "papers");
    $("#tab-systems").setAttribute("aria-selected", tab === "systems");
    $("#panel-papers").hidden = tab !== "papers";
    $("#panel-systems").hidden = tab !== "systems";
    $$(".papers-only").forEach(el => { el.hidden = tab !== "papers"; });
    $$(".systems-only").forEach(el => { el.hidden = tab !== "systems"; });
    if (redraw) update();
  }

  /* --------------------------------------------------------------- filters */
  const hay = p => [p.short, p.title, p.citation_key, ...(p.citation_aliases || []), p.authors, p.venue, p.dimension, p.note, p.kind, ...(p.domains || []), ...(p.capacities || []), p.year].join(" ").toLowerCase();
  const shay = s => Object.values(s).flat().join(" ").toLowerCase();

  function matchPaper(p) {
    if (state.q && !state.q.toLowerCase().split(/\s+/).every(w => hay(p).includes(w))) return false;
    if (state.domain && !(p.domains || []).includes(state.domain)) return false;
    if (state.kind && p.kind !== state.kind) return false;
    if (state.since !== "") {
      const y = Number(state.since);
      if (y === 0 ? !(p.year && p.year < 2015) : !(p.year >= y)) return false;
    }
    if (state.cluster && !state.cluster.ids.has(p.id)) return false;
    if (state.caps.size) {
      const caps = p.capacities || [];
      const ok = [...state.caps].some(c => c === "apps" ? !caps.length : caps.includes(c));
      if (!ok) return false;
    }
    return true;
  }
  function matchSystem(s) {
    if (state.q && !state.q.toLowerCase().split(/\s+/).every(w => shay(s).includes(w))) return false;
    if (state.domain && s.domain !== state.domain) return false;
    if (state.origin && s.research_type !== state.origin) return false;
    return true;
  }
  const filteredPapers = () => papers.filter(matchPaper);

  function sorter(tab) {
    const [key, dir] = state.sort[tab];
    const val = x => {
      if (key === "cap") return (x.capacities?.length ? CAP[x.capacities[0]].i : 9) * 100 + (x.domains?.[0] || "").charCodeAt(0);
      if (key === "year") return x.year || 0;
      return name(x[key]);
    };
    const name = v => String(v ?? "").replace(/^[^\p{L}\p{N}]+/u, "").toLowerCase(); // ignore leading quotes
    return (a, b) => {
      const va = val(a), vb = val(b);
      const c = va < vb ? -1 : va > vb ? 1 : 0;
      return c * dir || name(a.short || a.system).localeCompare(name(b.short || b.system));
    };
  }

  /* ---------------------------------------------------------------- render */
  function update() {
    state.limit = PAGE;
    render();
    writeURL();
  }

  function render() {
    $$("#f-caps .chip").forEach(b => b.setAttribute("aria-pressed", state.caps.has(b.dataset.cap)));
    const fc = $("#f-cluster");
    fc.hidden = !state.cluster || state.tab !== "papers";
    if (state.cluster) fc.innerHTML = `Map cluster: ${esc(state.cluster.label)} <i>${state.cluster.ids.size}</i> <span aria-hidden="true">×</span>`;
    $$(".grid th button").forEach(b => {
      const [key, dir] = state.sort[b.closest("#panel-papers") ? "papers" : "systems"];
      if (b.dataset.sort === key) b.setAttribute("aria-sort", dir > 0 ? "ascending" : "descending");
      else b.removeAttribute("aria-sort");
    });
    const fp = filteredPapers().sort(sorter("papers"));
    const fs = systems.filter(matchSystem).sort(sorter("systems"));
    $("#count-papers").textContent = papers.length;
    $("#count-systems").textContent = systems.length;
    const shown = state.tab === "papers" ? fp.length : fs.length;
    const total = state.tab === "papers" ? papers.length : systems.length;
    const noun = state.tab === "papers" ? "papers" : "representative works";
    $("#result-count").textContent = shown === total ? `${total} ${noun}` : `${shown} of ${total} ${noun} match`;
    $("#empty").hidden = shown > 0;
    const limit = Math.max(state.limit || PAGE, state.open?.startsWith("p:") ? fp.findIndex(p => `p:${p.id}` === state.open) + 1 : 0);
    $("#rows-papers").innerHTML = fp.slice(0, limit).map(paperRow).join("");
    const more = $("#more-papers"), rest = fp.length - limit;
    more.hidden = state.tab !== "papers" || rest <= 0;
    more.textContent = `Show ${Math.min(rest, PAGE)} more · ${rest} not shown`;
    $("#rows-systems").innerHTML = fs.map(systemRow).join("");
    Galaxy.filter(new Set(fp.map(p => p.id)));
  }

  function capTags(p) {
    const tags = (p.capacities || []).map(c => `<span class="tag" style="--h:${CAP[c].color}">${esc(cap(c).name)}</span>`)
      .concat((p.domains || []).map(d => `<span class="tag" style="--h:${APP_COLOR}">${esc(d)}</span>`));
    return tags.join("") + (p.dimension ? `<span class="cell-dim">${esc(p.dimension)}</span>` : "");
  }
  const cap = id => taxonomy.capacities.find(c => c.id === id) || { name: id };

  function paperRow(p) {
    const isNew = p.added > newCutoff;
    const open = state.open === `p:${p.id}`;
    const title = !p.title ? `<div class="p-title cell-muted">Metadata being confirmed</div>` : showTitle(p) ? `<div class="p-title">${esc(p.title)}</div>` : "";
    const row = `<tr class="row${open ? " lit" : ""}" data-id="${p.id}" data-type="p" aria-expanded="${open}">
      <td class="cell-paper"><div class="p-short">${esc(p.short)}${isNew ? '<span class="badge badge-new">New</span>' : ""}${p.status !== "verified" ? '<span class="badge badge-pending">Pending</span>' : ""}</div>${title}${p.authors ? `<div class="p-authors">${esc(p.authors)}</div>` : ""}</td>
      <td>${capTags(p)}</td>
      <td class="cell-muted cell-hide-sm">${esc(KIND_LABEL[p.kind] || p.kind)}</td>
      <td class="cell-muted">${esc(p.venue || "—")}</td>
      <td class="cell-year">${p.year || "—"}</td>
      <td class="cell-actions">${p.url ? `<a class="icon-btn" href="${esc(p.url)}" target="_blank" rel="noopener" title="Open paper" aria-label="Open ${esc(p.short)}">↗</a>` : ""}${p.title ? `<button type="button" class="icon-btn" data-bib="${p.id}" title="Copy BibTeX" aria-label="Copy BibTeX for ${esc(p.short)}">bib</button>` : ""}</td>
    </tr>`;
    if (!open) return row;
    const sys = (p.systems || []).map(id => systemById.get(id)).filter(Boolean);
    return row + `<tr class="detail"><td colspan="6"><div class="detail-inner">
      <div><h4>Where it sits</h4><p>${where(p)} ${esc(KIND_LABEL[p.kind] || "")}${p.note ? ` · ${esc(p.note)}` : ""}</p>
        ${sys.length ? `<h4 style="margin-top:14px">Analyzed as a representative work</h4><p>${sys.map(s => `<button type="button" class="inline-link" data-goto-system="${s.id}">${esc(s.system)}</button> (${esc(s.domain)})`).join(", ")}</p>` : ""}
        ${p.status !== "verified" ? `<h4 style="margin-top:14px">Status</h4><p>The survey names this work, but its bibliographic details are still being confirmed.</p>` : ""}</div>
      <div><h4>BibTeX</h4>${p.title ? `<pre>${esc(bibtex(p))}</pre>` : `<p class="cell-muted">Available once metadata is confirmed.</p>`}</div>
    </div></td></tr>`;
  }

  function where(p) {
    const caps = p.capacities || [], doms = (p.domains || []).filter(d => d !== GENERAL);
    const join = a => a.length > 1 ? `${a.slice(0, -1).join(", ")} and ${a[a.length - 1]}` : a[0];
    if (caps.length) return `Informs <b>${join(caps.map(c => esc(cap(c).name)))}</b>${p.dimension ? `, under ${esc(p.dimension)}` : ""}${doms.length ? `, with applications in ${esc(join(doms))}` : ""}.`;
    if (doms.length) return `Cited for applications in <b>${esc(join(doms))}</b>.`;
    return "A general reference for the survey.";
  }

  function systemRow(s) {
    const open = state.open === `s:${s.id}`;
    const linked = (s.citation_keys || []).map(id => paperById.get(id)).filter(Boolean);
    const row = `<tr class="row${open ? " lit" : ""}" data-id="${s.id}" data-type="s" aria-expanded="${open}">
      <td class="cell-paper"><div class="p-short">${esc(s.system)}</div><div class="p-authors">${esc(s.anticipation)}</div></td>
      <td><span class="tag" style="--h:${APP_COLOR}">${esc(s.domain)}</span></td>
      <td>${esc(s.action)}</td>
      <td class="cell-muted">${esc(s.deployment)}</td>
      <td class="cell-muted">${esc(s.research_type)}</td>
      <td class="cell-actions">${linked.map(p => `<button type="button" class="icon-btn" data-goto-paper="${p.id}" title="Open paper in the library">paper</button>`).join("")}</td>
    </tr>`;
    if (!open) return row;
    return row + `<tr class="detail"><td colspan="6"><div class="detail-inner"><div class="pipeline">${CAPS.map(c => `<div style="--h:${c.color}"><b>${esc(cap(c.id).name)}</b>${s[c.id] ? esc(s[c.id]) : '<span class="none">Not identified in the source table</span>'}</div>`).join("")}</div></div></td></tr>`;
  }

  function onRowClick(e) {
    const bib = e.target.closest("[data-bib]");
    if (bib) { copy(bibtex(paperById.get(bib.dataset.bib)), "BibTeX copied"); return; }
    const gs = e.target.closest("[data-goto-system]");
    if (gs) { openEntry("s", gs.dataset.gotoSystem); return; }
    const gp = e.target.closest("[data-goto-paper]");
    if (gp) { openEntry("p", gp.dataset.gotoPaper); return; }
    if (e.target.closest("a, button, pre")) return;
    const row = e.target.closest("tr.row");
    if (!row) return;
    const key = `${row.dataset.type}:${row.dataset.id}`;
    state.open = state.open === key ? null : key;
    render();
    if (row.dataset.type === "p") Galaxy.select(state.open ? row.dataset.id : null);
  }

  function openEntry(type, id, scroll = true) {
    const item = type === "p" ? paperById.get(id) : systemById.get(id);
    if (!item) return;
    if (type === "p" ? !matchPaper(item) : !matchSystem(item)) clearFilters(false);
    setTab(type === "p" ? "papers" : "systems", false);
    state.open = `${type}:${id}`;
    update();
    if (type === "p") Galaxy.select(id);
    const row = $(`#rows-${type === "p" ? "papers" : "systems"} tr.row[data-id="${CSS.escape(id)}"]`);
    if (row && scroll) {
      row.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      row.classList.add("flash");
    }
  }

  // a click on a map cluster narrows the table to that cluster's papers
  function showCluster(label, ids) {
    clearFilters(false);
    state.cluster = { label, ids };
    setTab("papers", false);
    update();
  }

  /* --------------------------------------------------------------- exports */
  function bibtex(p) {
    if (!p?.title) return "";
    const arxiv = /arxiv\.org\/abs\/([\w.]+)/.exec(p.url || "");
    const authors = p.authors
      ? p.authors.replace(/\s+et al\.?$/, ", others").split(/\s*,\s*/).map(a => a === "others" ? "others" : a).join(" and ")
      : null;
    const isArxiv = !p.venue || /^arxiv/i.test(p.venue);
    const b = v => String(v).replace(/[&%$#_]/g, "\\$&");
    const lines = [`@${isArxiv ? "misc" : "inproceedings"}{${p.citation_key || p.id},`, `  title = {${b(p.title)}},`];
    if (authors) lines.push(`  author = {${b(authors)}},`);
    if (!isArxiv) lines.push(`  booktitle = {${b(p.venue)}},`);
    if (p.year) lines.push(`  year = {${p.year}},`);
    if (arxiv) lines.push(`  eprint = {${arxiv[1]}},`, `  archivePrefix = {arXiv},`);
    if (p.url) lines.push(`  url = {${p.url}},`);
    lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, "");
    return lines.join("\n") + "\n}";
  }

  async function copy(text, msg) {
    try {
      await navigator.clipboard.writeText(text);
      toast(msg);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch { ok = false; }
      ta.remove();
      toast(ok ? msg : "Copy is blocked here. Open a row to select the BibTeX.");
    }
  }

  function downloadCSV() {
    const isP = state.tab === "papers";
    const rows = isP ? filteredPapers().sort(sorter("papers")) : systems.filter(matchSystem).sort(sorter("systems"));
    const cols = isP ? ["id", "citation_key", "short", "title", "authors", "year", "venue", "url", "kind", "capacities", "dimension", "domains", "status", "added"]
      : ["id", "system", "domain", "research_type", "deployment", ...CAPS.map(c => c.id), "citation_keys"];
    const cell = v => `"${String(Array.isArray(v) ? v.join("; ") : v ?? "").replace(/"/g, '""')}"`;
    const csv = [cols.join(","), ...rows.map(r => cols.map(c => cell(r[c])).join(","))].join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = `proactive-ai-${isP ? "papers" : "representative-works"}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  let toastTimer;
  function toast(msg) {
    let el = $(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2200);
  }

  /* ------------------------------------------------------- shareable state */
  function writeURL() {
    try {
      const u = new URL(location.href);
      ["q", "cap", "domain", "kind", "since", "tab"].forEach(k => u.searchParams.delete(k));
      if (state.q) u.searchParams.set("q", state.q);
      if (state.caps.size) u.searchParams.set("cap", [...state.caps].join(","));
      if (state.domain) u.searchParams.set("domain", state.domain);
      if (state.kind) u.searchParams.set("kind", state.kind);
      if (state.since) u.searchParams.set("since", state.since);
      if (state.tab !== "papers") u.searchParams.set("tab", state.tab);
      history.replaceState(null, "", u.pathname + u.search + u.hash);
    } catch { /* sandboxed frames may refuse history access */ }
  }
  function readURL() {
    const p = new URLSearchParams(location.search);
    state.q = p.get("q") || "";
    (p.get("cap") || "").split(",").filter(Boolean).forEach(c => state.caps.add(c));
    state.domain = p.get("domain") || "";
    state.kind = p.get("kind") || "";
    state.since = p.get("since") || "";
    $("#f-q").value = state.q;
    $("#f-domain").value = state.domain;
    $("#f-kind").value = state.kind;
    $("#f-year").value = state.since;
    setTab(p.get("tab") === "systems" ? "systems" : "papers", false);
  }

  /* ================================================================ galaxy */
  const Galaxy = (() => {
    let THREE, renderer, scene, camera, pts, ptsGeo, lines, lineGeo, selPts, spark, canvas, wrap, labelsEl;
    let clusters = [], cpts, clines, lod = 1;
    let nodes = [], labels = [], visible = false, running = false, w = 0, h = 0, t0 = performance.now();
    const view = { yaw: 0.42, pitch: 0.2, dist: 132, target: { x: 0, y: -2, z: -16 } };
    const home = { ...view, target: { ...view.target } };
    let drag = null, idleAt = 0, hoverId = null, selectedId = null, highlightId = null, active = new Set(), fly = null;
    // Level of detail: from afar, papers merge into one cluster per capacity or domain and era.
    // Zooming in, or filtering down to a few hundred papers, dissolves them into single papers.
    const POINTS_BELOW = 100, FEW = 300, MIN_CLUSTER = 3;
    const ERAS = [[0, 2014], [2015, 2022], [2023, 2024], [2025, 2025], [2026, 9999]];

    const R_CAP = 30, R_APP = 58;
    const yearZ = y => -Math.sqrt(Math.max(0, 2027 - (y || 2026))) * 7;
    const hash = (s, k = 1) => { let x = 2166136261 ^ k; for (const ch of s) { x ^= ch.charCodeAt(0); x = Math.imul(x, 16777619); } return ((x >>> 0) % 10000) / 10000; };
    const col = hex => new THREE.Color(hex);

    function layout() {
      const caps = taxonomy.capacities;
      const domains = [...new Set(papers.filter(p => !(p.capacities || []).length).flatMap(p => p.domains))].sort();
      const capPos = {}, domPos = {};
      CAPS.forEach((c, i) => {
        const a = (90 - 60 * i) * Math.PI / 180;
        capPos[c.id] = { x: R_CAP * Math.cos(a), y: R_CAP * Math.sin(a), a };
      });
      const perDomain = {};
      papers.forEach(p => { if (!(p.capacities || []).length) perDomain[p.domains[0]] = (perDomain[p.domains[0]] || 0) + 1; });
      domains.forEach((d, i) => {
        const a = (90 - 15 - (360 / domains.length) * i) * Math.PI / 180;
        // larger domains get a wider cloud, capped so neighbours stay apart
        domPos[d] = { x: R_APP * Math.cos(a), y: R_APP * Math.sin(a) * 0.78, a, spread: Math.min(10, 3 + Math.sqrt(perDomain[d] || 1) * 0.55) };
      });
      // dots shrink as the library grows so dense clusters stay readable
      const dot = Math.max(0.65, Math.min(1, Math.sqrt(150 / papers.length) * 1.6));
      nodes = papers.map(p => {
        let x, y, color, anchor;
        const capId = (p.capacities || [])[0];
        if (capId) {
          const c = capPos[capId];
          const dims = caps.find(k => k.id === capId).subdimensions.map(s => s.name);
          const di = dims.indexOf(p.dimension);
          // a paper without a research dimension spreads across the whole cluster
          const da = c.a + (di >= 0 ? (di - (dims.length - 1) / 2) * 0.52 : (hash(p.id, 6) - 0.5) * dims.length * 0.52);
          const rr = 7 + Math.sqrt(hash(p.id)) * 7;
          x = c.x + Math.cos(da) * rr + (hash(p.id, 2) - 0.5) * 3;
          y = c.y + Math.sin(da) * rr + (hash(p.id, 3) - 0.5) * 3;
          color = CAP[capId].color;
          anchor = { x: c.x, y: c.y, z: 0 };
        } else {
          const d = domPos[p.domains[0]];
          const ja = hash(p.id) * Math.PI * 2, jr = 1.5 + Math.sqrt(hash(p.id, 4)) * d.spread;
          x = d.x + Math.cos(ja) * jr;
          y = d.y + Math.sin(ja) * jr;
          color = APP_COLOR;
          anchor = { x: d.x, y: d.y, z: 0 };
        }
        const z = yearZ(p.year) + (hash(p.id, 5) - 0.5) * 2;
        return { id: p.id, p, x, y, z, color, anchor, size: (p.status === "verified" ? 2.6 : 1.9) * dot };
      });
      const groups = new Map();
      nodes.forEach(n => {
        const capId = (n.p.capacities || [])[0];
        const era = ERAS.findIndex(([a, b]) => (n.p.year || 2026) >= a && (n.p.year || 2026) <= b);
        const key = `${capId || n.p.domains[0]}|${era}`;
        if (!groups.has(key)) groups.set(key, { key, group: capId ? cap(capId).name : n.p.domains[0], color: n.color, anchor: n.anchor, nodes: [] });
        groups.get(key).nodes.push(n);
      });
      clusters = [...groups.values()].map(c => {
        const k = c.nodes.length, ys = c.nodes.map(n => n.p.year).filter(Boolean);
        const lo = Math.min(...ys), hi = Math.max(...ys);
        c.x = c.nodes.reduce((a, n) => a + n.x, 0) / k;
        c.y = c.nodes.reduce((a, n) => a + n.y, 0) / k;
        c.z = c.nodes.reduce((a, n) => a + n.z, 0) / k;
        c.years = !ys.length ? "" : lo === hi ? `${lo}` : `${lo}–${hi}`;
        c.label = `${c.group}${c.years ? ` · ${c.years}` : ""}`;
        c.ids = new Set(c.nodes.map(n => n.id));
        c.small = k < MIN_CLUSTER; // too small to merge; its papers always show as points
        c.nodes.forEach(n => { n.cluster = c; });
        c.shown = k;
        return c;
      }).filter(c => !c.small).sort((a, b) => b.nodes.length - a.nodes.length);
      return { capPos, domPos };
    }

    function init() {
      THREE = window.THREE;
      canvas = $("#galaxy-canvas");
      wrap = $("#galaxy");
      labelsEl = $("#galaxy-labels");
      if (!THREE) return fail();
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
      } catch (e) { return fail(); }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x0b0c0f, 1);
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);

      const { capPos, domPos } = layout();
      buildStars();
      buildPoints();
      buildLines(capPos, domPos);
      buildRing(capPos);
      buildAxis();
      buildClusters();
      buildLabels(capPos, domPos);
      buildSpark();
      selPts = makeSprites([{ x: 0, y: 0, z: 0 }], [SPARK], [0], [9]);
      scene.add(selPts);

      resize();
      new ResizeObserver(resize).observe(wrap);
      new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) start(); }, { rootMargin: "100px" }).observe(wrap);
      bindPointer();
      $("#g-zoom-in").addEventListener("click", () => { fly = null; view.dist = Math.max(40, view.dist * 0.8); idleAt = now(); });
      $("#g-zoom-out").addEventListener("click", () => { fly = null; view.dist = Math.min(260, view.dist * 1.25); idleAt = now(); });
      $("#g-reset").addEventListener("click", () => { fly = null; Object.assign(view, { ...home, target: { ...home.target } }); idleAt = 0; select(null); });
      filter(active.size ? active : new Set(papers.map(p => p.id)));
    }

    function fail() {
      $("#galaxy-fallback").hidden = false;
      $(".galaxy-tools").hidden = true;
      $(".galaxy-hint").hidden = true;
    }

    const VERT = `
      attribute float size; attribute vec3 tint; attribute float alpha;
      uniform float uScale;
      varying vec3 vTint; varying float vAlpha;
      void main() {
        vTint = tint;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float depth = -mv.z;
        vAlpha = alpha * clamp(1.15 - (depth - 90.0) / 160.0, 0.35, 1.0);
        gl_PointSize = size * uScale / depth;
        gl_Position = projectionMatrix * mv;
      }`;
    const FRAG = `
      varying vec3 vTint; varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float core = smoothstep(0.5, 0.0, d);
        float hot = pow(core, 6.0);
        gl_FragColor = vec4(vTint * (0.55 + core * 0.9) + vec3(hot * 0.9), vAlpha * pow(core, 1.6));
      }`;

    function makeSprites(list, colors, alphas, sizes) {
      const g = new THREE.BufferGeometry();
      const n = list.length;
      const pos = new Float32Array(n * 3), tint = new Float32Array(n * 3);
      list.forEach((q, i) => {
        pos.set([q.x, q.y, q.z], i * 3);
        const c = col(colors[i]);
        tint.set([c.r, c.g, c.b], i * 3);
      });
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      g.setAttribute("tint", new THREE.BufferAttribute(tint, 3));
      g.setAttribute("alpha", new THREE.BufferAttribute(new Float32Array(alphas), 1));
      g.setAttribute("size", new THREE.BufferAttribute(new Float32Array(sizes), 1));
      const m = new THREE.ShaderMaterial({
        vertexShader: VERT, fragmentShader: FRAG, uniforms: { uScale: { value: 600 } },
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      return new THREE.Points(g, m);
    }

    function buildPoints() {
      pts = makeSprites(nodes, nodes.map(n => n.color), nodes.map(() => 1), nodes.map(n => n.size));
      ptsGeo = pts.geometry;
      scene.add(pts);
    }

    const clusterSize = k => 3.5 + Math.sqrt(k) * 1.15;
    function buildClusters() {
      cpts = makeSprites(clusters, clusters.map(c => c.color), clusters.map(() => 1), clusters.map(c => clusterSize(c.nodes.length)));
      scene.add(cpts);
      const pos = [], colr = [];
      clusters.forEach(c => {
        const k = col(c.color);
        pos.push(c.anchor.x, c.anchor.y, c.anchor.z, c.x, c.y, c.z);
        colr.push(k.r * 0.4, k.g * 0.4, k.b * 0.4, k.r * 0.9, k.g * 0.9, k.b * 0.9);
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute("color", new THREE.Float32BufferAttribute(colr, 3));
      g.userData.base = Float32Array.from(colr);
      clines = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false }));
      scene.add(clines);
    }

    // Blend points and clusters by the current level of detail (lod 1 = clustered).
    function applyLod() {
      if (!ptsGeo) return;
      const a = ptsGeo.attributes.alpha, lc = lineGeo.attributes.color, lb = lineGeo.userData.base;
      nodes.forEach((n, i) => {
        const vis = n.cluster.small ? 1 : 1 - lod;
        const on = active.has(n.id);
        a.setX(i, (on ? 1 : 0.07) * vis);
        const k = (on ? 1 : 0.05) * vis;
        for (let j = 0; j < 6; j++) lc.array[i * 6 + j] = lb[i * 6 + j] * k;
      });
      a.needsUpdate = lc.needsUpdate = true;
      const ca = cpts.geometry.attributes, cc = clines.geometry.attributes.color, cb = clines.geometry.userData.base;
      clusters.forEach((c, i) => {
        ca.alpha.setX(i, (c.shown ? 0.62 : 0.06) * lod); // additive glow: keep big clusters from washing out
        ca.size.setX(i, clusterSize(c.shown || c.nodes.length));
        const k = (c.shown ? 1 : 0.06) * lod;
        for (let j = 0; j < 6; j++) cc.array[i * 6 + j] = cb[i * 6 + j] * k;
        if (c.el) {
          c.el.textContent = c.shown;
          c.el.hidden = lod < 0.5 || !c.shown || c.shown < 8;
        }
      });
      ca.alpha.needsUpdate = ca.size.needsUpdate = cc.needsUpdate = true;
    }

    function buildStars() {
      const list = [], colors = [], alphas = [], sizes = [];
      for (let i = 0; i < 1400; i++) {
        const u = Math.random() * 2 - 1, th = Math.random() * Math.PI * 2, r = 220 + Math.random() * 380;
        const s = Math.sqrt(1 - u * u);
        list.push({ x: r * s * Math.cos(th), y: r * s * Math.sin(th), z: r * u });
        colors.push(Math.random() < 0.08 ? SPARK : "#ece6da");
        alphas.push(0.15 + Math.random() * 0.35);
        sizes.push(1.2 + Math.random() * 2.2);
      }
      scene.add(makeSprites(list, colors, alphas, sizes));
    }

    function buildLines() {
      const pos = [], colr = [];
      nodes.forEach(n => {
        const c = col(n.color);
        pos.push(n.anchor.x, n.anchor.y, n.anchor.z, n.x, n.y, n.z);
        colr.push(c.r * 0.4, c.g * 0.4, c.b * 0.4, c.r * 0.9, c.g * 0.9, c.b * 0.9);
      });
      lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(colr, 3));
      lineGeo.userData.base = Float32Array.from(colr);
      lines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: Math.min(0.32, 0.32 * Math.sqrt(300 / nodes.length) * 1.4), blending: THREE.AdditiveBlending, depthWrite: false }));
      scene.add(lines);
    }

    function buildRing(capPos) {
      const pos = [], colr = [], N = 240;
      for (let i = 0; i <= N; i++) {
        const a = Math.PI / 2 - (i / N) * Math.PI * 2;
        pos.push(R_CAP * Math.cos(a), R_CAP * Math.sin(a), 0);
        const f = (i / N) * 6, k = Math.floor(f) % 6, t = f - Math.floor(f);
        const c = col(CAPS[k].color).lerp(col(CAPS[(k + 1) % 6].color), t);
        colr.push(c.r, c.g, c.b);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute("color", new THREE.Float32BufferAttribute(colr, 3));
      scene.add(new THREE.Line(g, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.75 })));
      // capacity hubs
      scene.add(makeSprites(CAPS.map(c => ({ ...capPos[c.id], z: 0 })), CAPS.map(c => c.color), CAPS.map(() => 0.9), CAPS.map(() => 7)));
      // outer orbit for application domains
      const op = [];
      for (let i = 0; i <= N; i++) { const a = (i / N) * Math.PI * 2; op.push(R_APP * Math.cos(a), R_APP * Math.sin(a) * 0.78, 0); }
      const og = new THREE.BufferGeometry();
      og.setAttribute("position", new THREE.Float32BufferAttribute(op, 3));
      scene.add(new THREE.Line(og, new THREE.LineBasicMaterial({ color: 0x93a9bd, transparent: true, opacity: 0.16 })));
    }

    const AXIS_YEARS = [2026, 2020, 2010, 2000, 1980, 1950];
    function buildAxis() {
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, yearZ(Math.min(1975, ...papers.map(p => p.year || 2026)))], 3));
      scene.add(new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xece6da, transparent: true, opacity: 0.12 })));
      const tick = [];
      AXIS_YEARS.forEach(y => { const z = yearZ(y); for (let i = 0; i <= 64; i++) { const a = (i / 64) * Math.PI * 2; tick.push(3 * Math.cos(a), 3 * Math.sin(a), z); if (i && i < 64) tick.push(3 * Math.cos(a), 3 * Math.sin(a), z); } });
      const tg = new THREE.BufferGeometry();
      tg.setAttribute("position", new THREE.Float32BufferAttribute(tick, 3));
      scene.add(new THREE.LineSegments(tg, new THREE.LineBasicMaterial({ color: 0xece6da, transparent: true, opacity: 0.18 })));
    }

    function buildSpark() {
      spark = makeSprites([{ x: 0, y: 0, z: 0 }], [SPARK], [1], [14]);
      scene.add(spark);
    }

    function buildLabels(capPos, domPos) {
      const counts = {};
      papers.forEach(p => (p.capacities || []).forEach(c => { counts[c] = (counts[c] || 0) + 1; }));
      const html = [];
      CAPS.forEach(c => {
        const k = capPos[c.id], out = 1.42;
        labels.push({ x: k.x * out, y: k.y * out, z: 0 });
        html.push(`<div class="g-label g-cap" style="--h:${c.color}"><b>${esc(cap(c.id).name)}</b>${counts[c.id] || 0} papers</div>`);
      });
      Object.entries(domPos).forEach(([d, k]) => {
        labels.push({ x: k.x * 1.16, y: k.y * 1.16, z: 0 });
        html.push(`<div class="g-label g-dom">${esc(d)}</div>`);
      });
      AXIS_YEARS.forEach(y => {
        labels.push({ x: 0, y: -5.5, z: yearZ(y) });
        html.push(`<div class="g-label g-year">${y}</div>`);
      });
      clusters.forEach(c => {
        labels.push({ x: c.x, y: c.y, z: c.z, cluster: c });
        html.push(`<div class="g-label g-count" style="--h:${c.color}"></div>`);
      });
      labelsEl.innerHTML = html.join("");
      labels.forEach((l, i) => { l.el = labelsEl.children[i]; if (l.cluster) l.cluster.el = l.el; });
    }

    function resize() {
      if (!renderer) return;
      w = wrap.clientWidth; h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const scale = h / (2 * Math.tan((camera.fov * Math.PI / 180) / 2));
      scene.traverse(o => { if (o.material?.uniforms?.uScale) o.material.uniforms.uScale.value = scale; });
      home.dist = view.dist = w < 700 ? 190 : 132;
    }

    const now = () => performance.now();
    function start() { if (!running && renderer) { running = true; requestAnimationFrame(loop); } }
    function loop() {
      if (!visible || document.hidden) { running = false; return; }
      frame();
      requestAnimationFrame(loop);
    }

    function frame() {
      const t = (now() - t0) / 1000;
      if (!drag && !reduceMotion && now() - idleAt > 2500) view.yaw += 0.0009;
      if (fly) {
        const k = reduceMotion ? 1 : 0.08;
        ["x", "y", "z"].forEach(a => { view.target[a] += (fly.target[a] - view.target[a]) * k; });
        view.dist += (fly.dist - view.dist) * k;
        if (Math.abs(fly.dist - view.dist) < 0.3) fly = null;
      }
      const want = view.dist < POINTS_BELOW || active.size <= FEW ? 0 : 1;
      if (want !== lod) {
        lod = reduceMotion ? want : Math.abs(want - lod) < 0.04 ? want : lod + (want - lod) * 0.14;
        applyLod();
      }
      const cp = Math.cos(view.pitch);
      camera.position.set(
        view.target.x + view.dist * Math.sin(view.yaw) * cp,
        view.target.y + view.dist * Math.sin(view.pitch),
        view.target.z + view.dist * Math.cos(view.yaw) * cp
      );
      camera.lookAt(view.target.x, view.target.y, view.target.z);
      camera.updateMatrixWorld();

      // pulse selection ring and the central spark
      const sel = nodes.find(n => n.id === (highlightId || selectedId));
      const sa = selPts.geometry.attributes;
      if (sel) {
        sa.position.setXYZ(0, sel.x, sel.y, sel.z);
        sa.alpha.setX(0, 0.55 + 0.35 * Math.sin(t * 5));
        sa.size.setX(0, 7 + (reduceMotion ? 0 : Math.sin(t * 5) * 1.2));
      } else sa.alpha.setX(0, 0);
      sa.position.needsUpdate = sa.alpha.needsUpdate = sa.size.needsUpdate = true;
      spark.geometry.attributes.size.setX(0, 13 + (reduceMotion ? 0 : Math.sin(t * 2.4) * 1.6));
      spark.geometry.attributes.size.needsUpdate = true;

      renderer.render(scene, camera);

      const v = new THREE.Vector3(), placed = [];
      labels.forEach(l => {
        v.set(l.x, l.y, l.z).project(camera);
        let hide = v.z > 1;
        if (l.cluster) {
          if (l.el.hidden) return;
          // count labels: skip one that would sit on a bigger cluster's label
          const sx = (v.x * 0.5 + 0.5) * w, sy = (-v.y * 0.5 + 0.5) * h;
          hide = hide || placed.some(q => Math.abs(q[0] - sx) < 30 && Math.abs(q[1] - sy) < 16);
          if (!hide) placed.push([sx, sy]);
        }
        l.el.style.opacity = hide ? 0 : "";
        l.el.style.transform = `translate(${(v.x * 0.5 + 0.5) * w}px, ${(-v.y * 0.5 + 0.5) * h}px) translate(-50%, -50%)`;
      });
    }

    function pick(mx, my) {
      const v = new THREE.Vector3();
      let best = null, bd = Infinity;
      const test = (q, r, hit) => {
        v.set(q.x, q.y, q.z).project(camera);
        if (v.z > 1) return;
        const sx = (v.x * 0.5 + 0.5) * w, sy = (-v.y * 0.5 + 0.5) * h, d = (sx - mx) ** 2 + (sy - my) ** 2;
        if (d < r * r && d < bd) { bd = d; best = { ...hit, sx, sy }; }
      };
      const clustered = lod > 0.5;
      nodes.forEach(n => { if (active.has(n.id) && (!clustered || n.cluster.small)) test(n, 18, { n }); });
      if (clustered) clusters.forEach(c => { if (c.shown) test(c, 14 + Math.sqrt(c.shown) * 2.2, { c }); });
      return best;
    }

    function openCluster(c) {
      fly = { target: { x: c.x, y: c.y, z: c.z }, dist: Math.min(view.dist, 78) };
      idleAt = now();
      showCluster(c.label, new Set([...c.ids].filter(id => active.has(id))));
    }

    function bindPointer() {
      const tip = $("#galaxy-tip");
      canvas.addEventListener("pointerdown", e => {
        drag = { x: e.clientX, y: e.clientY, yaw: view.yaw, pitch: view.pitch, moved: false, touch: e.pointerType === "touch" };
        if (!drag.touch) canvas.setPointerCapture(e.pointerId);
      });
      canvas.addEventListener("pointermove", e => {
        const r = canvas.getBoundingClientRect();
        if (drag) {
          const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
          if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
          if (drag.moved) {
            canvas.classList.add("dragging");
            view.yaw = drag.yaw - dx * 0.005;
            if (!drag.touch) view.pitch = Math.max(-1.2, Math.min(1.2, drag.pitch + dy * 0.004));
            idleAt = now();
            tip.hidden = true;
            return;
          }
        }
        const hit = pick(e.clientX - r.left, e.clientY - r.top);
        canvas.classList.toggle("pointing", !!hit);
        if (hit) idleAt = now(); // hold the slow orbit while the pointer rests on something
        if (hit?.c) {
          hoverId = null;
          const c = hit.c, top = c.nodes.filter(n => active.has(n.id)).sort((a, b) => (b.p.year || 0) - (a.p.year || 0)).slice(0, 3);
          tip.innerHTML = `<b>${esc(c.group)}</b>${c.shown} paper${c.shown === 1 ? "" : "s"}${c.years ? ` · ${esc(c.years)}` : ""}<small>${top.map(n => esc(n.p.short)).join("<br>")}${c.shown > 3 ? "<br>…" : ""}</small><small>Click to open this cluster</small>`;
          tip.hidden = false;
          tip.style.left = `${Math.max(12, Math.min(hit.sx + 16, w - tip.offsetWidth - 12))}px`;
          tip.style.top = `${Math.max(12, Math.min(hit.sy + 16, h - tip.offsetHeight - 12))}px`;
        } else if (hit) {
          hoverId = hit.n.id;
          const p = hit.n.p;
          tip.innerHTML = `<b>${esc(p.short)}</b>${!p.title ? "Metadata being confirmed" : showTitle(p) ? esc(p.title) : ""}<small>${esc([p.venue, p.year].filter(Boolean).join(" · "))}${p.dimension ? ` · ${esc(p.dimension)}` : ""}</small>`;
          tip.hidden = false;
          const tx = Math.min(hit.sx + 16, w - tip.offsetWidth - 12), ty = Math.max(12, Math.min(hit.sy + 16, h - tip.offsetHeight - 12));
          tip.style.left = `${Math.max(12, tx)}px`;
          tip.style.top = `${ty}px`;
        } else {
          hoverId = null;
          tip.hidden = true;
        }
      });
      const end = e => {
        if (drag && !drag.moved) {
          const r = canvas.getBoundingClientRect();
          const hit = pick(e.clientX - r.left, e.clientY - r.top);
          tip.hidden = true;
          if (hit?.c) openCluster(hit.c);
          else if (hit) openEntry("p", hit.n.id);
        }
        drag = null;
        canvas.classList.remove("dragging");
      };
      canvas.addEventListener("pointerup", end);
      canvas.addEventListener("pointercancel", () => { drag = null; canvas.classList.remove("dragging"); });
      canvas.addEventListener("pointerleave", () => { $("#galaxy-tip").hidden = true; });
      canvas.addEventListener("wheel", e => {
        if (!(e.ctrlKey || e.metaKey)) return; // let the page scroll; pinch and ctrl+wheel zoom
        e.preventDefault();
        view.dist = Math.max(40, Math.min(260, view.dist * (1 + e.deltaY * 0.002)));
        idleAt = now();
        fly = null;
      }, { passive: false });
    }

    function filter(ids) {
      active = ids;
      clusters.forEach(c => { c.shown = c.nodes.reduce((k, n) => k + ids.has(n.id), 0); });
      if (!ptsGeo) return;
      if (!running) lod = view.dist < POINTS_BELOW || ids.size <= FEW ? 0 : 1;
      applyLod();
    }
    function select(id) { selectedId = id; }
    function highlight(id) { highlightId = id; }
    return { init, filter, select, highlight };
  })();

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
