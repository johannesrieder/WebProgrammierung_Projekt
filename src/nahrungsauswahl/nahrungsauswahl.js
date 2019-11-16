"use strict";

import stylesheet from "./nahrungsauswahl.css";

class Nahrungsauswahl {

  constructor(app) {
    this._app = app;
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
    var kalorienanzahl_breakfast = updateBreakfast();
    var kalorienanzahl_lunch = updateLunch();
    var kalorienanzahl_dinner = updateDinner();
    var kalorienanzahl_summe = kalorienanzahl_breakfast + kalorienanzahl_lunch + kalorienanzahl_dinner;
    changeText(kalorienanzahl_summe);
    changeColor(kalorienanzahl_summe, kalorienanzahl_optimum);
  }

  updateBreakfast(){
    var breakfast = document.querySelector('input[name = "breakfast_g"]:checked').value;
    var kalorienanzahl_breakfast = 0;
    switch (breakfast) {
      case "breakfast_g1":
        kalorienanzahl_breakfast = 200;
      break;
      case "breakfast_g2":
        kalorienanzahl_breakfast = 300;
      break;
      case "breakfast_g3":
        kalorienanzahl_breakfast = 400;
      break;
      case "breakfast_g4":
        kalorienanzahl_breakfast = 500;
      break;
      default:
    }
    return kalorienanzahl_breakfast;
  }

  updateLunch(){
    var lunch = document.querySelector('input[name = "lunch_g"]:checked').value;
    var kalorienanzahl_lunch = 0;
    switch (lunch) {
      case "lunch_g1":
        kalorienanzahl_lunch = 200;
      break;
      case "lunch_g2":
        kalorienanzahl_lunch = 300;
      break;
      case "lunch_g3":
        kalorienanzahl_lunch = 400;
      break;
      case "lunch_g4":
        kalorienanzahl_lunch = 500;
      break;
      default:
    }
    return kalorienanzahl_lunch;
  }

  updateDinner(){
    var dinner = document.querySelector('input[name = "dinner_g"]:checked').value;
    var kalorienanzahl_dinner = 0;
    switch (dinner) {
      case "dinner_g1":
        kalorienanzahl_dinner = 200;
      break;
      case "dinner_g2":
        kalorienanzahl_dinner = 300;
      break;
      case "dinner_g3":
        kalorienanzahl_dinner = 400;
      break;
      case "dinner_g4":
        kalorienanzahl_dinner = 500;
      break;
      default:
    }
    return kalorienanzahl_dinner;
  }

  changeText(kalorienanzahl_summe){
    document.getElementById("lKalorien").innerHTML = kalorienanzahl_summe+" / XXX kcal";
  }

  changeColor(kalorienanzahl_summe, kalorienanzahl_optimum){
    var label = document.getElementById("lKalorien");
    var kalorienanzahl_difference = 1-(kalorienanzahl_summe/kalorienanzahl_optimum);
    if (kalorienanzahl_difference < 0,15) {
      label.style.background = "green";
    } else if (kalorienanzahl_difference < 0,3) {
      label.body.style.background = "orange";
    } else {
      label.body.style.background = "red";
    }
  }

}

export default Nahrungsauswahl;
