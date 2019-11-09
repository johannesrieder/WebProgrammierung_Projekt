"use strict";

import stylesheet from "./app.css";
import Navigo from "navigo/lib/navigo.js";
import Eingabe from "./eingabe/eingabe.js";
import Nahrungsauswahl from "./nahrungsauswahl/nahrungsauswahl.js";
import Verlauf from "./verlauf/verlauf.js";
import eingabeFormular from "./eingabe/eingabeFormular.html";
import nahrungsauswahlformular from "./nahrungsauswahl/nahrungsauswahlformular.html";
import verlaufformular from "./verlauf/verlaufformular.html";
    /**
     * Hauptklasse der Anwendung. Kümmert sich darum, die Anwendung auszuführen
     * und die angeforderten Bildschirmseiten anzuzeigen.
     */
	class App {
        /**
         * Konstruktor.
         */
        constructor() {
        this._title = "Ernährungsplan";
        this._currentView = null;

        this._router = new Navigo(null, true);
        this._currentUrl = "";
		this._navAborted = false;


        this._router.on({
            "eingabe" : () => this.showEingabe(),
            "nahrungsauswahl":     () => this.showNahrungsauswahl(),
            "verlauf": () => this.showVerlauf(),
            "*": () => this.showEingabe(),
        });

        this._router.hooks({
         after: (params) => {
                if (!this._navAborted) {
                    // Navigation durchführen, daher die neue URL merken
                    this._currentUrl = this._router.lastRouteResolved().url;
                } else {
                    // Navigation abbrechen, daher die URL in der Adresszeile
                    // auf den alten Wert der bisherigen View zurücksetzen
                    this._router.pause(true);
                    this._router.navigate(this._currentUrl);
                    this._router.pause(false);
                    this._navAborted = false;
                }
            }
        });
    }
        /**
         * Ab hier beginnt die Anwendung zu laufen.
         */
        start() {
            this._router.resolve();
        }

		showNahrungsauswahl(){
            document.getElementById("content").innerHTML = "";
            let newDiv = document.createElement("div");
            newDiv.innerHTML = nahrungsauswahlformular.trim();
            document.getElementById("content").appendChild(newDiv);
		}

        showEingabe() {
            document.getElementById("content").innerHTML = "";
            let newDiv = document.createElement("div");
            newDiv.innerHTML = eingabeFormular.trim();
            document.getElementById("content").appendChild(newDiv);
            new Eingabe();
        }

        showVerlauf(){
            document.getElementById("content").innerHTML = "";
            let newDiv = document.createElement("div");
            newDiv.innerHTML = verlaufformular.trim();
            document.getElementById("content").appendChild(newDiv);
						new Verlauf();
        }

       async _switchVisibleView(view) {
        // Callback, mit dem die noch sichtbare View den Seitenwechsel zu einem
        // späteren Zeitpunkt fortführen kann, wenn sie in der Methode onLeave()
        // false zurückliefert. Dadurch erhält sie die Möglichkeit, den Anwender
        // zum Beispiel zu fragen, ob er ungesicherte Daten speichern will,
        // bevor er die Seite verlässt.
        let newUrl = this._router.lastRouteResolved().url;
        let goon = () => {
            // ?goon an die URL hängen, weil der Router sonst nicht weiternavigiert
            console.log("goon")
            this._router.navigate(newUrl + "?goon");
        }

        // Aktuelle View fragen, ob eine neue View aufgerufen werden darf
        if (this._currentView) {
            let goonAllowed = await this._currentView.onLeave(goon);

            if (!goonAllowed) {
                this._navAborted = true;
                return false;
            }
        }

        // Alles klar, aktuelle View nun wechseln
        document.title = `${this._title} – ${view.title}`;

        this._currentView = view;
        this._switchVisibleContent(await view.onShow());
        return true;
    }

    _switchVisibleContent(content) {
        // <header> und <main> des HTML-Grundgerüsts ermitteln
        let app = document.querySelector("#app");
        let header = document.querySelector("#app > header");
        let main = document.querySelector("#app > main");

        // Zuvor angezeigte Inhalte entfernen
        // Bei der Topbar nur die untere Zeile, im Hauptbereich alles!
        app.className = "";
        // header.querySelectorAll(".bottom").forEach(e => e.parentNode.removeChild(e));
        main.innerHTML = "";

        // CSS-Klasse übernehmen, um die viewspezifischen CSS-Regeln zu aktivieren
        if (content && content.className) {
            app.className = content.className;
        }

        // Neue Inhalte des Hauptbereichs einfügen
        if (content && content.main) {
            content.main.forEach(element => {
                main.appendChild(element);
            });
		}
		 // Navigo an die Links in der View binden
        this._router.updatePageLinks();

    }
	}
    export default App;
