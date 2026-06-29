---
name: acehwiki-history-entry
description: >-
  Write comprehensive, deeply interlinked encyclopedia entries for Aceh Wiki History
  (the Quartz v5 wiki at kbpro8.github.io/acehwiki). Use this skill WHENEVER the user
  wants to create, draft, expand, or rewrite a wiki/encyclopedia article about Acehnese
  history — any person, place, event, organization, treaty, document, or date connected
  to Aceh's past — especially when working from historical sources (e.g. Snouck Hurgronje's
  *The Achehnese*, Van der Kemp, colonial correspondence, treaties, gazetteers). Trigger
  on phrases like "write an AcehWiki entry," "make a wiki article about," "buatkan artikel
  wiki," "tambah entri tentang," "encyclopedia entry on," or any request to turn a source
  text into a wiki page. Produces an Obsidian/Quartz-style Markdown file with YAML
  frontmatter, dense inline [[wikilinks]], thematic sections, and a sources block.
---

# AcehWiki History Entry Writer

Aceh Wiki History is an AI-assisted encyclopedia of Acehnese history built on **Quartz v5**
(Obsidian-flavored Markdown, hosted on GitHub Pages). Every article is a single `.md` file
in the `content/` tree. The house style is **scholarly, exhaustive, and densely
cross-linked**: a reader should be able to start on any page and walk the entire web of
Aceh's history through `[[wikilinks]]`.

Your job with this skill is to take one or more source texts about a subject and produce a
single, comprehensive entry that **absorbs every usable fact from the sources**, links every
person, place, organization, event, and date, and ends with proper sources.

## Golden rules

1. **Be exhaustive.** Mine the source(s) for every concrete fact about the subject — names,
   dates, places, titles, quotations, relationships, causes, consequences, disputes,
   uncertainties. Do not summarize loosely; an AcehWiki entry is a thorough synthesis, not
   an abstract. When sources give detail, the entry gives detail.
2. **Link relentlessly.** Wrap every person, place, organization, event, treaty/document,
   and date in `[[wikilinks]]` (see [Linking conventions](#linking-conventions)). A good
   entry has dozens of links. Links are how the wiki connects — an unlinked proper noun is a
   missed connection.
3. **Stay faithful to sources.** Never invent facts, dates, or quotations. If the source is
   tentative or self-contradictory, say so in the entry ("Van der Kemp admits the equation
   only tentatively…"). Attribute interpretations to the author who made them.
4. **Neutral encyclopedic register.** Third person, past tense, measured tone. No marketing,
   no first person, no editorializing beyond what the sources support.
5. **One file = one subject.** Each entry is self-contained and ends with `## See Also` and
   `## Source`.

## Output format

Always produce a single Markdown file using **exactly** this structure. Read
`reference/conventions.md` for the annotated rationale, and `reference/example-entry.md` for
a full worked example to imitate.

```markdown
---
title: <Canonical Article Title>
aliases: [<Alt name 1>, <Alt spelling 2>, <Short form 3>]
tags: [<type>, <descriptor>, <descriptor>]
---

**<Article Title restated in bold>** was/is <dense defining sentence that names the
subject, situates it in time and place, and immediately links the key [[people]],
[[places]], [[events]] and [[1786|dates]] involved>. <One or two more sentences of lead
that frame why the subject matters and tie it to the broader story.>

## <Thematic section 1>

<Detailed prose. Every proper noun linked. Quotations from the source set in
quotation marks, with surrounding paraphrase. Foreign-language terms in *italics*.>

## <Thematic section 2>

<...>

## Significance

<Why the subject matters in the larger history of [[Acheh]] — what it establishes,
undercuts, foreshadows, or connects. This section is almost always present.>

## See Also

- [[Related article 1]]
- [[Related article 2]]
- [[Related article 3]]

## Source

*<Full bibliographic citation, italicized>*. <Publication details, pages, repository/shelfmark.>
```

If the entry draws on more than one source, list each as its own line (or sub-bullet) under
`## Source`.

## Frontmatter

Three keys, in this order:

- **`title`** — the canonical display name. Use the most recognizable scholarly form
  (e.g. `Sultan Ziemul Abudeen`, `Padri War on Sumatra's East Coast`,
  `Sultan of Deli's letter to Penang`). This must match how other articles will link to it.
- **`aliases`** — a bracketed list of alternative names, spellings, transliterations, and
  short forms a reader (or another article) might use. Acehnese/Malay/Dutch history is full
  of spelling variants — capture them generously (e.g. `Alauddin Mahmud Shah Djohan`,
  `Alaoe'd-din Mahmoed Shah Djohan`). For documents, include appendix/exhibit labels
  (e.g. `Appendix 6`, `Bijlage I`).
- **`tags`** — a bracketed list. **The first tag is the entity type**; the rest are
  descriptors. Pick the type and 2–4 descriptors:

  | First tag (type) | Use for | Example full tag set |
  |---|---|---|
  | `person` | individuals | `[person, sultan, achehnese]` |
  | `event` | wars, missions, incidents, correspondence | `[event, war, malay, religious, colonial]` |
  | `place` | regions, towns, rivers, polities-as-territory | `[place, sultanate, sumatra]` |
  | `organization` | companies, councils, commissions, institutions | `[organization, company, colonial]` |
  | `document` | letters, treaties, minutes, reports | `[document, treaty, diplomacy, colonial]` |
  | `concept` | doctrines, disputes, legal questions | `[concept, sovereignty, colonial]` |

  Add era/theme descriptors that aid filtering: `colonial`, `precolonial`, `diplomacy`,
  `dutch`, `british`, `religious`, `trade`, `military`, `succession`, etc.

## Linking conventions

This is the heart of the house style. AcehWiki uses **Obsidian/Quartz wikilink syntax**.

### What to link

Link the **first and any significant later mention** of every:

- **Person** — `[[Warren Hastings]]`, `[[Pieter Johannes Veth]]`
- **Place** — `[[Acheh]]`, `[[Tringano]]`, `[[Penang]]`, `[[Sumatra]]`
- **Organization** — `[[British East India Company]]`, councils, commissions, firms
- **Event** — `[[Captain Canning's mission to Acheh]]`, `[[Aceh War]]`
- **Document / treaty** — `[[Anglo-Dutch Treaty of London (1824)]]`
- **Date** — every year and every calendar date (see below)

### Piped links (display text ≠ page name)

Use `[[Page Name|display text]]` when the sentence needs different wording than the page
title:

- `[[Robert Fullerton|Fullerton]]` — link to the full-name page, show the short form
- `[[P. H. van der Kemp|Van der Kemp]]`
- `[[Said Akil's Deli adventure (1824-1828)|Deli affair]]` — link a long page title behind a
  natural phrase

Only pipe when the display differs. If the visible text already equals the page name, plain
`[[Page Name]]` is enough — don't write `[[Fullerton|Fullerton]]`.

### Dates — the distinctive AcehWiki pattern

- **Every year** is its own link: `[[1786]]`, `[[1824]]`.
- **Year ranges** link each endpoint: `[[1826]]–[[1828]]`, `c. [[1824]]–[[1828]]`.
- **A specific calendar date** splits into a day-month link and a year link:
  `[[27 August]] [[1824]]`, `[[7 November]] [[1786]]`.
- Centuries and decades stay plain text ("the late eighteenth century", "the early 1820s").

### Don'ts

- **Never** leave an empty-target link like `[[|Padries]]`. Either point it at a real page
  (`[[Padri War on Sumatra's East Coast|Padries]]`) or write the word plainly.
- Don't link generic common nouns ("the letter", "muskets", "the governor" with no name).
- Don't over-pipe; keep display text natural.

## Body composition

1. **Lead paragraph.** Open with the title in **bold**, then a single dense sentence that
   defines the subject, fixes it in time and place, and links the principal people, places,
   events, and dates. Follow with one or two sentences establishing significance and the
   source frame ("identified in Van der Kemp's documentation as…"). The lead should let a
   reader grasp the whole subject before any section.
2. **Thematic `##` sections.** Break the body into logical sections — typical ones include
   *Context*, *Identification*, an event-specific narrative section, *Connection with …*,
   and almost always **Significance** at the end of the body. Name sections for their
   content. Order them so the article reads as a coherent account.
3. **Quotations.** Reproduce short, telling quotations from the source inside quotation
   marks, always wrapped in surrounding paraphrase that gives context. Keep each quotation
   only as long as needed to carry its point; paraphrase the rest. Preserve original archaic
   spelling inside quotes ("classy from Java", "Pulo Puchee") and gloss it where helpful.
4. **Foreign terms** (Dutch, Malay, Acehnese, Arabic) in *italics*, with a translation or
   gloss on first use (*classy* "a matelot").
5. **Uncertainty and dispute.** When sources disagree or hedge, surface it explicitly and
   attribute it. Distinguishing what a source *asserts* from what it *suggests* is part of
   the house style.

## See Also

A bulleted list of `[[wikilinks]]` to the most closely related articles — the people,
places, events, documents, and parallel topics a reader would jump to next. Include the
principal entities already linked in the body plus sibling/parent topics. 5–12 links is
typical.

## Source

Full bibliographic citation(s), the work title in *italics*, followed by publication
details, page range, and (for archival items) the holding library and shelfmark. One entry
can cite multiple sources — give each its own line. Example:

```markdown
## Source

*The Achehnese*, by C. Snouck Hurgronje, trans. A. W. S. O'Sullivan (Leiden: E. J. Brill;
London: Luzac & Co., 1906), Vol. I, pp. 1-25.

*Raffles' Atjeh-overeenkomst van 1819*, by P. H. van der Kemp, in *Bijdragen van het
Koninklijk Instituut voor Taal-, Land- en Volkenkunde van Nederlandsch-Indië*, 6e Volgr.,
Deel VII (1900), pp. 159-239. Universiteitsbibliotheek Vrije Universiteit, LS.08781.
```

## File naming and placement

- **Filename**: lowercase the title, replace spaces with hyphens, keep apostrophes, add
  `.md`. `Sultan of Deli's letter to Penang` → `sultan-of-deli's-letter-to-penang.md`.
- **Folder**: place under the matching section folder in `content/` when the repo uses one
  (e.g. `content/events/…`). If you are unsure which folder, ask the user or default to the
  entity type's folder. The wikilink target is the **title**, not the filename — Quartz
  resolves `[[Sultan of Deli's letter to Penang]]` regardless of folder.

## Workflow

1. **Gather sources.** Read every uploaded/linked source about the subject fully before
   writing. If a source file is attached but not yet read, read it. If the user names a
   source you don't have, ask for it rather than inventing content.
2. **Extract.** Pull out every fact, name, date, quotation, and relationship tied to the
   subject. Note where the source is tentative.
3. **Decide title, aliases, tags.** Pick the canonical title and gather spelling variants.
4. **Draft the entry** following the template: bold lead → thematic sections → Significance
   → See Also → Source. Link as you write.
5. **Link pass.** Re-read and ensure every person, place, org, event, document, and date is
   wikilinked, dates use the split pattern, and there are no empty `[[|x]]` links.
6. **Deliver** the finished `.md` file. Save it to the outputs directory and present it so
   the user can drop it straight into `content/`.

## Reference files

- `reference/conventions.md` — annotated breakdown of every convention with rationale and
  edge cases. Read when you need to resolve a formatting question.
- `reference/example-entry.md` — a complete, real AcehWiki entry to imitate for structure,
  density, linking, and tone.
- `reference/template.md` — a blank skeleton to copy.
