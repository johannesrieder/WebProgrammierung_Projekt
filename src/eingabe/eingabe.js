"use strict";

import stylesheet from "./eingabe.css";

class Eingabe {
    /**
     * Konstruktor.
     * @param {Objekt} app Zentrales App-Objekt der Anwendung
     */
    constructor(app) {
        this._app = app;
        document.getElementById("Berechnungsbutton").addEventListener("click", this.kalorienbedarfGeschlecht);
        document.getElementById("ResetButton").addEventListener("click", this.resetEingaben);
    }
    //https://www.marathonfitness.de/kalorienbedarf-berechnen/
    // Die Mifflin-St.Jeor Formel

    kalorienbedarfGeschlecht() {
        var EingabeAlter = document.getElementById("EingabeAlter").value;
        var EingabeGröße = document.getElementById("EingabeGröße").value;
        var EingabeGewicht = document.getElementById("EingabeGewicht").value;

        if (EingabeAlter != "" && EingabeGröße != "" && EingabeGewicht != "") { //überprüft Eingaben auf Vollständigkeit
            if (document.getElementById("männlich").checked) {
                var Kalorienanzahl = (10 * EingabeGewicht) + (6, 25 * EingabeGröße) - (5 * EingabeAlter) + 5;
                this.kalorienbedarfAktivität(Kalorienanzahl);
            }

            if (document.getElementById("weiblich").checked) {
                var Kalorienanzahl = (10 * EingabeGewicht) + (6, 25 * EingabeGröße) - (5 * EingabeAlter) - 161;
                this.kalorienbedarfAktivität(Kalorienanzahl);
            }
        }
        else {
            alert("Eingaben unvollständig!");
        }
    }

    kalorienbedarfAktivität(Kalorienanzahl) {
        console.log("Methode aufgerufen");
        if (document.getElementById("Aktivitätslevel").value == "leicht") {
            Kalorienanzahl *= 1, 375;
        }
        if (document.getElementById("Aktivitätslevel").value == "moderat") {
            Kalorienanzahl *= 1, 55;
        }
        if (document.getElementById("Aktivitätslevel").value == "sehrAktiv") {
            Kalorienanzahl *= 1, 725;
        }
        setErgebnis(Kalorienanzahl);
    }

    setErgebnis(Kalorienanzahl) {
        document.getElementById("KalorienbedarfErgebnis").value = Kalorienanzahl;
    }

    resetEingaben() {
        document.getElementById("EingabeAlter").value = "";
        document.getElementById("EingabeGröße").value = "";
        document.getElementById("EingabeGewicht").value = "";
    }
}
export default Eingabe;
