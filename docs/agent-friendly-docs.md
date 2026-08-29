---
title: Making docs agent-friendly
nav_order: 3
---

# Making docs agent-friendly
{: .no_toc }
An audit-and-fix pass making this portfolio's documentation accessible to coding agents (Claude Code, Cursor, Copilot, and others), using [agent-ecosystem/agent-docs-spec](https://github.com/agent-ecosystem/agent-docs-spec) as the measurement standard.

----------------------

> **Context**
> - **Audience:** Technical writing leaders and engineers evaluating whether documentation is ready for the agent-assisted development workflows now common in the industry.
> - **My role:** Identified the gap, implemented the fix, and verified the result, using the specification's checker.
> - **Tools:** [`afdocs`](https://afdocs.dev) (the specification's companion command-line tool), Jekyll, Liquid, HTML/CSS.
> - **Outcome:** Closed 4 of 6 failing checks from an audit, verified individually against a running server.
{: .note }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## The problem

Coding agents increasingly fetch documentation mid-task to verify an API signature, check a config option, or follow a link a user pasted in. But most sites, this one included until this work, were built only for human readers, and agent access patterns are different in ways that matter:

* Most agents fetch raw HTTP responses without executing JavaScript, so client-rendered content is invisible to them.
* Web fetch pipelines truncate silently at fixed character limits (Claude Code's is roughly 100,000 characters). In that case, the agent doesn't know it got a partial page.
* Agents have no built-in way to discover a documentation index like `llms.txt` unless something on the page or in the index itself tells them it exists.

None of this shows up to a human visitor. A page can look perfect in a browser and still be functionally invisible or truncated to an agent, with no error, no broken link, nothing a normal QA pass would catch.

## Establishing a baseline

Rather than guess at what needed fixing, I ran the specification's own checker against the live, deployed site before changing anything by executing the following command:

```
npx afdocs check https://deeptin1.github.io/portfolio/
```

Result: **8 passed, 6 failed, 9 skipped** (23 checks total). 

Already passing, with no action needed: server-rendered content on every page (no client-side rendering to worry about), no broken or redirecting links, clean cache headers, and content starting within the first 10% of every page (no boilerplate burying the actual documentation). 

Failing: no `llms.txt` existed at all (which cascaded into 5 dependent checks failing or being skipped, since they can't run without one), no agent-facing directive pointing to one, and one page (the API documentation reference) going over the truncation threshold.

## What I implemented

### A discovery index: `llms.txt`

Added [`llms.txt`]({{ '/llms.txt' | relative_url }}) at the site root, following the [llmstxt.org](https://llmstxt.org) proposal structure: an H1 title, a blockquote summary, and H2-delimited sections of markdown links. It covers all 27 real content pages on the site (26 pre-existing pages plus this one, added after a review comment flagged its own absence), verified by diffing the file's links against the actual built sitemap.

### An agent-facing directive

Agents that fetch a page's rendered HTML have no way to know a documentation index exists at `/llms.txt` unless something in the page tells them. I added a visually hidden element at the very top of the main content area, present on every page, pointing to it, and implemented once in the shared page layout so it covers the whole site without touching individual pages.

### Fixing the one oversized page

The baseline audit flagged exactly one page, of 28, converting to over the truncation threshold: the API documentation reference, at 42K raw HTML converting to 173K markdown. The cause turned out to be concentrated in one place: a sample API response showing 5 full JSON objects, each repeating the identical schema with a long, verbose `instructions` array. That block alone was 34% of the page's raw source.

All 5 objects shared the same shape, so showing 5 of them didn't document anything that showing 1 didn't already cover and showed repetition. I trimmed it to one representative object with a note that the real response contains more items in the same shape, and shortened two reference-table cells that fully duplicated arrays already shown in the preceding JSON.

## Verifying the fix

Each change was checked individually against a running local server with the same `afdocs` tool, and the results were as follows:

| Check | Before | After |
|:---|:---|:---|
| `llms-txt-exists` | Fail—no `llms.txt` found | Pass |
| `llms-txt-valid` | Skipped (depends on `llms-txt-exists`) | Pass—correct H1/blockquote/section structure |
| `llms-txt-size` | Skipped | Pass—5,337 characters, well under the 50,000-character threshold |
| `llms-txt-links-resolve` | Skipped | Pass—all 26 links resolve |
| `llms-txt-directive-html` | Fail—no directive found | Pass—found on all pages tested |
| `page-size-html` | Fail—1 of 28 pages over 100K (42K HTML → 173K markdown) | Pass—same page now 31K HTML → 10K markdown |

I re-ran the full-site audit against production after this shipped.

The fixes hold up on production: `llms.txt` covers 100% of the site's 27 pages, and `docs/api-documentation/`'s size and directive placement both pass in isolation, matching the preceding numbers. 

An edge case: the directive is flagged as buried past 50% on the 404 page. That page has almost no content, so the sidebar and icon markup preceding `<main>` dominates its small total size. Leaving it as is because it is a single low-traffic page. Also, an agent hitting a 404 has already failed to find real content there.

## What's still open

Two checks remain unaddressed deliberately: `markdown-url-support` and `content-negotiation`, which check whether the site serves raw markdown at `.md` URL variants or via `Accept: text/markdown` content negotiation. 

GitHub Pages is static hosting. Therefore, true server-side content negotiation isn't available, and serving `.md` variants would mean generating and maintaining a parallel copy of every page. 

The spec's own research also notes that automated crawlers essentially never fetch `llms.txt`-style resources today; the real consumers are agents in live, real-time workflows, which this work already serves through the index and the directive.
