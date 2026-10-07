#!/usr/bin/env python3
"""Check the survey's paper library (data/papers.json) and write the parts of README.md that follow the data.

Commands
  validate              Check every entry against the schema and the taxonomy.
  readme [--check]      Regenerate the citation and the paper list in README.md: the table of
                        contents, the six capacities and the application domains, each with
                        its figure and its papers.
  stats                 Print counts by capacity, domain, year and status.

The library itself follows the manuscript: a work enters when the manuscript cites it and
leaves when it no longer does.

Only the standard library is used, so the script runs anywhere Python 3.8+ does.
"""
import argparse
import datetime as dt
import json
import re
import sys
import unicodedata
import urllib.parse
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
PAPERS = DATA / "papers.json"
README = ROOT / "README.md"
BEGIN, END = "<!-- papers:begin -->", "<!-- papers:end -->"
CITE_BEGIN, CITE_END = "<!-- citation:begin -->", "<!-- citation:end -->"
GENERAL = "General References"  # the domain of a work cited outside the capacity and application sections
WEBSITE = "https://empathyang.github.io/Proactive-AI-for-Superintelligent-Agents/"

# Section marks in the README. A capacity or a domain without one gets FALLBACK_MARK.
CAPACITY_MARK = {"awareness": "👀", "anticipation": "🔮", "agenda": "🎯", "arbitration": "⚖️", "action": "⚡", "adaptation": "🔄"}
DOMAIN_MARK = {
    "Coding": "💻", "GUI Agents": "🖥️", "Information Access": "🔍", "Embodied & Robotics": "🤖", "Security": "🔒",
    "AutoResearch": "🔬", "Smart Home": "🏠", "Smart City": "🏙️", "Healthcare": "🏥", "Law": "📜", "Education": "🎓",
    "Entertainment & Media": "🎬", "Agriculture": "🌾",
}
FALLBACK_MARK = "📌"
CONTENTS, MECHANISMS, APPLICATIONS, REFERENCES = "📋 Table of Contents", "🧩 Mechanisms: The Six Capacities", "🚀 Applications", "📖 General References"

KINDS = ["method", "system", "benchmark", "study", "position", "survey", "foundational"]
STATUSES = ["verified", "needs-metadata"]
ID_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
TEXT_FIELDS = ["short", "title", "authors", "venue", "note"]
LATEX_RE = re.compile(r"\\|[{}`]|''|\$\s*[\\^_]")  # the fields hold plain text: é, π, “…”, not \'e, $\pi$, ``...''


def load(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def vocabulary():
    tax = load(DATA / "taxonomy.json")
    caps = {c["id"]: c for c in tax["capacities"]}
    dims = {s["name"]: c["id"] for c in tax["capacities"] for s in c["subdimensions"]}
    apps = load(DATA / "applications.json")
    systems = {s["id"]: s for s in apps["systems"]}
    domains = sorted({s["domain"] for s in apps["systems"]} | {"Education", "Agriculture", GENERAL})
    return caps, dims, systems, domains


# ----------------------------------------------------------------- validate
def validate(doc=None, quiet=False):
    doc = doc or load(PAPERS)
    caps, dims, systems, domains = vocabulary()
    errors, warnings, seen = [], [], set()
    for i, p in enumerate(doc.get("papers", [])):
        where = f"papers[{i}] ({p.get('id', '?')})"
        pid = p.get("id", "")
        if not ID_RE.match(pid):
            errors.append(f"{where}: id must be kebab-case")
        if pid in seen:
            errors.append(f"{where}: duplicate id")
        seen.add(pid)
        if not p.get("short"):
            errors.append(f"{where}: 'short' (the name used in the survey) is required")
        status = p.get("status")
        if status not in STATUSES:
            errors.append(f"{where}: status must be one of {STATUSES}")
        if status == "verified":
            for key in ("title", "year", "venue"):
                if not p.get(key):
                    errors.append(f"{where}: verified entries need '{key}'")
            if not p.get("authors"):
                warnings.append(f"{where}: authors missing")
            if not p.get("url"):
                warnings.append(f"{where}: no link")
        if status == "needs-metadata":
            warnings.append(f"{where}: needs metadata (title, authors, venue, link)")
        year = p.get("year")
        if year is not None and not (isinstance(year, int) and 1800 <= year <= dt.date.today().year + 1):
            errors.append(f"{where}: year must be an integer between 1800 and next year")
        if p.get("url") and not str(p["url"]).startswith(("https://", "http://")):
            errors.append(f"{where}: url must start with http(s)://")
        if re.search(r"[\s\\{}]", str(p.get("url") or "")):
            errors.append(f"{where}: url holds a space, a backslash or a brace")
        for key in TEXT_FIELDS:
            text = str(p.get(key) or "")
            if LATEX_RE.search(text):
                errors.append(f"{where}: '{key}' holds LaTeX markup, write it as plain text")
            if text != text.strip():
                errors.append(f"{where}: '{key}' starts or ends with a space")
        if p.get("kind") not in KINDS:
            errors.append(f"{where}: kind must be one of {KINDS}")
        for c in p.get("capacities", []):
            if c not in caps:
                errors.append(f"{where}: unknown capacity '{c}'")
        dim = p.get("dimension")
        if dim:
            if dim not in dims:
                errors.append(f"{where}: unknown dimension '{dim}' (see data/taxonomy.json)")
            elif dims[dim] not in p.get("capacities", []):
                errors.append(f"{where}: dimension '{dim}' belongs to '{dims[dim]}', add it to capacities")
        for d in p.get("domains", []):
            if d not in domains:
                errors.append(f"{where}: unknown domain '{d}' (known: {', '.join(domains)})")
        for s in p.get("systems", []):
            if s not in systems:
                errors.append(f"{where}: unknown system id '{s}' (see data/applications.json)")
        if not p.get("capacities") and not p.get("domains"):
            errors.append(f"{where}: tag at least one capacity or one domain")
        if not DATE_RE.match(str(p.get("added", ""))):
            errors.append(f"{where}: 'added' must be YYYY-MM-DD")
    if doc.get("count") != len(doc.get("papers", [])):
        errors.append(f"count is {doc.get('count')} but there are {len(doc.get('papers', []))} papers")
    for system in systems.values():
        system_citations = system.get("citation_keys", [])
        if len(system_citations) != len(set(system_citations)):
            errors.append(f"system '{system['id']}': duplicate citation keys")
        for citation_key in system_citations:
            if citation_key != citation_key.strip():
                errors.append(
                    f"system '{system['id']}': citation key has surrounding whitespace: {citation_key!r}"
                )
            elif citation_key not in seen:
                errors.append(
                    f"system '{system['id']}': citation key '{citation_key}' is missing from papers.json"
                )
    if not quiet:
        for w in warnings:
            print(f"warning: {w}")
        for e in errors:
            print(f"error: {e}")
        print(f"{len(doc.get('papers', []))} papers, {len(errors)} errors, {len(warnings)} warnings")
    return errors


# ------------------------------------------------------------------- readme
def venue_of(p):
    """The venue as the list prints it. Where the bibliography names none, the entry carries its
    BibTeX type instead (misc, inproceedings, ...), which is not a venue and is left out. A preprint
    is "arXiv" however the bibliography words it ("arXiv preprint arXiv:2405.14573", "ArXiv")."""
    venue = (p.get("venue") or "").strip()
    if not venue or re.fullmatch(r"[a-z]+", venue):
        return None
    return "arXiv" if re.fullmatch(r"arxiv(\s+preprint)?(\s+arxiv:\S+)?", venue, re.I) else venue


def cell(text):
    return str(text).replace("|", "\\|")


def literal(text):
    """Plain text as Markdown has to be given it, so that a title's * or $ is shown and not read as markup."""
    return re.sub(r"([\\`*_\[\]<$|~])", r"\\\1", str(text))


def row(p):
    title = literal(p.get("title") or p["short"])
    paper = f"[{title}]({p['url']})" if p.get("url") else title
    venue, year = venue_of(p), p.get("year")
    where = venue if venue and year and str(year) in venue else " ".join(str(part) for part in (venue, year) if part)
    return f"| {paper} | {literal(where)} |"


def table(group):
    """Papers newest first, as the two-column table the list uses throughout."""
    return ["| Paper | Venue |", "| --- | --- |", *(row(p) for p in sorted(group, key=lambda p: -(p.get("year") or 0))), ""]


def anchor(heading):
    """The link GitHub gives a heading: lower case, spaces to hyphens, and every character dropped
    that is not a letter, a digit, a hyphen, an underscore or a combining mark (which is what an
    emoji's variation selector is, so it stays behind when the emoji goes)."""
    kept = "".join(ch for ch in heading.strip().lower() if ch in " -_" or ch.isalnum() or unicodedata.category(ch).startswith("M"))
    return "#" + urllib.parse.quote(kept.replace(" ", "-"), safe="-_")


def figure(figures, fid):
    found = figures.get(fid)
    return [f"![{found['title']}](assets/figures/{found['file']})", ""] if found else []


def render_readme(doc):
    """Everything in README.md that follows the data: the table of contents, the six capacities with
    their research dimensions, the application domains in the survey's order, and the general
    references. A work tagged with a capacity is listed once, under its dimension, or, when it has
    none, under the first capacity it is tagged with. A work cited only in application sections is
    listed under each of its domains."""
    caps, _, systems, _ = vocabulary()
    papers = doc["papers"]
    figures = {f["id"]: f for f in load(ROOT / "assets" / "figures" / "manifest.json")["figures"]}
    maturity = load(DATA / "maturity.json")

    by_capacity = {}
    for cid, cap in caps.items():
        groups = [(dim["name"], [p for p in papers if cid in p.get("capacities", []) and p.get("dimension") == dim["name"]])
                  for dim in cap["subdimensions"]]
        groups.append(("Other Works", [p for p in papers if not p.get("dimension") and (p.get("capacities") or [None])[0] == cid]))
        if any(group for _, group in groups):
            by_capacity[cid] = [(name, group) for name, group in groups if group]
    rest = [p for p in papers if not p.get("capacities")]
    cited = {d for p in rest for d in p.get("domains", [])}
    in_survey_order = list(dict.fromkeys(s["domain"] for s in systems.values()))
    domains = [d for d in in_survey_order if d in cited] + sorted(cited - set(in_survey_order) - {GENERAL})
    capacity_heading = {cid: f"{CAPACITY_MARK.get(cid, FALLBACK_MARK)} {caps[cid]['name']}" for cid in by_capacity}
    domain_heading = {d: f"{DOMAIN_MARK.get(d, FALLBACK_MARK)} {d}" for d in domains}

    lines = [BEGIN, "", "<!-- Everything from here to papers:end is written by `python3 scripts/papers.py readme`"
             " from data/ and assets/figures/manifest.json. -->", ""]
    lines += [f"## {CONTENTS}", "", f"The list covers the **{len(papers):,}** works the survey cites.", ""]
    if by_capacity:
        lines.append(f"- [{MECHANISMS}]({anchor(MECHANISMS)})")
        lines += [f"  - [{capacity_heading[cid]}]({anchor(capacity_heading[cid])})" for cid in by_capacity]
    if domains:
        lines.append(f"- [{APPLICATIONS}]({anchor(APPLICATIONS)})")
        lines += [f"  - [{domain_heading[d]}]({anchor(domain_heading[d])})" for d in domains]
    if GENERAL in cited:
        lines.append(f"- [{REFERENCES}]({anchor(REFERENCES)})")
    lines += ["", "---", ""]

    if by_capacity:
        lines += [f"## {MECHANISMS}", "", "Six interacting capacities for exercising proactive discretion.", "", *figure(figures, "six-capacities")]
        for cid, groups in by_capacity.items():
            cap = caps[cid]
            lines += [f"### {capacity_heading[cid]}", "", f"**{cap['question']}** {cap['description']}", "", *figure(figures, cid)]
            for name, group in groups:
                lines += [f"#### {name}", "", *table(group)]
        lines += ["---", ""]

    if domains:
        lines += [f"## {APPLICATIONS}", "", "From executing assigned tasks to sustaining delegated objectives.", "",
                  *figure(figures, "applications-delegated-objectives")]
        ladder = " → ".join(rung.lower() for rung in maturity["ladder"])
        lines += [f"A proactive-maturity map of the surveyed domains. **Initiative** places each domain on a {len(maturity['ladder'])}-rung ladder "
                  f"({ladder}); a range means that the surveyed systems span both rungs. **Authority** is what the agent is permitted to do "
                  "on its first move. **Binding constraint** names the dominant limiter on further progress.", "",
                  "| Domain | Initiative | Authority | Next milestone | Binding constraint |", "| --- | --- | --- | --- | --- |"]
        for entry in maturity["domains"]:
            name = entry.get("applications") or entry["domain"]
            link = f"[{name}]({anchor(domain_heading[name])})" if name in domain_heading else name
            lines.append("| " + " | ".join(cell(part) for part in (link, entry["initiative"], entry["authority"], entry["milestone"], entry["constraint"])) + " |")
        lines += ["", f"The survey also compares {len(systems)} representative works from these domains across the six capacities. "
                  f"They can be browsed in the [website's library]({WEBSITE}#library).", ""]
        for d in domains:
            lines += [f"### {domain_heading[d]}", "", *table([p for p in rest if d in p.get("domains", [])])]
        lines += ["---", ""]

    if GENERAL in cited:
        lines += [f"## {REFERENCES}", "", "Works the survey cites outside the capacity and application sections.", "",
                  *table([p for p in rest if GENERAL in p.get("domains", [])])]
    lines.append(END)
    return "\n".join(lines)


def render_citation():
    """The call to cite the survey, with the BibTeX entry data/site.json carries."""
    entry = load(DATA / "site.json")["citation"].strip().split("\n")
    quoted = ["> [!NOTE]", "> 📚 If you find this resource useful, please cite the survey:", ">", "> ```bibtex", *(f"> {line}" for line in entry), "> ```"]
    return "\n".join([CITE_BEGIN, "", *quoted, "", CITE_END])


def between(text, begin, end, block):
    if begin not in text or end not in text:
        sys.exit(f"README.md needs the markers {begin} and {end}")
    return text[: text.index(begin)] + block + text[text.index(end) + len(end):]


def cmd_readme(args):
    text = README.read_text(encoding="utf-8")
    new = between(text, CITE_BEGIN, CITE_END, render_citation())
    new = between(new, BEGIN, END, render_readme(load(PAPERS)))
    if args.check:
        if new != text:
            sys.exit("README.md is out of date: run python3 scripts/papers.py readme")
        print("README.md is up to date")
        return
    README.write_text(new, encoding="utf-8")
    print("README.md updated")


def cmd_stats(_):
    papers = load(PAPERS)["papers"]
    for label, counter in (
        ("capacity", Counter(c for p in papers for c in p.get("capacities", []))),
        ("domain", Counter(d for p in papers for d in p.get("domains", []))),
        ("year", Counter(p.get("year") for p in papers if p.get("year"))),
        ("status", Counter(p["status"] for p in papers)),
    ):
        print(f"{label}: " + ", ".join(f"{k}={v}" for k, v in sorted(counter.items(), key=lambda kv: str(kv[0]))))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("validate")
    rd = sub.add_parser("readme")
    rd.add_argument("--check", action="store_true")
    sub.add_parser("stats")
    args = ap.parse_args()
    if args.cmd == "validate":
        sys.exit(1 if validate() else 0)
    {"readme": cmd_readme, "stats": cmd_stats}[args.cmd](args)


if __name__ == "__main__":
    main()
