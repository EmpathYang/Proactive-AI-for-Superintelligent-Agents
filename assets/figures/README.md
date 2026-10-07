# Survey figure assets

This directory holds the figures of **Proactive AI for Superintelligent Agents**
as the manuscript shows them, ready for the web: one lossless WebP per figure,
2400 px wide.

Each one is exported from the manuscript's own figure: rendered, cropped the way
the manuscript shows it, and titled with the lead of its caption. The `alt` text
is written by hand.

The manuscript and its PDF are intentionally not included. For each figure,
[`manifest.json`](manifest.json) records the title, the alt text and the pixel
size.

## Gallery

| Figure | Topic | Suggested use |
| --- | --- | --- |
| ![Reactive and proactive agents](hero.webp) | Proactive vs. reactive AI agents | Page hero and survey overview |
| ![Delegated residual discretion](delegated-discretion.webp) | Proactiveness as delegated residual discretion | Definition section |
| ![Capabilities, trust, and autonomy](capabilities-trust-autonomy.webp) | From complementary capabilities to earned autonomy | Introduction or definition section |
| ![Reactivity-proactivity spectrum](reactivity-proactivity-spectrum.webp) | The reactivity-proactivity spectrum | Definition section |
| ![Historical foundations](historical-foundations.webp) | Historical foundations of increasingly open-ended initiative | History section |
| ![Six proactive capacities](six-capacities.webp) | Six interacting capacities for exercising proactive discretion | Mechanism overview |
| ![Awareness](awareness.webp) | Awareness grounds initiative in decision-relevant context | Mechanism detail |
| ![Anticipation](anticipation.webp) | Anticipation establishes why an intervention may be worth initiating | Mechanism detail |
| ![Agenda](agenda.webp) | Agenda bridges foresight and sustained goal pursuit | Mechanism detail |
| ![Arbitration](arbitration.webp) | Arbitration: a worthwhile goal is not yet a warranted intervention | Mechanism detail |
| ![Action](action.webp) | Action: exercising discretion while preserving human control | Mechanism detail |
| ![Adaptation](adaptation.webp) | Adaptation: learning whether initiative was warranted | Mechanism detail |
| ![Evaluation](evaluation.webp) | Evaluating proactiveness requires evidence beyond task completion | Evaluation section |
| ![Applications and delegated objectives](applications-delegated-objectives.webp) | From executing assigned tasks to sustaining delegated objectives | Applications introduction |
| ![Cross-industry trends](cross-industry-trends.webp) | Three cross-industry trends in proactive AI | Applications conclusion |

## Using an asset

Use a URL relative to the page, and carry the size and the `alt` text over from
[`manifest.json`](manifest.json):

```html
<img
  src="assets/figures/hero.webp"
  width="2400" height="1056"
  alt="Reactive agents wait for explicit requests; proactive agents use awareness, anticipation, agenda formation, arbitration, action, and adaptation."
>
```

The figures are drawn on white. On a dark page, give them a white plate rather
than letting the page show through.

## Attribution

When using these figures outside this repository, cite the survey and link back
to this repository. The repository's [license](../../LICENSE) applies unless a
file is explicitly marked otherwise.
