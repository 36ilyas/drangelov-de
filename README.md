# Praxis Dr. Emil Angelov — Website-Redesign

Spekulativer Redesign-Prototyp für die Webseite der Zahnarztpraxis [Dr. Emil Angelov](https://drangelov.de) in Mönchengladbach.

**Live-Preview:** https://36ilyas.github.io/drangelov-de/

## Was ist das?

Ein moderner One-Pager als Ersatz für die bestehende Webseite (ursprünglich von ~2011). Komplett eigenständig — kein Build-Step nötig, einfach `index.html` im Browser öffnen.

- **Tailwind CSS** (via CDN)
- **Inter** + **Fraunces** (Google Fonts)
- **Vanilla JS** für Sticky-Nav, Mobile-Menü, Reveal-on-Scroll, Carousel
- Design-System: Salbei-Grün-Akzent auf warmem Off-White
- 17 px Basis-Schriftgröße, lesefreundlich auch für ältere Patient:innen
- Telefon als Primary-CTA (`tel:`-Links), Google-Maps-Embed für Anfahrt
- `prefers-reduced-motion`-respektiert

## Sektionen

1. Sticky Top-Nav (transparent → solid)
2. Hero (Split-Layout, Text + Bild)
3. Über die Praxis (Willkommen + 3 Vertrauens-Stichpunkte + Carousel der Praxisräume)
4. Team (3 Karten — erweiterbar)
5. Leistungen (6 Tiles)
6. Sprechzeiten + Notdienst
7. Karriere / Stellenangebot
8. Kontakt & Anfahrt (mit Google-Maps-Embed)
9. Footer

## Lokal anschauen

Datei direkt im Browser öffnen, oder einen lokalen Server starten:

```bash
python -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Stand & nächste Schritte

**Prototyp**, gebaut für eine Vorstellung bei der Praxis. Bewusste Platzhalter:

- Notdienst-Telefonnummer (`0180 0000000`) → echte Nummer einsetzen
- Impressum / Datenschutz → Links füllen
- Bilder sind Unsplash-Platzhalter → später echte Praxis-/Team-Fotos

Falls die Praxis Interesse hat:

- Echte Fotos einsetzen
- Impressum & Datenschutz vervollständigen
- Eventuell Migration auf Astro für saubere Multi-Page-Struktur
- Eigene Domain anstelle von `github.io`

## Credits

Visuelles Design erstellt mit [Claude Design](https://claude.ai/design). Das ursprüngliche Handoff-Bundle liegt zur Referenz in [`design-bundle/`](design-bundle/).
