# Website Praxis Dr. Emil Angelov

Statische Website der Zahnarztpraxis **Dr. Emil Angelov** in Mönchengladbach — reines HTML / CSS / JavaScript, kein Backend, keine Datenbank. Design: ruhig & modern (Salbei/Creme, Inter + Lora).

## Struktur

```
├─ public/   die auslieferbare Website (nur dieser Inhalt geht live)
│  ├─ index.html + Unterseiten: impressum · datenschutz · karriere · anamnese-ausfuellen
│  ├─ 404.html · robots.txt · sitemap.xml · llms.txt · .htaccess
│  └─ assets/   Bilder, PDF, Favicon, kompilierte tailwind.css
└─ build/    Tailwind-Quellen (tailwind.config.js, input.css) zum Erzeugen der CSS
```

## Styling — Tailwind (kompiliert, kein CDN)

Es werden nur die tatsächlich genutzten Klassen gebaut. Nach dem Einbau **neuer** Tailwind-Klassen die CSS neu kompilieren:

```bash
npx tailwindcss@3 -c build/tailwind.config.js -i build/input.css -o public/assets/tailwind.css --minify
```

## Lokal anschauen

```bash
python -m http.server 8000 --directory public
# dann http://localhost:8000 öffnen
```

## Deployment

GitHub Pages veröffentlicht den Inhalt von `public/` automatisch bei jedem Push auf `main` (Workflow `.github/workflows/pages.yml`). Produktive Ziel-Domain: **drangelov.de**.
