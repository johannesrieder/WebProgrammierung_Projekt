"use strict";

    import stylesheet from "./verlauf.css";
    import Database from "C:/Users/julia_000/WebProgrammierung_Projekt/src/database.js"

    class Verlauf {

        /**
         * Konstruktor.
         * @param {Objekt} app Zentrales App-Objekt der Anwendung
         */
        constructor(app) {

            this._app = app;

            //gericht.saveNew();
            //document.getElementById("volume").addEventListener("input", this.ausgeben);
            let gericht = new Database.Gericht();
            let objekt={
              datum: "15.11.2019",
              bezeichnung: "Thunfisch",
              kalorienanzahl: "1000",
            }
            gericht.saveNew(objekt, this);
        }
        updateVerlauf(anzahl, db) {
          console.log(anzahl);
          console.log("klappt");
          let ausgabe=db.getById(1);
          ausgabe.then(ergebnis => {
          alert(ergebnis["bezeichnung"]);
          console.log(ergebnis["datum"]);
          console.log(ergebnis["bezeichnung"]);
          console.log(ergebnis["kalorienanzahl"]);
          }).catch(fehler => {
          alert(fehler);
          });

          //console.log(ausgabe.toArray());
          //console.log(ausgabe["datum"]);
          //console.log(ausgabe["bezeichnung"]);
          //console.log(ausgabe["kalorienanzahl"]);
          //let suche =db.search("1");
          //console.log(suche);


            //document.getElementById("output").value =neu.target.value;
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
