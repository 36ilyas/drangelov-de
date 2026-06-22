# CLAUDE.md

Projektkontext für Claude Code. Wird bei jedem Sitzungsstart automatisch gelesen.

## Projekt
Statische Website der **Zahnarztpraxis Dr. Emil Angelov** (Mönchengladbach).
Reines HTML / CSS / JavaScript — kein Backend, keine Datenbank.
Design: ruhig & modern, Farben sage/cream, Schriften Inter + Fraunces.

## Verzeichnisstruktur
- **`public/`** — die auslieferbare Website. **Nur dieser Inhalt** kommt auf den Webserver.
  - `index.html` + Unterseiten: `impressum.html`, `datenschutz.html`, `karriere.html`, `anamnese-ausfuellen.html`
  - `404.html` (Fehlerseite), `robots.txt`, `sitemap.xml`, `llms.txt`, `.htaccess`
  - `assets/` — Bilder, PDF, Favicon und die kompilierte `tailwind.css`
- **`build/`** — Tailwind-Quellen (`tailwind.config.js`, `input.css`) zum Erzeugen der CSS.
- Alles **außerhalb** von `public/` wird **nicht** veröffentlicht (z. B. `build/`, Notizen, Schlüssel).

## Styling: Tailwind ist KOMPILIERT (kein CDN)
Es werden nur die tatsächlich genutzten Klassen in `public/assets/tailwind.css` gebaut.
⚠️ Nach dem Einbauen **neuer** Tailwind-Klassen die CSS neu kompilieren:
```
npx tailwindcss@3 -c build/tailwind.config.js -i build/input.css -o public/assets/tailwind.css --minify
```

## Deploy
Veröffentlicht wird per **SFTP/SSH** — es wird **nur der Inhalt von `public/`** ins Web-Root des Hosters geladen.

**Eigenes Deploy-Ziel hier eintragen** (Daten vom Webhoster):

| Feld | Wert |
|---|---|
| Host | `<HOST>` |
| Benutzer | `<BENUTZER>` |
| Web-Root | `<PFAD>`  (z. B. `/home/www/deine-domain.de`) |
| SSH-Schlüssel | `<PFAD-ZUM-PRIVATEN-SCHLUESSEL>`  (liegt lokal, **nie** im Projekt) |

Deploy-Befehl (erst kompilieren, dann hochladen):
```
npx tailwindcss@3 -c build/tailwind.config.js -i build/input.css -o public/assets/tailwind.css --minify
tar czf - -C public . | ssh -i <SSH-SCHLUESSEL> -p 22 <BENUTZER>@<HOST> "tar xzf - -C <PFAD>"
```

## Produktiv-Domain
Eingestellt auf **drangelov.de** (in `canonical`, den Open-Graph-Tags, `sitemap.xml`, dem JSON-LD-Schema und im noindex-Schutzscript).
Ein kleines Script setzt automatisch `noindex` auf **allen Domains außer der Produktiv-Domain** — Test-/Vorschau-Domains landen also nicht bei Google. Bei einem Domainwechsel die Produktiv-Domain an diesen Stellen anpassen.

## Regeln
- **Niemals** SSH-Schlüssel, Passwörter oder private Rohdaten ins Projekt committen oder hochladen.
- Rechtstexte (Impressum/Datenschutz) vor dem Live-Gang anwaltlich prüfen lassen.
- Maschinen- oder personenspezifische Werte gehören in `CLAUDE.local.md` (lokal, nicht weitergeben) — nicht in diese Datei.
