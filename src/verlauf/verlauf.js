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
            // durch die clear() methode der Datenbank, löschen sich alle Datensätze doch die Autoincrement ID bleibt bestehen
            //idStart wird auf den ersten neuen Datensatz gesetzt
            this.idStart=1;
            this.anzahl=0;

            let gericht = new Database.Gericht();
          gericht.aktualisiere(this); //Beim Wechsel auf die Seite Verlauf wird der Verlauf aktualisiert

        }

        //Ändert this.anzahl nicht - methode wird nciht benutzt
        setAnzahl(pAnzahl){
        this.anzahl=pAnzahl;
        console.log("Anzahl"+this.anzahl);
        }


        updateVerlauf(anzahl,db) {

          for (let i=(this.idStart+anzahl-1);i>=this.idStart; i-- ){
            console.log("ID"+i);
            try{
              let ausgabe=db.getById(i);

                ausgabe.then(ergebnis => {
                console.log(ergebnis);
                let farbe="Darkgreen";
                if((ergebnis["kalorienanzahl"])<ergebnis["kalorienbedarf"]*0.7 || (ergebnis["kalorienanzahl"])>ergebnis["kalorienbedarf"]*1.3){
                  farbe="Red";
                }
                else if((ergebnis["kalorienanzahl"])<ergebnis["kalorienbedarf"]*0.8 || (ergebnis["kalorienanzahl"])>ergebnis["kalorienbedarf"]*1.2){
                  farbe="Orange";
                }
                else {
                  farbe="Darkgreen";
                }
                document.getElementById("daily_record").innerHTML += "<div class=\"row\"id=\"zeile\"><div class=\"column\"id=\"left_center\"><p id=\"datum\">" + ergebnis["datum"] + "</p></div><div class=\"column\"id=\"left_center\"><p id=\"bezeichnung\">" + ergebnis["bezeichnung"] + "</p></div><div class=\"column\"id=\"farbe\" style=\"background-color:"+farbe+";\"><p id=\"ampel\"><b>"+ ergebnis["kalorienanzahl"] +"/"+ ergebnis["kalorienbedarf"]+" kcal</b></p></div></div>";
                console.log(ergebnis);
              }).catch(fehler => {
              //alert(fehler);
              });
            }catch(err){alert("fehler bei: "+i);}
          }
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
