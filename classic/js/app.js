const state = { systems: [], filtered: [] };

const escapeHTML = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return response.json();
}

function renderSite(site) {
  document.querySelectorAll('[data-field="tagline"]').forEach(el => el.textContent = site.tagline);
  document.querySelectorAll('[data-field="abstract"]').forEach(el => el.textContent = site.abstract);
  document.querySelectorAll('[data-link="github"]').forEach(el => el.href = site.links.github);
  // lines break between names, after the dot, and an author's name stays on one line
  document.querySelector("#authors").replaceChildren(...site.authors.flatMap((name, index, all) => {
    const span = document.createElement("span");
    span.textContent = index < all.length - 1 ? `${name} ·` : name;
    return [span, " "];
  }));
  document.querySelector("#affiliations").textContent = site.affiliations.join("\u00a0· ");
  document.querySelector("#citation-code").textContent = site.citation;
}

function renderTaxonomy(data) {
  document.querySelector("#capacity-grid").innerHTML = data.capacities.map((capacity, index) => `
    <article class="capacity-card">
      <span class="capacity-number">0${index + 1}</span>
      <h3>${escapeHTML(capacity.name)}</h3>
      <p class="capacity-question">${escapeHTML(capacity.question)}</p>
      <p class="capacity-description">${escapeHTML(capacity.description)}</p>
      <details class="capacity-details">
        <summary>${capacity.subdimensions.length} research dimensions</summary>
        <ul>${capacity.subdimensions.map(item => `<li><strong>${escapeHTML(item.name)}</strong>: ${escapeHTML(item.works.join(", "))}</li>`).join("")}</ul>
      </details>
    </article>
  `).join("");
}

function renderEvaluation(data) {
  // one row per level: its name and purpose on the left, its metric groups in two columns on the right
  document.querySelector("#evaluation-grid").innerHTML = data.levels.map((level, index) => `
    <article class="evaluation-card">
      <header class="evaluation-head">
        <p class="kicker">Level 0${index + 1}</p>
        <h3>${escapeHTML(level.name)}</h3>
        <p class="evaluation-purpose">${escapeHTML(level.purpose)}</p>
      </header>
      <div class="metric-groups">
        ${level.categories.map(category => `
          <div class="metric-group">
            <h4>${escapeHTML(category.name)}</h4>
            <div class="metric-list">${category.metrics.map(metric => `<span>${escapeHTML(metric)}</span>`).join("")}</div>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderMaturity(data) {
  document.querySelector("#maturity-grid").innerHTML = data.domains.map(item => `
    <article class="maturity-card">
      <h3>${escapeHTML(item.domain)}</h3>
      <div class="maturity-tags">
        <span class="tag">${escapeHTML(item.initiative)}</span>
        <span class="tag tag-authority">${escapeHTML(item.authority)}</span>
      </div>
      <dl>
        <dt>Next milestone</dt><dd>${escapeHTML(item.milestone)}</dd>
        <dt>Binding constraint</dt><dd>${escapeHTML(item.constraint)}</dd>
      </dl>
    </article>
  `).join("");
}

function normalizeType(value) {
  return value.toLowerCase().startsWith("com") ? "Commercial" : "Research";
}

function renderSystems() {
  const body = document.querySelector("#systems-body");
  const count = document.querySelector("#result-count");
  count.textContent = `Showing ${state.filtered.length} of ${state.systems.length} representative works`;
  if (!state.filtered.length) {
    body.innerHTML = '<tr><td class="empty-state" colspan="8">No entries match these filters.</td></tr>';
    return;
  }
  body.innerHTML = state.filtered.map(item => `
    <tr>
      <td>${escapeHTML(item.system)}</td>
      <td><span class="domain-pill">${escapeHTML(item.domain)}</span></td>
      <td>${escapeHTML(item.awareness || "—")}</td>
      <td>${escapeHTML(item.anticipation || "—")}</td>
      <td>${escapeHTML(item.arbitration || "—")}</td>
      <td>${escapeHTML(item.action || "—")}</td>
      <td>${escapeHTML(item.adaptation || "—")}</td>
      <td>${escapeHTML(item.deployment || "—")}<br><small>${normalizeType(item.research_type)}</small></td>
    </tr>
  `).join("");
}

function applyFilters() {
  const query = document.querySelector("#system-search").value.trim().toLowerCase();
  const domain = document.querySelector("#domain-filter").value;
  const type = document.querySelector("#type-filter").value;
  state.filtered = state.systems.filter(item => {
    const haystack = Object.values(item).flat().join(" ").toLowerCase();
    return (!query || haystack.includes(query))
      && (!domain || item.domain === domain)
      && (!type || normalizeType(item.research_type) === type);
  });
  renderSystems();
}

function setupExplorer(data) {
  state.systems = data.systems;
  state.filtered = data.systems;
  document.querySelectorAll('[data-count="works"]').forEach(el => { el.textContent = data.systems.length; });
  const domainFilter = document.querySelector("#domain-filter");
  [...new Set(data.systems.map(item => item.domain))].sort().forEach(domain => {
    domainFilter.insertAdjacentHTML("beforeend", `<option value="${escapeHTML(domain)}">${escapeHTML(domain)}</option>`);
  });
  ["#system-search", "#domain-filter", "#type-filter"].forEach(selector => {
    document.querySelector(selector).addEventListener("input", applyFilters);
  });
  document.querySelector("#clear-filters").addEventListener("click", () => {
    document.querySelector("#system-search").value = "";
    domainFilter.value = "";
    document.querySelector("#type-filter").value = "";
    applyFilters();
  });
  document.querySelector("#last-updated").textContent = new Date(`${data.updated}T12:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  renderSystems();
}

function setupInteractions() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("#nav-links");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
  document.querySelector("#copy-citation").addEventListener("click", async event => {
    await navigator.clipboard.writeText(document.querySelector("#citation-code").textContent);
    event.currentTarget.textContent = "Copied";
    setTimeout(() => event.currentTarget.textContent = "Copy BibTeX", 1600);
  });
}

async function init() {
  setupInteractions();
  try {
    const [site, taxonomy, evaluation, maturity, applications] = await Promise.all([
      loadJSON("../data/site.json"),
      loadJSON("../data/taxonomy.json"),
      loadJSON("../data/evaluation.json"),
      loadJSON("../data/maturity.json"),
      loadJSON("../data/applications.json")
    ]);
    renderSite(site);
    renderTaxonomy(taxonomy);
    renderEvaluation(evaluation);
    renderMaturity(maturity);
    setupExplorer(applications);
  } catch (error) {
    console.error(error);
    document.querySelector("#result-count").textContent = "Survey data could not be loaded.";
  }
}

init();
