# Ley Lotta — Website (fertig zum Hochladen)

Diese Ordner-Inhalte sind die komplette Website: sechs Seiten, ein Stylesheet, alle Fotos.
Keine Datenbank, kein Baukasten — reine HTML-Dateien, die überall laufen.

```
index.html        Startseite
about.html        About Ley Lotta
circus.html       Circus Performance
music.html        Music
costumes.html     Costumes
contact.html      Contact (Formular → E-Mail an info@leylotta.com)
style.css         das komplette Design
img/              52 Fotos (auf 1500 px verkleinert, web-optimiert)
CNAME             sagt GitHub Pages: diese Seite läuft auf www.leylotta.com
.nojekyll         schaltet GitHubs Blog-Verarbeitung ab (braucht man hier nicht)
```

## Auf GitHub Pages veröffentlichen (kostenlos)

1. **Konto anlegen** auf github.com (falls noch keins da ist) und einloggen.
2. **Neues Repository** erstellen: Name `leylotta-website`, Sichtbarkeit **Public**,
   dann auf *Create repository*.
3. **Dateien hochladen**: im leeren Repository auf *uploading an existing file* klicken
   und den **Inhalt** dieses Ordners hineinziehen (alle Dateien und den Ordner `img`) →
   *Commit changes*.
4. **Pages einschalten**: *Settings* → *Pages* → Source: **Deploy from a branch**,
   Branch: `main`, Ordner: `/ (root)` → *Save*.
   Nach ein bis zwei Minuten ist die Seite unter `https://<benutzername>.github.io/leylotta-website/` live.

## Eigene Domain www.leylotta.com

1. In *Settings* → *Pages* → *Custom domain* `www.leylotta.com` eintragen und speichern
   (die Datei `CNAME` erledigt das auch automatisch beim Upload).
2. Beim Domain-Anbieter (aktuell Squarespace) einen **CNAME-Eintrag** setzen:
   `www` → `<benutzername>.github.io`
3. Wenn `leylotta.com` ohne „www" ebenfalls funktionieren soll, zusätzlich vier
   **A-Records** für `@` auf: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`
4. Zurück in *Settings* → *Pages* **Enforce HTTPS** aktivieren, sobald es anwählbar ist
   (kann eine Stunde dauern, bis das Zertifikat ausgestellt ist).

## Kontaktformular

Das Formular öffnet beim Abschicken das E-Mail-Programm mit einer vorbereiteten Nachricht
an info@leylotta.com. Wer ein echtes Formular ohne E-Mail-Programm will, kann kostenlos
einen Dienst wie Formspree davorschalten — dann wird nur eine Zeile in `contact.html`
getauscht.

## Deutsche Fassung

Für DE/EN kommen sechs weitere Dateien dazu (`index-de.html` usw.) und der Schalter oben
rechts im Menü wird aktiv. Das Design bleibt unverändert.

## Änderungen

Texte stehen direkt in den HTML-Dateien, alle Farben, Abstände und Schriftgrößen ganz oben
in `style.css` (Block `:root`). Fotos liegen in `img/` — gleicher Dateiname, neues Bild,
fertig.
