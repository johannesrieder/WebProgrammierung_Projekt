"use strict";

    import stylesheet from "./nahrungsauswahl.css";

    class Nahrungsauswahl {

        constructor(app) {
            this._app = app;


        }

        changeText() {
          const p = document.querySelector('test');
          p.textContent = "I changed because of an inline event handler.";
        }

    }

    export default Nahrungsauswahl;
