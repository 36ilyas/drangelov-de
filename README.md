# Praxis Dr. Emil Angelov — Website-Entwürfe

Spekulative Redesign-Entwürfe für die Webseite der Zahnarztpraxis [Dr. Emil Angelov](https://drangelov.de) in Mönchengladbach. Drei vollständige Design-Varianten zum Vergleichen und Auswählen.

**Live-Übersicht:** https://36ilyas.github.io/drangelov-de/

## Die drei Entwürfe

| | Entwurf | Stil | Live |
|---|---|---|---|
| 1 | [`entwurf-1/`](entwurf-1/) | **Sanft & modern** — warmes Off-White, Salbeigrün, weiche Karten, Reveal-Animationen (Inter + Fraunces, Tailwind) | [ansehen](https://36ilyas.github.io/drangelov-de/entwurf-1/) |
| 2 | [`entwurf-2/`](entwurf-2/) | **Klassisch & vertrauensvoll** — Serifen-Headlines, Info-Balken oben, heller Hero mit Praxisbild (Lora + Source Sans 3) | [ansehen](https://36ilyas.github.io/drangelov-de/entwurf-2/) |
| 3 | [`entwurf-3/`](entwurf-3/) | **Premium & ruhig** — tiefes Tannengrün + Creme, vollflächiger dunkler Hero, feine Serife (Cormorant Garamond + Jost) | [ansehen](https://36ilyas.github.io/drangelov-de/entwurf-3/) |

Die Startseite (`index.html`) ist eine **Übersichtsseite**, die alle drei Entwürfe nebeneinander vorstellt und verlinkt — ein Link genügt, um die Praxis durch alle Varianten zu führen.

## Struktur

```
drangelov-de/
├─ index.html        Übersichtsseite (Gateway zu allen drei Entwürfen)
├─ .nojekyll         deaktiviert Jekyll-Verarbeitung auf GitHub Pages
├─ entwurf-1/        index · impressum · datenschutz   (Sanft & modern)
├─ entwurf-2/        index · impressum · datenschutz · styles.css   (Klassisch)
└─ entwurf-3/        index · impressum · datenschutz · styles.css   (Premium)
```

Jeder Entwurf enthält dieselben Inhalte (Leistungen, Team, Sprechzeiten, Notdienst, Kontakt) sowie eine eigene Impressum- und Datenschutzseite. Alle Seiten sind eigenständig — kein Build-Step nötig, einfach im Browser öffnen.

Gemeinsame inhaltliche Fakten über alle Entwürfe hinweg:

- Telefon als Haupt-CTA (`tel:`), E-Mail als `mailto:`
- Exakte Sprechzeiten von drangelov.de inkl. Mittagspausen
- Echte Notdienstnummer: 0180-5 98 67 00

## Lokal anschauen

Datei direkt im Browser öffnen, oder einen lokalen Server starten:

```bash
python -m http.server 8000
# dann http://localhost:8000 öffnen (zeigt die Übersicht)
```

## Stand & nächste Schritte

**Prototypen**, gebaut zur Vorstellung bei der Praxis. Bewusste Platzhalter:

- Fotos von Team und Praxis sind Beispielbilder (Unsplash)
- Karten-/Anfahrtsbereiche sind teils Platzhalter für eine Google-Maps-Einbindung
- Fax-Nummer und USt-IdNr. im Impressum (Entwurf 1)

Sobald die Praxis einen Favoriten gewählt hat:

- Echte Team- und Praxisfotos einsetzen
- Google-Maps-Einbindung (ggf. mit Click-to-Load) ergänzen
- Rechtstexte (Impressum / Datenschutz) anwaltlich prüfen lassen
- Eigene Domain anstelle von `github.io`
- Nicht gewählte Entwürfe archivieren oder entfernen

## Credits

Visuelle Designs erstellt mit [Claude Design](https://claude.ai/design). Die ursprünglichen Handoff-Bundles liegen lokal als Referenz vor (nicht Teil des veröffentlichten Repos).
