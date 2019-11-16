"use strict";

import stylesheet from "./nahrungsauswahl.css";

class Nahrungsauswahl {

  constructor(app) {
    this._app = app;

    document.getElementById("bSpeichereGericht").addEventListener("click", this.changeText);
    document.getElementById("breakfast_g1").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("breakfast_g2").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("breakfast_g3").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("breakfast_g4").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("lunch_g1").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("lunch_g2").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("lunch_g3").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("lunch_g4").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("dinner_g1").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("dinner_g2").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("dinner_g3").addEventListener("click", this.updateKalorienanzahl);
    document.getElementById("dinner_g4").addEventListener("click", this.updateKalorienanzahl);

  }

  updateKalorienanzahl(){
    document.getElementById("lKalorien").innerHTML = "hallo";
  }

  changeText(){
    document.getElementById("lKalorien").innerHTML = "hallo";
  }
}

export default Nahrungsauswahl;
