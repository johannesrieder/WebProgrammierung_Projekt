"use strict";

    import stylesheet from "./eingabe.css";

    class Eingabe {
        /**
         * Konstruktor.
         *
         * @param {Objekt} app  Zentrales App-Objekt der Anwendung
         * @param {String} id   ID des darzustellenden Songs
         * @param {String} mode "new", "display" oder "edit"
         */
        constructor(app, id, mode) {
            this._app = app;
            this._id = id;
            this._mode = mode;
        }

        /**
         * Von der Klasse App aufgerufene Methode, um die Seite anzuzeigen. Die
         * Methode gibt daher ein passendes Objekt zurück, das an die Methode
         * _switchVisibleContent() der Klasse App übergeben werden kann, um ihr
         * die darzustellenden DOM-Elemente mitzuteilen.
         *
         * @return {Object} Darzustellende DOM-Elemente gemäß Beschreibung der
         * Methode App._switchVisibleContent()
         */
        onShow() {
            // Anzuzeigende HTML-Elemente ermitteln
			let section = document.querySelector("#eingabe").cloneNode(true);
         
			return {
				className: "eingabe",
				topbar: section.querySelectorAll("header > *"),
				main: section.querySelectorAll("main > *"),
			}
		}



        /**
         * Von der Klasse App aufgerufene Methode, um festzustellen, ob der Wechsel
         * auf eine neue Seite erlaubt ist. Wird hier true zurückgegeben, wird der
         * Seitenwechsel ausgeführt.
         *
         * @param  {Function} goon Callback, um den Seitenwechsel zu einem späteren
         * Zeitpunkt fortzuführen, falls wir hier false zurückgeben
         * @return {Boolean} true, wenn der Seitenwechsel erlaubt ist, sonst false
         */
        onLeave(goon) {
            return true;
        }

        /**
         * @return {String} Titel für die Titelzeile des Browsers
         */
        get title() {
            switch (this._mode) {
                case "new":
                    return "Song hinzufügen";
                case "edit":
                    return "Song bearbeiten";
                default:
                    return "Song anzeigen";
            }
        }
    }

    export default Eingabe;
