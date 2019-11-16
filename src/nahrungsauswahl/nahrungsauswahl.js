"use strict";

import stylesheet from "./nahrungsauswahl.css";

export default class Nahrungsauswahl {

  constructor(app) {
    this._app = app;

    let o_nahrungsauswahl = {
      gericht_b: o_gericht_b,
      gericht_l: o_gericht_l,
      gericht_d: o_gericht_d,
    }

    let o_gericht_b = {
      bezeichnung: "",
      kalorienanzahl: 0,
    }

    let o_gericht_l = {
      bezeichnung: "",
      kalorienanzahl: 0,
    }

    let o_gericht_d = {
      bezeichnung: "",
      kalorienanzahl: 0,
    }

    document.getElementById("breakfast_g1").addEventListener("click", updateBreakfast);
    document.getElementById("breakfast_g2").addEventListener("click", updateBreakfast);
    document.getElementById("breakfast_g3").addEventListener("click", updateBreakfast);
    document.getElementById("breakfast_g4").addEventListener("click", updateBreakfast);

    document.getElementById("lunch_g1").addEventListener("click", updateLunch);
    document.getElementById("lunch_g2").addEventListener("click", updateLunch);
    document.getElementById("lunch_g3").addEventListener("click", updateLunch);
    document.getElementById("lunch_g4").addEventListener("click", updateLunch);

    document.getElementById("dinner_g1").addEventListener("click", updateDinner);
    document.getElementById("dinner_g2").addEventListener("click", updateDinner);
    document.getElementById("dinner_g3").addEventListener("click", updateDinner);
    document.getElementById("dinner_g4").addEventListener("click", updateDinner);

    document.getElementById("bSpeichereGericht").addEventListener("click", saveNahrungsauswahl);

  }

  updateKalorienanzahl(){
    var kalorienanzahl_summe = kalorienanzahl_breakfast + kalorienanzahl_lunch + kalorienanzahl_dinner;
    changeText(kalorienanzahl_summe);
    changeColor(kalorienanzahl_summe, kalorienanzahl_optimum);
  }


  updateBreakfast(){
    var breakfast = document.querySelector('input[name = "breakfast_g"]:checked').value;
    switch (breakfast) {
      case "breakfast_g1":
      o_gericht_b.bezeichnung = "Ei";
      o_gericht_b.kalorienanzahl = 200;
      break;
      case "breakfast_g2":
      o_gericht_b.bezeichnung = "Bacon";
      o_gericht_b.breakfast = 300;
      break;
      case "breakfast_g3":
      o_gericht_b.bezeichnung = "Brot";
      o_gericht_b.breakfast = 400;
      break;
      case "breakfast_g4":
      o_gericht_b.bezeichnung = "Müsli";
      o_gericht_b.breakfast = 500;
      break;
      default:
    }
    document.getElementById("lKalorien").innerHTML = o_nahrungsauswahl.o_gericht_b.kalorienanzahl+o_nahrungsauswahl.o_gericht_l.kalorienanzahl+o_nahrungsauswahl.o_gericht_d.kalorienanzahl+" / XXX kcal";
  }

  updateLunch(){
    var lunch = document.querySelector('input[name = "lunch_g"]:checked').value;
    switch (lunch) {
      case "lunch_g1":
      o_gericht_l.bezeichnung = "Fisch";
      o_gericht_l.kalorienanzahl = 400;
      break;
      case "lunch_g2":
      o_gericht_l.bezeichnung = "Steak";
      o_gericht_l.kalorienanzahl = 500;
      break;
      case "lunch_g3":
      o_gericht_l.bezeichnung = "Salat";
      o_gericht_l.kalorienanzahl = 600;
      break;
      case "lunch_g4":
      o_gericht_l.bezeichnung = "Nudeln";
      o_gericht_l.kalorienanzahl = 700;
      break;
      default:
    }
    document.getElementById("lKalorien").innerHTML = o_nahrungsauswahl.o_gericht_b.kalorienanzahl+o_nahrungsauswahl.o_gericht_l.kalorienanzahl+o_nahrungsauswahl.o_gericht_d.kalorienanzahl+" / XXX kcal";
  }

  updateDinner(){
    var dinner = document.querySelector('input[name = "dinner_g"]:checked').value;
    switch (dinner) {
      case "dinner_g1":
      o_gericht_d.bezeichnung = "Wurst";
      o_gericht_d.kalorienanzahl = 600;
      break;
      case "dinner_g2":
      o_gericht_d.bezeichnung = "Käse";
      o_gericht_d.kalorienanzahl = 500;
      break;
      case "dinner_g3":
      o_gericht_d.bezeichnung = "Gemüse";
      o_gericht_d.kalorienanzahl = 400;
      break;
      case "dinner_g4":
      o_gericht_d.bezeichnung = "Brot";
      o_gericht_d.kalorienanzahl = 300;
      break;
      default:
    }
    document.getElementById("lKalorien").innerHTML = o_nahrungsauswahl.o_gericht_b.kalorienanzahl+o_nahrungsauswahl.o_gericht_l.kalorienanzahl+o_nahrungsauswahl.o_gericht_d.kalorienanzahl+" / XXX kcal";
  }

  saveNahrungsauswahl(){
    return o_nahrungsauswahl;
  }

  onShow() {

    let section = document.querySelector("#sec_2").cloneNode(true);

    return {
      className: "verlauf",
      topbar: section.querySelectorAll("header > *"),
      main: section.querySelectorAll("main > *"),
    };
  }

  onLeave(goon){
    return true;
  }

  get title(){
    return "Nahrungsauswahl";
  }
}

  export async function throwAlert(){
    alert("test")
  }
