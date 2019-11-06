"use strict";

import stylesheet from "./eingabe.css";

class Eingabe {
    /**
     * Konstruktor.
     * @param {Objekt} app Zentrales App-Objekt der Anwendung
     */
    constructor(app) {
        this._app = app;
        console.log("Test123");
        let Geschlecht = getElementByID("Geschlecht").value;
        let EingabeAlter = getElementByID("EingabeAlter");
        let EingabeGröße = getElementByID("EingabeGröße");
        let EingabeGewicht = getElementByID("EingabeGewicht");
        let Aktivitätslevel = getElementByID("Aktivitätslevel").value;

        document.getElementById("Berechnungsbutton").addEventListener(click,click);
    }
//https: //www.marathonfitness.de/kalorienbedarf-berechnen/

    kalorienbedarfGeschlecht() {
        if (Geschlecht == männlich) {
            let Kalorienanzahl = (10* Eingabegewicht.innerHTML) + (6, 25* EingabeGröße.innerHTML)-(5* EingabeAlter.InnerHTML) + 5;
        }

        if (Geschlecht == weiblich) {
            let Kalorienanzahl = 2;
        }
        return Kalorienanzahl;
    }

    kalorienbedarfAktivität(Kalorienanzahl) {
        if (Aktivitätslevel == leicht) {
            Kalorienanzahl *= 1,375;
        }
        if (Aktivitätslevel == moderat) {
            Kalorienanzahl *= 1,55;
        }
        if (Aktivitätslevel == sehrAktiv) {
            Kalorienanzahl *= 1,725;
        }
        return Kalorienanzahl
    }
    click(){
        console.log("funktioniert");
    }
}


export default Eingabe;
