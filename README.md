Anwendung "Ernährungsplan"
===============================

Kurzbeschreibung
----------------


Verwendete Technologien
-----------------------

Die App nutzt den Node Package Manager npm als Paketverwaltung. Auf diese
Weise werden der Application Bundler ParcelJS sowie eine Hand voll externe
Bibliotheken für die Anwendung installiert. Jedoch wird kein übergreifendes
Framework wie Angular oder React verwendet, da diese für eine allgemeine
Einführung zu speziell sind und viele wesentliche Details verbergen.

Folgende Entwicklungswerkzeuge kommen stattdessen zum Einsatz:

 * [Atom:](https://atom.io/) Spezieller Texteditor für Webentwickler und Programmierer
 * [git:](https://git-scm.com/") Versionsverwaltung zur gemeinsamen Arbeit am Quellcode
 * [npm:](https://nodejs.org/") Paketverwaltung zum automatischen Download abhängiger Bibliotheken
 * [Parcel:](https://parceljs.org/") Web Application Bundler und Entwicklungsserver

Zusätzlich werden folgende Bibliotheken genutzt:

 * [Navigo:](https://github.com/krasimir/navigo) Single Page Router zur Vereinfachung der Navigation innerhalb der App
 * [PouchDB:](https://pouchdb.com/") Clientseitige NoSQL-Datenbank zum Speichern der Songtexte
 * [lyric-get:](https://github.com/rhnvrm/lyric-api") Kleine Bibliothek zur Suche von Songtexten im Internet
 * [Quill:](https://quilljs.com/") WYSIWYG-Editor zum Nachbearbeiten der Songtexte

UI-Skizzen und Screenshots
--------------------------

<table style="max-width: 100%;">
    <tr>
        <td>
            <img src="eingabe.png" style="display: block; width: 100%;" />
        </td>
        <td>
            <img src="nahrungsauswahl.png" style="display: block; width: 100%;" />
        </td>
        <td>
            <img src="verlauf.png" style="display: block; width: 100%;" />
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
