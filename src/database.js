"use strict";

import Dexie from "dexie/dist/dexie.js";
import Verlauf from "./verlauf/verlauf.js";

// Datenbankdefinition:
//
//   * ++id = Automatisch Hochgezählter Datenbankschlüssel
//   * datum, kalorienanzahl, gericht = Indexfelder für WHERE-Abfragen und die Sortierung
//   * Alle anderen Felder müssen nicht deklariert werden!
//   * Vgl. http://dexie.org/docs/API-Reference
let database = new Dexie("Verlauf");

//Bei entsprechenden Fehlermeldungen zu Version 1 und 2 ändern
database.version(2).stores({
    gericht: "++id, datum, bezeichnung, kalorienanzahl",
});
database.version(3).stores({
    gericht: "++id, datum, bezeichnung, kalorienanzahl, kalorienbedarf",
});

/**
 * Datenbankzugriffsklasse für Tage. Diese Klasse bietet verschiedene
 * Methoden, um Tage zu speichern und wieder auszulesen. Im Hintergrund
 * wird hierfür Dexie zur lokalen Speicherung im Browser genutzt.
 */
class Gericht {
    /**
     * Einen neuen Tag speichern oder einen vorhandenen Tag
     * aktualisieren. Das Tag-Objekt sollte hierfür folgenden Aufbau
     * besitzen:

     *
     * {
     *     datum: "Datum des Tages",
     *     kalorienanzahl: "Kalorienanzahl des Tages",
	 *	   gericht: "Gericht des Tages";
     *     format: "html",
     *     data: "HTML-String",
     * }
     *
     * @param  {Object}  gericht Zu speichernder Tag
     * @return {Promise} Asynchrones Promise-Objekt
     */

    async saveNew(gericht,verlauf) {

       database.gericht.add(gericht);
    }

    aktualisiere(verlauf){
      let a=database.gericht.count().then(ergebnis => {
        verlauf.setAnzahl(ergebnis);
        verlauf.updateVerlauf(ergebnis, this);
      });

    }

    //wird nicht benutzt
    getAnzahl(){
      let a=database.gericht.count().then(anzahl => {
      });
      return a;
    }

    /**
     * Bereits vorhandenen Tag aktualisieren.
     * @param  {Object}  gericht Zu speichernder Tag
     * @return {Promise} Asynchrones Promise-Objekt
     */
    async update(tag, gericht) {
      tag["bezeichnung"]=(tag["bezeichnung"]+gericht["bezeichnung"]);
      tag["kalorienanzahl"]=(tag["kalorienanzahl"]+gericht["kalorienanzahl"]);
        console.log(tag);
        return database.gericht.put(tag);
    }

    /**
     * Vorhandenen Tag anhand seiner ID löschen.
     * @param  {String}  id ID des zu löschenden Tags
     * @return {Promise} Asynchrones Promise-Objekt
     */
    async delete(id) {
        return database.gericht.delete(id);
    }

    /**
     * Löscht alle Tage!
     * @return {Promise} Asynchrones Promise-Objekt
     */
    async clear() {
        return database.gericht.clear();
    }

    /**
     * Vorhandenen Tag anhand seiner ID auslesen.
     * @param  {String}  id ID des zu lesenden Tags
     * @return {Promise} Asynchrones Promise-Objekt mit dem Tag
     */
    async getById(id) {
        return database.gericht.get(id);
    }

    /**
     * Gibt eine Liste mit allen Tagen zurück, deren Kalorienanzahl oder Datum oder Gericht
     * den gesuchten Wert enthalten.
     *
     * @param  {String}  query Gesuchte Kalorienanzahl oder Datum oder Gericht
     * @return {Promise} Asynchrones Promise-Objekt mit dem Suchergebnis
     */
    async search(query) {
        if (!query) query = "";
        query = query.toUpperCase();

        let result = database.gericht.filter(gericht => {
            let kalorienanzahl = gericht.kalorienanzahl;
            let datum  = gericht.datum;
			let bezeichnung = gericht.bezeichnung;
      let kalorienbedarf=gericht.kalorienbedarf;
            return datum.search(query) > -1 || kalorienanzahl.search(query) > -1 || bezeichnung.search(query) > -1 || kalorienbedarf.search(query) > -1;
        });

        return result.toArray();
    }
}

export default {
    database,
    Gericht,
};
