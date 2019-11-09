"use strict";

    import stylesheet from "./verlauf.css";

    class Verlauf {
        /**
         * Konstruktor.
         * @param {Objekt} app Zentrales App-Objekt der Anwendung
         */
        constructor(app) {
            this._app = app;

            console.log(0);
            document.getElementById("volume").addEventListener("input", this.ausgeben);

        }
        ausgeben(ev) {
          console.log(3);
            document.getElementById("output").value =ev.target.value;
            //document.getElementById("output").innerHTML =ev;
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
            let section = document.querySelector("#verlauf").cloneNode(true);

			return {
				className: "verlauf",
				topbar: section.querySelectorAll("header > *"),
				main: section.querySelectorAll("main > *"),
			};

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
            return "verlauf";
        }
    }

    export default Verlauf;
