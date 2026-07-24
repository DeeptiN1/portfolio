---
title: SimpliCompense product documentation suite
has_children: true
nav_order: 3
---

# SimpliCompense product documentation suite
{: .no_toc }

Five samples written for a fictional product called SimpliCompense, across different audiences and stages of its lifecycle.
{: .fs-5 .fw-300 }

## The scenario

SimpliCompense is a fictional invoicing product with about 8,000 active small-business users. To capture holiday-season demand, product leadership pulled forward the launch date for a new Inventory Management feature to September 22.

This decision ripples through every document in this suite. It appears as the deadline in the Product Requirements Document ([PRD](../prd/)), the reason for the [memo](../memo/) to engineering leadership, and the constraint the [meeting notes](../meeting-notes/) are planning sprints around.

The [release notes](../release-notes/) and [FAQs](../faqs/) sit downstream of SimpliCompense, on the customer-facing side, shipping once features go live and users start asking questions. 

I wrote them as separate, self-contained samples rather than as a literal sequel to the Inventory Management epic, so this suite covers both **upstream, internal-facing** docs (requirements → leadership communication → execution plan) and **downstream, external-facing** docs (what shipped, and how to use it) for one product.

## Who each document is for

| Document | Primary audience                                | What it does                                                                          |
|:---|:------------------------------------------------|:--------------------------------------------------------------------------------------|
| [PRD](../prd/) | Product managers, designers, engineering leads. | Defines scope, prioritized requirements with acceptance criteria, and a release plan. |
| [Memo](../memo/) | Engineering managers and leadership.            | Communicates a business-driven schedule change and its staffing impact.               |
| [Meeting notes](../meeting-notes/) | Engineering team.                               | Translates PRD requirements into a sprint plan with owners and action items.          |
| [Release notes](../release-notes/) | End users and customers.                        | Announces what changed in a shipped release.                                          |
| [FAQs](../faqs/) | End users and support.                          | Answers common how-to questions so users can self-serve.                              |

## How the PRD drives documents around it

The memo and meeting notes both point straight back to the PRD.

* The memo tells engineering managers a "new product requirements document" is coming and sets a date to walk through it together. It exists because the PRD's scope and deadline changed.
* The meeting notes open by grounding the whole discussion in "the revised product requirements document," then convert its Must-have/Nice-to-have requirements into sprint-ready action items (Jira tickets, acceptance criteria per ticket, a beta-testing deadline).
* The September 22 launch date and the Must-have prioritization from the PRD reappear, unchanged, in both downstream documents, keeping a requirements chain from drifting as it passes between teams.

## Conventions applied across the suite

* **Consistent terminology.** "SimpliCompense," "Inventory Management," and the priority labels Must-have/Nice-to-have are used identically in every document, without any synonyms introduced along the way.
* **A traceable requirement ID.** The PRD's epic (SCE-49) gives engineering a single reference point that the meeting notes' "create Jira tickets for the finalized stories" can refer to.
* **Acceptance criteria as a first-class column**, It is carried from the PRD's requirements table into the meeting notes' action items.
* **Audience-appropriate structure.** The PRD and release notes both use tables/headers for scanability, the FAQs use a question-per-heading format so each answer is independently searchable, and the memo and meeting notes follow standard business-memo and minutes conventions (To/From/Date/Subject; Topic/Date/Attendees/Action items).
