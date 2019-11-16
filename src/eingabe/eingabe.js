"use strict";

class Eingabe {
    /**
     * Konstruktor.
     * @param {Objekt} app Zentrales App-Objekt der Anwendung
     */
    constructor(app) {
        this._app = app;

        document.getElementById("bBerechnung").addEventListener("click", this.berechneKalorien);

        document.getElementById("bReset").addEventListener("click", this.resetEingaben);
    }
    //https://www.marathonfitness.de/kalorienbedarf-berechnen/
    // Die Mifflin-St.Jeor Formel
    berechneKalorien(){
      var eingabeAlter = document.getElementById("EingabeAlter").value;
      var eingabeGröße = document.getElementById("EingabeGröße").value;
      var eingabeGewicht = document.getElementById("EingabeGewicht").value;

      if (eingabeAlter != "" && eingabeGröße != "" && eingabeGewicht != "") { //überprüft Eingaben auf Vollständigkeit
          console.log(eingabeGewicht);
          console.log(eingabeGröße);
          console.log(eingabeAlter);
          if (document.getElementById("männlich").checked) {
              var kalorienanzahl = (10 * eingabeGewicht) + (6.25 * eingabeGröße) - (5 * eingabeAlter) + 5;
          } else if (document.getElementById("weiblich").checked) {
              var kalorienanzahl = (10 * eingabeGewicht) + (6.25 * eingabeGröße) - (5 * eingabeAlter) - 161;
          }

          if (document.getElementById("Aktivitätslevel").value == "leicht") {
              kalorienanzahl *= 1.375;
          } else if (document.getElementById("Aktivitätslevel").value == "moderat") {
              kalorienanzahl *= 1.55;
          } else if (document.getElementById("Aktivitätslevel").value == "sehrAktiv") {
              kalorienanzahl *= 1.725;
          }
          document.getElementById("eingabe_ergebnisKB").innerHTML = Math.round(kalorienanzahl);
      }
      else {
          alert("Eingaben unvollständig!");
      }
    }

    resetEingaben() {
        document.getElementById("EingabeAlter").value = "";
        document.getElementById("EingabeGröße").value = "";
        document.getElementById("EingabeGewicht").value = "";
        document.getElementById("eingabe_ergebnisKB").innerHTML = "0";
    }
}
export default Eingabe;
