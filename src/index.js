"use strict";

import stylesheet from "./index.css";
import "babel-core/register";
import "babel-polyfill";

import App from "./app.js";

    // Erst loslaufen, wenn das Document Object Modul bereit ist
    window.addEventListener("load", () => {
        // Anwendung starten
        let app = new App();
        app.start();
    });
