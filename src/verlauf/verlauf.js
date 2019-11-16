"use strict";

    import stylesheet from "./verlauf.css";
  //  import Database from "C:/Users/julia_000/WebProgrammierung_Projekt/src/database.js"
    import Database from "../database.js"

    class Verlauf {

        /**
         * Konstruktor.
         * @param {Objekt} app Zentrales App-Objekt der Anwendung
         */
        constructor(app) {

            this._app = app;
            this.idStart=1;
            this.anzahl=0;

            let gericht = new Database.Gericht();

            let objekt={
              datum: "15.11.2019",
              bezeichnung: "Lachs",
              kalorienanzahl: "1000",
            }
          //  gericht.clear();
            gericht.saveNew(objekt, this);
        }

        setAnzahl(pAnzahl){
        this.anzahl=pAnzahl;
        console.log("Anzahl"+this.anzahl);
        }

        updateVerlauf(anzahl,db) {
        // console.log("Anzahl hier"+this.anzahl);

          for (let i=(this.idStart+anzahl);i>=this.idStart; i-- ){

            let ausgabe=db.getById(i);
            ausgabe.then(ergebnis => {
              console.log(ergebnis);
              document.getElementById("daily_record").innerHTML += "<div class=\"row\"id=\"zeile\"><div class=\"column\"id=\"left_center\"><p id=\"datum5\">" + ergebnis["datum"] + "</p></div><div class=\"column\"id=\"left_center\"><p id=\"kalorien0\"><b>"+ ergebnis["kalorienanzahl"] +"/5000</b></p><p id=\"bezeichnung0\">" + ergebnis["bezeichnung"] + "</p></div><div class=\"column\"id=\"farbe\"></div></div>";
            //document.getElementById("datum0").innerHTML =ergebnis["datum"];
            //document.getElementById("bezeichnung0").innerHTML =ergebnis["bezeichnung"];
            //document.getElementById("kalorien0").innerHTML =ergebnis["kalorienanzahl"];
            }).catch(fehler => {
            alert(fehler);
            });
          }


          //console.log(ausgabe.toArray());
          //console.log(ausgabe["datum"]);
          //console.log(ausgabe["bezeichnung"]);
          //console.log(ausgabe["kalorienanzahl"]);
          let suche =db.search("1");
          console.log(suche);



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
