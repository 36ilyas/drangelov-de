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

## Seiten

| Datei | Inhalt |
|---|---|
| [`index.html`](index.html) | One-Pager mit Hero, Praxis-Vorstellung, Team, Leistungen, Sprechzeiten, Notdienst, Karriere, Kontakt & Anfahrt |
| [`impressum.html`](impressum.html) | Pflicht-Impressum nach § 5 TMG (Vertretungsberechtigte, Berufsregelungen, Aufsichtsbehörde, Streitschlichtung, Haftung, Urheberrecht) |
| [`datenschutz.html`](datenschutz.html) | Datenschutzerklärung nach DSGVO inkl. Offenlegung der eingebetteten Drittdienste (Google Maps, Google Fonts, Tailwind CDN, Unsplash, GitHub Pages) |

## Sektionen der Startseite

1. Sticky Top-Nav (transparent → solid)
2. Hero (Split-Layout, Text + Bild)
3. Über die Praxis (Willkommen + 3 Vertrauens-Stichpunkte + Carousel der Praxisräume)
4. Team (3 Karten — erweiterbar)
5. Leistungen (6 Tiles)
6. Sprechzeiten + Notdienst
7. Karriere / Stellenangebot
8. Kontakt & Anfahrt (mit Google-Maps-Embed)
9. Footer (Sprechzeiten-Kurzform · Impressum · Datenschutz)

## Lokal anschauen

Datei direkt im Browser öffnen, oder einen lokalen Server starten:

```bash
python -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Stand & nächste Schritte

**Prototyp**, gebaut für eine Vorstellung bei der Praxis. Bewusste Platzhalter (im UI als `[grüne Markierung]` sichtbar):

- Notdienst-Telefonnummer auf der Startseite (`0180 0000000`)
- Fax-Nummer und USt-IdNr. im Impressum
- Bilder von Team und Praxis sind Unsplash-Platzhalter

Falls die Praxis Interesse hat:

- Platzhalter ersetzen (Praxis kennt die Werte)
- Echte Team- und Praxisfotos einsetzen
- Rechtstexte (Impressum / Datenschutz) durch einen Anwalt freigeben lassen
- Eventuell Click-to-Load-Lösung für das Google-Maps-Embed einbauen
- Migration auf Astro für saubere Component-Wiederverwendung
- Eigene Domain anstelle von `github.io`

## Credits

Visuelles Design erstellt mit [Claude Design](https://claude.ai/design). Das ursprüngliche Handoff-Bundle liegt zur Referenz in [`design-bundle/`](design-bundle/).
