"use strict";

import stylesheet from "./eingabe.css";

class Eingabe {
    /**
     * Konstruktor.
     * @param {Objekt} app Zentrales App-Objekt der Anwendung
     */
    constructor(app) {
        this._app = app;

        let Geschlecht = document.querySelector('input[name = "Geschlecht"]:checked').value;
        console.log(Geschlecht);
        let EingabeAlter = document.getElementById("EingabeAlter");
        let EingabeGröße = document.getElementById("EingabeGröße");
        let EingabeGewicht = document.getElementById("EingabeGewicht");
        let Aktivitätslevel = document.querySelector('input[name = "Geschlecht"]:checked').value;
        console.log(Aktivitätslevel);

        let kvv = document.getElementById("Berechnungsbutton").addEventListener("click", this.kalorienbedarfGeschlecht);
        console.log(kvv);

    }
    //https: //www.marathonfitness.de/kalorienbedarf-berechnen/

    kalorienbedarfGeschlecht() {
        if (Geschlecht == "männlich") {
            let Kalorienanzahl = (10 * Eingabegewicht) + (6, 25 * EingabeGröße) - (5 * EingabeAlter) + 5;
        }

        if (Geschlecht == "weiblich") {
            let Kalorienanzahl = 2;
        }
        return Kalorienanzahl;
    }

    kalorienbedarfAktivität(Kalorienanzahl) {
        if (Aktivitätslevel == "leicht") {
            Kalorienanzahl *= 1, 375;
        }
        if (Aktivitätslevel == "moderat") {
            Kalorienanzahl *= 1, 55;
        }
        if (Aktivitätslevel == "sehrAktiv") {
            Kalorienanzahl *= 1, 725;
        }
        return Kalorienanzahl;
    }
}
export default Eingabe;
