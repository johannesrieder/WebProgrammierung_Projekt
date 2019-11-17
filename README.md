Anwendung "Ernährungsplan"
===============================

Kurzbeschreibung
----------------
Unsere Browserapp "Ernährungsplan" ermittelt den individuellen Kalorienbedarf und bietet verschiedene Gerichte zu Frühstück, Mittag und Abendessen an. Der Benutzer kann sich  entsprechend seines Kalorienbedarfs ein Frühstück, Mittagessen und Abendessen zusammenstellen. Am Ende des Tages kann er seine Malzeiten durch einen Klick auf das jeweilige Bild auswählen und durch Betätigen des Buttons "Deine heutige Gerichtsauswahl abspeichern" im Verlauf ablegen.
Im Verlauf wird für jeden Tag die erreichte Kalorienanzahl angezeigt und durch ein Ampelsystem bewertet. Zum Beispiel bedeutet grün, dass die erreichte Kalorienanzahl in der Nähe des Kalorienbedarfs liegt.

Unsere Browserapp haben wir für den Google Chrome Webbrowser angepasst. Gelegentlich wurde beim Starten zunächst ein schwarzer Bildschirm angezeigt. Mit "STRG+Shift+Entf -> Bilder und Dateien im Cache löschen" lässt sich dies vermeiden.

Verwendete Technologien
-----------------------

Die App nutzt den Node Package Manager npm als Paketverwaltung. Auf diese
Weise werden der Application Bundler ParcelJS sowie eine Hand voll externe
Bibliotheken für die Anwendung installiert.

Folgende Entwicklungswerkzeuge kommen stattdessen zum Einsatz:

 * [Atom:](https://atom.io/) Spezieller Texteditor für Webentwickler und Programmierer
 * [git:](https://git-scm.com/") Versionsverwaltung zur gemeinsamen Arbeit am Quellcode
 * [npm:](https://nodejs.org/") Paketverwaltung zum automatischen Download abhängiger Bibliotheken
 * [Parcel:](https://parceljs.org/") Web Application Bundler und Entwicklungsserver

Zusätzlich werden folgende Bibliotheken genutzt:

 * [Navigo:](https://github.com/krasimir/navigo) Single Page Router zur Vereinfachung der Navigation innerhalb der App
 * [Dexie:](https://dexie.org) Datenbank zum Speichern der konsumierten Mahlzeiten und des Kalorienbedarfs
 * [Bootstrap:](https://getbootstrap.com/) Bootstrap ist ein freies Frontend-CSS-Framework

UI-Skizzen und Screenshots
--------------------------

<table style="max-width: 100%;">
    <tr>
        <td>
            <img src="Eingabe.png" style="display: block; width: 100%;" />
        </td>
        <td>
            <img src="Nahrungsauswahl.png" style="display: block; width: 100%;" />
        </td>
        <td>
            <img src="Verlauf.png" style="display: block; width: 100%;" />
        </td>
    </tr>
    <tr>
        <td>
            Eingabe
        </td>
        <td>
            Nahrungsauswahl
        </td>
        <td>
            Verlauf
        </td>
    </tr>
</table>

Gruppenmitglieder
-----------------
Marius Bauer, Julian Jülg, Johannes Rieder
