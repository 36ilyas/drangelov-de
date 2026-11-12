# CLAUDE.md

Projektkontext für Claude Code. Wird bei jedem Sitzungsstart automatisch gelesen.

## Projekt
Statische Website der **Zahnarztpraxis Dr. Emil Angelov** (Mönchengladbach).
Reines HTML / CSS / JavaScript — kein Backend, keine Datenbank.
Design: ruhig & modern, Farben sage/cream (Hauptgrün `sage-500` = `#6F8158`), Schriften Inter + Lora.

## Ordner
- **`public/`** — **die Website, 1:1 wie live.** Nur dieser Inhalt kommt auf den Webserver.
  - `index.html` + Unterseiten `impressum`, `datenschutz`, `karriere`, `anamnese-ausfuellen`
  - je Seite eine `…-en.html` (Quelle für den DE/EN-Umschalter)
  - `404.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, `.htaccess`, Weiterleitungs-Stubs
  - `assets/` — Bilder, PDF, Favicon und die kompilierte `tailwind.css`
- **`build/`** — Tailwind-Quellen (`tailwind.config.js`, `input.css`) zum Erzeugen der CSS.
- Lokal und gitignored (nie committen, Repo ist öffentlich):
  - `projekt-ressourcen/` — Praxis-Dokumente (`Angelov/`: Angebote, Rechnungen, Übersichten, Visitenkarten), `entwuerfe/`, `fotos/`, `schulung/`
  - `alte-website/` — Sicherung der alten Praxis-Website (`oldpage/` + ZIP)
  - `persoenlich/` — Privates

## Styling: Tailwind ist KOMPILIERT (kein CDN)
Es werden nur die tatsächlich genutzten Klassen in `public/assets/tailwind.css` gebaut.
⚠️ Nach dem Einbauen **neuer** Tailwind-Klassen die CSS neu kompilieren und den Cache-Bust `tailwind.css?v=N` in allen HTML-Dateien hochzählen:
```
npx tailwindcss@3 -c build/tailwind.config.js -i build/input.css -o public/assets/tailwind.css --minify
```

## Regeln für Änderungen
- **DE/EN strukturgleich halten:** Der Sprachumschalter läuft die DE- und EN-Seite parallel ab. Jede Änderung an `x.html` genauso in `x-en.html` machen — nur Texte dürfen sich unterscheiden.
- **Relative Pfade** (`assets/…`), keine führenden `/assets`-Pfade.
- Geänderte Bilder/CSS bekommen einen neuen `?v=N`, damit Browser nicht die alte Version zeigen.

## Veröffentlichen
- **Vorschau:** `git push origin main` → GitHub Action veröffentlicht `public/` auf GitHub Pages.
- **Live (drangelov.de):** lädt der Nutzer selbst per FileZilla aus `public/` hoch. Der Server ignoriert `.htaccess` (Weiterleitungen daher als statische Stub-Dateien).

## Produktiv-Domain
Eingestellt auf **drangelov.de** (in `canonical`, den Open-Graph-Tags, `sitemap.xml`, dem JSON-LD-Schema und im noindex-Schutzscript).
Ein kleines Script setzt automatisch `noindex` auf **allen Domains außer der Produktiv-Domain** — Test-/Vorschau-Domains landen also nicht bei Google.

## Regeln
- **Niemals** Schlüssel, Passwörter oder private Daten ins Projekt committen oder hochladen.
- Rechtstexte (Impressum/Datenschutz) vor Änderungen anwaltlich prüfen lassen.
- Maschinen- oder personenspezifische Werte gehören in `CLAUDE.local.md` (lokal, gitignored) — nicht in diese Datei.
