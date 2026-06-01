# drangelov.de Redesign

_Started 2026-05-31 00:05 UTC_

---

## User

Die Website aktuell ist bei: drangelov.de

## Assistant

_[tool: questions_v2]_

The brief is wonderfully detailed — content, sections, tone and tech stack are all locked. Before I build, let me confirm just the few genuinely open aesthetic decisions so the result lands right with both the 55-year-old dentist and the 25-year-old patient.

## User

Questions answered:
- accent_color: 1
- serif_accent: Decide for me
- hero_layout: 0
- photos: Decide for me
- variations: Eine fertige, polierte Seite
- interactivity: Sanfte Reveal-Animationen beim Scrollen, Sticky-Nav transparent→solid, Mobile Burger-Menü, Bildkarussell-Platzhalter in Team/Praxis, Smooth-Scroll zu Sektionen

## Assistant

_[tool: update_todos]_

Perfect — sage green, split hero, polished single page, warm Unsplash imagery with graceful fallbacks, and the full interaction set. Let me lock the system and build.

**Design system:**
- **Color:** warm off-white `#F7F5F0` ground, warm anthracite `#2C2A25` text, single sage accent `#7E8E6E` — calm, clearly a dental practice, no cliché light-blue.
- **Type:** Inter for body/UI (17px base, high contrast, 60+ friendly) + Fraunces as a warm serif accent on headings.
- **Feel:** generous whitespace, soft cards, subtle reveal-on-scroll, transparent→solid sticky nav, big tel: CTA as the primary conversion path.Building the full page now.

_[tool: write_file]_

_[tool: update_todos]_

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

Fertig — `index.html` ist live.

**Was drin ist:**
- **One-Pager, komplett deutsch**, alle 9 Pflicht-Sektionen in Reihenfolge, mit `<!-- SECTION: … -->`-Kommentaren für die spätere Astro-Aufteilung (Anchor-Sections = spätere Routes).
- **Salbei-Grün** als einziger Akzent auf warmem Off-White, Anthrazit-Text. Inter (17px Basis) + Fraunces-Serif-Akzente.
- **Telefon als Haupt-CTA** überall als `tel:`-Link, E-Mails als `mailto:`.
- Sticky-Nav transparent→solid, großes Burger-Menü (44px+ Touch-Targets), sanfte Reveal-Animationen (respektiert `prefers-reduced-motion`), Smooth-Scroll, Praxis-Karussell.
- Echtes Google-Maps-Embed + „Route planen"-Button.
- Unsplash-Fotos mit **eleganten warmen Platzhaltern als Fallback** — bricht nie, falls ein Bild nicht lädt.

**Erweiterbar wie gewünscht:** Team-Karten und das Karussell haben bewusst gleichförmige Struktur — weitere Mitglieder/Innenraum-Slides lassen sich 1:1 einfügen. Bild-Slots tragen jederzeit echte Fotos.

**Nächste Schritte, falls du willst:** echte Team- & Praxisfotos einsetzen, die Notdienst-Nummer ersetzen, Impressum/Datenschutz verlinken — oder ich baue die Akzentfarbe/Schrift als umschaltbare Tweaks ein, damit du Salbei vs. Petrol vs. Sand direkt vergleichen kannst.

