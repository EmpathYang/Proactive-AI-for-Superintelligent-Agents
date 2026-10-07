# Survey data

The website treats the survey content as reusable data rather than embedding it
inside the page. All files are UTF-8 JSON and can be consumed by other static
site generators, notebooks, or visualization tools.

| File | Contents |
| --- | --- |
| [`site.json`](site.json) | Paper title, abstract, authors, affiliations, repository link, and BibTeX |
| [`taxonomy.json`](taxonomy.json) | Six proactive capacities, research dimensions, and representative works |
| [`evaluation.json`](evaluation.json) | Three evaluation levels, metric categories, and example metrics |
| [`maturity.json`](maturity.json) | Initiative, authority, next milestone, and binding constraint for 13 domains |
| [`applications.json`](applications.json) | The representative works the survey selects for its application domains and analyzes across the 6A pipeline: one record per row of the survey's application tables; `citation_keys` point to entries in `papers.json` |
| [`papers.json`](papers.json) | The paper library: every work the survey cites, tagged by capacity, research dimension and application domain. See [Paper record](#paper-record) |

## Application record

Each item in `applications.json` uses the following fields:

```json
{
  "id": "stable-kebab-case-id",
  "system": "Display name",
  "domain": "Application domain",
  "awareness": "Observed state and context",
  "anticipation": "Forecasting or reasoning mechanism",
  "agenda": "Persistent goals or commitments, when applicable",
  "arbitration": "Intervention gate, timing, or safety mechanism",
  "action": "Delivered suggestion or action and authority level",
  "adaptation": "Feedback or learning mechanism",
  "deployment": "Deployment setting",
  "research_type": "Research or Commercial",
  "released": "Optional first public release, when the source table gives one",
  "citation_keys": ["Optional bibliography keys"]
}
```

A dash (—) or an empty string means the source table did not identify a distinct
mechanism; neither is evidence that the system lacks that capacity.

## Paper record

Each item in `papers.json` uses the following fields:

| Field | Notes |
| --- | --- |
| `id` | Stable kebab-case id. Links and `applications.json` refer to it. |
| `citation_key` | The bibliography key the manuscript cites the work by. `citation_aliases` holds further keys for the same work, when there are any. |
| `short` | The name the survey uses, e.g. `KnowNo`. |
| `title`, `authors`, `year`, `venue`, `url` | From the bibliography, as plain text: `é` and `π`, not LaTeX. Where it names no venue, `venue` holds the BibTeX entry type, such as `misc`. |
| `status` | `verified`, or `needs-metadata` while the title, year or venue is missing. |
| `kind` | `method`, `system`, `benchmark`, `study`, `position`, `survey` or `foundational`. |
| `capacities` | The capacities (ids from `taxonomy.json`) whose section cites the work. |
| `dimension` | The research dimension under the work's primary capacity, as named in `taxonomy.json`. |
| `domains` | The application domains whose section or table cites the work. |
| `systems` | Ids of the records in `applications.json` whose table row cites the work. |
| `added` | The date the entry was added (`YYYY-MM-DD`). The library marks entries from the last 30 days as new. |
| `note` | Optional line shown in the library. |

## Syncing with the manuscript

The manuscript is the source of truth. `site.json` (title, abstract, authors),
`applications.json`, `maturity.json` and the tags of `papers.json` are rebuilt
from it, not edited by hand. A work enters
`papers.json` when the manuscript cites it and leaves when it no longer does.
`taxonomy.json` and `evaluation.json` mirror the manuscript's wording and are
kept by hand.

After a sync, `python3 scripts/papers.py validate` checks the library and
`python3 scripts/papers.py readme` rewrites the paper list in the README.

The data reflects the survey manuscript at the time shown in each file. Product
capabilities and commercial deployments may change after publication.
