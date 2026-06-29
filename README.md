# Aceh Wiki History

**Aceh Wiki History** is an encyclopedia of Acehnese history — sultans, religious scholars, war heroes, literary hikayat characters, sacred places, and historical events — built as a permanent digital archive on the internet.

🔗 **Live site:** https://kbpro8.github.io/acehwiki/

## What's inside

- **people pages** — sultans and rulers, ulamas and mystics, Aceh War fighters, hikayat literary figures, prophets and religious legends, and the Western scholars (Hurgronje, van der Tuuk, and others) who documented them
- **Historical places** — Acheh, Pidie, Kutaraja, Mecca, Medina, and other sites central to the history
- **Historical events** — the Aceh War, the Hok Canton Incident, the great hikayat epics (Malem Dagang, Pochut Muhamat, Prang Gompeuni), and more
- **A year-linked timeline** — every article links its dates to a dedicated year page, so you can browse history chronologically and see everything tied to a given year

Content is compiled and adapted from various book about Aceh history. — every article cites sources from books and other historical materials.

## Running locally

```bash
npm ci
npx quartz build --serve
```

This builds the site and serves it at `http://localhost:8080`.

# AcehWiki conventions — annotated reference

Detailed rationale and edge cases behind the AcehWiki house style. Read this when a
formatting decision is unclear. Examples below are drawn from real entries in the corpus
(`content/events/`, `content/…`) and from the `example-entry.md` in this folder.

## Table of contents

1. Frontmatter details
2. Wikilink syntax in depth
3. Date linking — full rules
4. Lead paragraph anatomy
5. Section patterns
6. Quotation handling
7. Cross-article consistency (titles must match)
8. Multiple sources
9. Common mistakes to avoid

---

## 1. Frontmatter details

```yaml
---
title: Sultan of Deli's letter to Penang
aliases: [Deli letter 27 August 1824, Sultan of Deli to Fullerton 27 August 1824, Appendix 6]
tags: [event, correspondence, diplomacy, malay, colonial]
---
```

- `title` is the **link target** for the whole wiki. Other articles will write
  `[[Sultan of Deli's letter to Penang]]`. Choose it once, carefully, in the most
  recognizable scholarly form, and reuse it verbatim everywhere.
- `aliases` should be generous. Aceh history sources spell names many ways across Dutch,
  Malay, Acehnese, Arabic and English. Capture transliteration variants
  (`Alauddin Mahmud Shah Djohan` / `Alaoe'd-din Mahmoed Shah Djohan`), short forms, and
  document labels (`Appendix 6`, `Bijlage I`). Aliases let future links and searches resolve.
- `tags`: first = entity type (`person`, `event`, `place`, `organization`, `document`,
  `concept`); the remainder are filterable descriptors (era, theme, nationality, sub-type).

## 2. Wikilink syntax in depth

Quartz/Obsidian double-bracket links:

| Form | Renders as | Use when |
|---|---|---|
| `[[Acheh]]` | link reading "Acheh" | display text equals page title |
| `[[Robert Fullerton\|Fullerton]]` | link reading "Fullerton" → Robert Fullerton page | you need shorter/different display text |
| `[[Said Akil's Deli adventure (1824-1828)\|Deli affair]]` | link reading "Deli affair" | natural phrasing differs from a long page title |

Rules of thumb:
- Link the **first mention** of every proper entity, and re-link later mentions when the
  link aids navigation (long articles re-link key actors in each major section).
- Pipe **only** when display text must differ from the title. `[[Fullerton|Fullerton]]` is
  redundant — write `[[Fullerton]]` or, better, `[[Robert Fullerton|Fullerton]]` if the
  canonical page is the full name.
- A page that does not exist yet is fine — create the link anyway (a "red"/stub link). The
  wiki grows by leaving links for articles not yet written. This is expected and encouraged.

## 3. Date linking — full rules

The single most distinctive AcehWiki convention.

- **Year alone** → `[[1786]]`
- **Range of years** → link both ends: `[[1826]]–[[1828]]`, `c. [[1824]]–[[1828]]`
  (use an en-dash – between them)
- **Full calendar date** → split into day-month and year, each its own link:
  `[[7 November]] [[1786]]`, `[[27 August]] [[1824]]`
- **Month + year, no day** → `[[August]] [[1824]]` or "March [[1825]]" as the phrasing reads
- **Decades / centuries** → plain text: "the early 1820s", "the late eighteenth century",
  "the mid-1780s"

Rationale: years and named dates each get their own timeline node in the wiki, so the
chronology pages (`kronologi-sejarah-aceh`) can assemble events by date.

## 4. Lead paragraph anatomy

The opening paragraph does heavy lifting. Pattern observed across the corpus:

1. **Bold restatement** of the subject (matching the title) as the grammatical subject.
2. A **defining clause** — who/what it was — with an em-dash aside that names the source or
   author frame ("— printed by P. H. [[P. H. van der Kemp|Van der Kemp]] as Appendix 6 —").
3. A **dense run of linked entities**: the principal people, places, the key date, and the
   immediate event, all wikilinked, often in a single long sentence.
4. A **second sentence** stating why the document/person/event matters and pointing to the
   larger story it belongs to.

Example opening (abridged):
> **Sultan of Deli's letter to Penang of [[27 August]] [[1824]]** — printed by P. H.
> [[P. H. van der Kemp|Van der Kemp]] as Appendix 6 … — is the despatch by which the
> [[Sultan of Deli]] introduced himself to the newly appointed Governor of [[Penang]],
> [[Robert Fullerton]], …

## 5. Section patterns

Use `##` (H2) for every section. Common, reusable section names:

- **Context** / **Background** — the situation before the subject.
- A **narrative/identity section** named for the subject — e.g. *Identification with
  Alauddin Mahmud Shah Djohan*, *The Padri movement*, *The Sultan of Deli's report
  (August 1824)*, *Adoption of Said Akil*.
- **Connection with …** — ties to adjacent events/topics.
- **Significance** — nearly always the closing body section: what the subject establishes,
  undercuts, foreshadows, or proves in the larger argument and in Aceh's history.

Then the two fixed tail sections every article ends with:

- **See Also** — bulleted `[[wikilinks]]`.
- **Source** — italicized citation(s).

Use `###` (H3) only for genuine sub-points inside a long section; most articles stay at H2.

## 6. Quotation handling

- Quote the source where the exact words matter (a sultan's complaint, a treaty clause, an
  author's careful hedge). Keep quotations **short** and embed them in paraphrase that
  supplies context: who said it, to whom, when, why.
- Preserve original/archaic spelling inside the quotation and gloss it: *classy* explained
  as "a matelot"; "Pulo Puchee" glossed "(i.e. [[Sumatra]])".
- Attribute interpretive claims to their author: "Van der Kemp draws on Veth … to suggest
  that…", "Van der Kemp himself admits the equation only tentatively".
- Paraphrase everything that doesn't need the original wording. The entry is a synthesis,
  not a transcription.

## 7. Cross-article consistency (titles must match)

A link only resolves if it matches a real page title (or one of its `aliases`). So:
- Decide the canonical `title` of every entity once and link to it consistently.
- When you mention an entity that deserves its own page, link it with the title you would
  give that page. Keep a mental (or written) list of the titles you've coined so siblings
  stay consistent — e.g. always `[[Anglo-Dutch Treaty of London (1824)]]`, never sometimes
  `[[Treaty of London 1824]]`.
- Parenthetical disambiguators in titles are common and good:
  `[[Said Akil's Deli adventure (1824-1828)]]`, `[[Fullerton's minute on Acheh (21 March 1825)]]`.

## 8. Multiple sources

One entry may synthesize several sources. List each under `## Source`, one per line (or as
sub-bullets), each with the work title in *italics* plus full publication and locating
details. When a specific claim rests on a specific source, attribute it in the body
("Veth gives the dates 1781 … and 1795") so a reader can tell the sources apart.

## 9. Common mistakes to avoid

- **Empty links**: never `[[|Padries]]`. Point at a real title or drop the brackets.
- **Thin entries**: an AcehWiki article is comprehensive. If the source has ten facts about
  the subject, the entry has ten facts. Don't compress to a paragraph when the material
  supports four sections.
- **Unlinked proper nouns**: a name or place left as plain text is a broken connection.
- **Inventing detail**: if it isn't in a source, it isn't in the entry. Mark genuine
  uncertainty as uncertainty.
- **First-person / promotional tone**: keep the neutral encyclopedic register.
- **Forgetting the tail**: every article ends with `## See Also` and `## Source`.


## Built with

This wiki runs on [Quartz v5](https://quartz.jzhao.xyz/), a static site generator for publishing digital gardens and notes.
