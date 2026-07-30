# Deepti's Technical Writing Portfolio

**Live site: [https://deeptin1.github.io/portfolio/](https://deeptin1.github.io/portfolio/)**

This repository powers a GitHub Pages site that showcases samples of Deepti's technical writing (API documentation, OpenAPI specification, user guide, PRD, Information Architecture, FAQs, and so on).

The site uses [Just the Docs](https://github.com/just-the-docs/just-the-docs), a documentation theme for Jekyll.

Content follows [STYLE_GUIDE.md](STYLE_GUIDE.md), a summary of the Google developer documentation style guide rules applied throughout.

## Running locally

```
bundle exec jekyll serve --baseurl ""
```

Site will be available at `http://127.0.0.1:4000/`.

## Linting

[Vale](https://vale.sh/), configured with the [Google style rules](https://github.com/errata-ai/Google) vendored under `.github/styles/Google/`, checks `docs/` and `index.md` for style-guide violations. It runs automatically on every pull request; to run it locally:

```
vale docs index.md
```

(Requires the Vale CLI — `brew install vale` on macOS.)
