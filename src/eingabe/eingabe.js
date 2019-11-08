"use strict";

class Eingabe {
    /**
     * Konstruktor.
     * @param {Objekt} app Zentrales App-Objekt der Anwendung
     */
    constructor(app) {
        this._app = app;
        var kalorien = document.getElementById("bBerechnung").addEventListener("click", this.kalorienbedarfGeschlecht);

        if(kalorien > 0){
            var bool = true;
            console.log("true");
            console.log(kalorien+"kalorien");
        }
        if(bool){
        var kalorien = this.kalorienbedarfAktivität(kalorien);
        this.setErgebnis(kalorien);
        }

        document.getElementById("bReset").addEventListener("click", this.resetEingaben);
    }
    //https://www.marathonfitness.de/kalorienbedarf-berechnen/
    // Die Mifflin-St.Jeor Formel

    kalorienbedarfGeschlecht() {
        var eingabeAlter = document.getElementById("EingabeAlter").value;
        var eingabeGröße = document.getElementById("EingabeGröße").value;
        var eingabeGewicht = document.getElementById("EingabeGewicht").value;

        if (eingabeAlter != "" && eingabeGröße != "" && eingabeGewicht != "") { //überprüft Eingaben auf Vollständigkeit
            if (document.getElementById("männlich").checked) {
                var kalorienanzahl = (10 * eingabeGewicht) + (6,25 * eingabeGröße) - (5 * eingabeAlter) + 5;
            }

            if (document.getElementById("weiblich").checked) {
                var kalorienanzahl = (10 * eingabeGewicht) + (6,25 * eingabeGröße) - (5 * eingabeAlter) - 161;
            }
            this.kalorienbedarfAktivität(kalorienanzahl);
            return kalorienanzahl;
        }
        else {
            alert("Eingaben unvollständig!");
        }
    }

    kalorienbedarfAktivität(kalorienanzahl) {
        console.log("Methode aufgerufen");
        if (document.getElementById("Aktivitätslevel").value == "leicht") {
            kalorienanzahl *= 1,375;
        }
        if (document.getElementById("Aktivitätslevel").value == "moderat") {
            kalorienanzahl *= 1,55;
        }
        if (document.getElementById("Aktivitätslevel").value == "sehrAktiv") {
            kalorienanzahl *= 1,725;
        }
        return kalorienanzahl;
    }

    setErgebnis(kalorienanzahl) {
        document.getElementById("eingabe_ergebnisKB").value = kalorienanzahl;
    }

    resetEingaben() {
        document.getElementById("EingabeAlter").value = "";
        document.getElementById("EingabeGröße").value = "";
        document.getElementById("EingabeGewicht").value = "";
    }
}
export default Eingabe;
