# Style guide

This portfolio follows the [Google developer documentation style guide](https://developers.google.com/style). This document summarizes the rules actually enforced across this repo's content, with the project-specific exceptions I made. Use it as a checklist before adding or editing a page under `docs/` or `index.md`.

## Voice and tone

* Write in second person ("you") for instructional and procedural content, like guides, how-tos, and FAQs. Third person is appropriate for descriptive business documents (the PRD, memo, and meeting notes in the [SimpliCompense suite](docs/product-writing/index.md)), where it matches the genre's real-world convention.
* Prefer active voice and present tense. Example: "You can execute ExerciseDB APIs using cURL or Postman," not "ExerciseDB APIs can be executed by using cURL or Postman."
* Use contractions ("I'm," "you'll"). Google style treats them as more conversational, not less professional.
* Avoid condescending words: "simply," "just," "easily," "obviously." If a step needs one of these to sound easy, the step needs rewriting instead.
* Avoid Latin abbreviations (`e.g.`, `i.e.`, `etc.`) in prose. Use "for example," "that is," or "and so on."

## Headings

* Use sentence case, not title case: capitalize only the first word and proper nouns/acronyms. "Release notes," not "Release Notes."
* Proper nouns and product/brand names keep their own capitalization inside a sentence-case heading: `SimpliCompense`, `ExerciseDB`, `GitHub`, `LinkedIn`, `NGINX`, `AsciiDoc`, `Postman`, `cURL`, `OpenAPI`, `Swagger`, `Node.js`.
* Established feature/product names that a document uses consistently as a proper noun stay capitalized throughout, like "Inventory Management" in the SimpliCompense suite, because the source documents (PRD, memo, meeting notes) all treat it as a named feature, not a generic phrase.
* No trailing periods or colons on headings.
* Nav labels (the `title:` front matter) follow the same sentence-case rule as on-page headings, for consistency between the sidebar and the content.

## Word choice and symbols

* Spell out "and" instead of using `&` in headings and prose (reserve `&` for cases where it's part of a literal product/brand name).
* Spell out "and" instead of `+` when joining list items in a heading (e.g., "Bug fixes and improvements").
* Use descriptive link text that makes sense out of context. Not "click here" or "here". Instead, say what the link goes to, for example, "Refer to the exercise API YAML spec file."
* Use numerals for numbers in technical content, including statistics and counts (for example, "1,300 exercises," "8,000 users").
* Use the serial (Oxford) comma in lists of three or more items.

## Applying this to writing samples

The SimpliCompense documents (PRD, memo, meeting notes, release notes, FAQs) are fictional writing samples written in specific real-world genres. Style fixes there are limited to mechanical issues (heading case, punctuation, symbols) and not to rewriting their voice, since a memo and an FAQ are supposed to sound different from each other, and both are supposed to sound like real workplace documents rather than a style guide.

## Reference

Full guide: <https://developers.google.com/style>
