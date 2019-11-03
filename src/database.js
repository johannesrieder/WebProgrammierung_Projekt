"use strict";

import Dexie from "dexie/dist/dexie.js";

// Datenbankdefinition:
//
//   * ++id = Automatisch Hochgezählter Datenbankschlüssel
//   * datum, kalorienanzahl, gericht = Indexfelder für WHERE-Abfragen und die Sortierung
//   * Alle anderen Felder müssen nicht deklariert werden!
//   * Vgl. http://dexie.org/docs/API-Reference
let database = new Dexie("Mein Tagebuch");

database.version(1).stores({
    tage: "++id, kalorienanzahl, gericht,datum",
});

/**
 * Datenbankzugriffsklasse für Tage. Diese Klasse bietet verschiedene
 * Methoden, um Tage zu speichern und wieder auszulesen. Im Hintergrund
 * wird hierfür Dexie zur lokalen Speicherung im Browser genutzt.
 */
class Tage {
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
     * @param  {Object}  tag Zu speichernder Tag
     * @return {Promise} Asynchrones Promise-Objekt
     */
    async saveNew(tag) {
        return database.tage.add(tag);
    }

    /**
     * Bereits vorhandenen Tag aktualisieren.
     * @param  {Object}  tag Zu speichernder Tag
     * @return {Promise} Asynchrones Promise-Objekt
     */
    async update(tag) {
        return database.tage.put(tag);
    }

    /**
     * Vorhandenen Tag anhand seiner ID löschen.
     * @param  {String}  id ID des zu löschenden Tags
     * @return {Promise} Asynchrones Promise-Objekt
     */
    async delete(id) {
        return database.tage.delete(id);
    }

    /**
     * Löscht alle Tage!
     * @return {Promise} Asynchrones Promise-Objekt
     */
    async clear() {
        return database.tage.clear();
    }

    /**
     * Vorhandenen Tag anhand seiner ID auslesen.
     * @param  {String}  id ID des zu lesenden Tags
     * @return {Promise} Asynchrones Promise-Objekt mit dem Tag
     */
    async getById(id) {
        return database.tage.get(id);
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

        let result = database.tage.filter(tag => {
            let kalorienanzahl = tag.kalorienanzahl;
            let datum  = tag.datum;
			let gericht = tag.gericht;
            return datum.search(query) > -1 || kalorienanzahl.search(query) > -1 || gericht.search(query) > -1;
        });

        return result.toArray();
    }
}

export default {
    database,
    Tage,
};
