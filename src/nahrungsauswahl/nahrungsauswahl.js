"use strict";

import stylesheet from "./nahrungsauswahl.css";


export default class Nahrungsauswahl {

  constructor(app) {
    this._app = app;
    var kalorienanzahl = localStorage.getItem("kalorienanzahl");

    let all_breakfast_g = document.getElementsByName("breakfast_g");
      var a_gericht_b = all_breakfast_g.forEach(element => element.addEventListener('click', this.updateBreakfast));
    let all_lunch_g = document.getElementsByName("lunch_g");
      var a_gericht_l = all_lunch_g.forEach(element => element.addEventListener('click', this.updateLunch));
    let all_dinner_g = document.getElementsByName("dinner_g");
      var a_gericht_d = all_dinner_g.forEach(element => element.addEventListener('click', this.updateDinner));

    var a_nahrungsauswahl = [a_gericht_b, a_gericht_l, a_gericht_d];
    document.getElementById("bSpeichereGericht").addEventListener("click", this.saveNahrungsauswahl);

  }

  updateBreakfast(){
    var breakfast = document.getElementsByName('breakfast_g');
    for (var i = 0, length = breakfast.length; i < length; i++) {
      if (breakfast[i].checked) {
        switch (breakfast[i].value) {
          case "breakfast_g1":
          var gericht_bezeichnung = "Obst";
          var gericht_kalorienanzahl = 300;
          break;
          case "breakfast_g2":
          var gericht_bezeichnung = "Brot";
          var gericht_kalorienanzahl = 500;
          break;
          case "breakfast_g3":
          var gericht_bezeichnung = "Müsli";
          var gericht_kalorienanzahl = 600;
          break;
          case "breakfast_g4":
          var gericht_bezeichnung = "Wurst";
          var gericht_kalorienanzahl = 700;
          break;
          default:
        }
        var a_gericht_b = [gericht_bezeichnung, gericht_kalorienanzahl];
        console.log(a_gericht_b);
        return a_gericht_b;
      }
    }
  }

  updateLunch(){
    var lunch = document.getElementsByName('lunch_g');
    for (var i = 0, length = lunch.length; i < length; i++) {
      if (lunch[i].checked) {
        switch (lunch[i].value) {
          case "lunch_g1":
          var gericht_bezeichnung = "Steak";
          var gericht_kalorienanzahl = 400;
          break;
          case "lunch_g2":
          var gericht_bezeichnung = "Fisch";
          var gericht_kalorienanzahl = 500;
          break;
          case "lunch_g3":
          var gericht_bezeichnung = "Nudeln";
          var gericht_kalorienanzahl = 600;
          break;
          case "lunch_g4":
          var gericht_bezeichnung = "Risotto";
          var gericht_kalorienanzahl = 700;
          break;
          default:
        }
        var a_gericht_l = [gericht_bezeichnung, gericht_kalorienanzahl];
        console.log(a_gericht_l);
        return a_gericht_l;
      }
    }
  }

  updateDinner(){
    var dinner = document.getElementsByName('dinner_g');
    for (var i = 0, length = dinner.length; i < length; i++) {
      if (dinner[i].checked) {
        switch (dinner[i].value) {
          case "dinner_g1":
          var gericht_bezeichnung = "Wurst";
          var gericht_kalorienanzahl = 500;
          break;
          case "dinner_g2":
          var gericht_bezeichnung = "Käse";
          var gericht_kalorienanzahl = 600;
          break;
          case "dinner_g3":
          var gericht_bezeichnung = "Gemüse";
          var gericht_kalorienanzahl = 300;
          break;
          case "dinner_g4":
          var gericht_bezeichnung = "Brot";
          var gericht_kalorienanzahl = 400;
          break;
          default:
        }
        var a_gericht_d = [gericht_bezeichnung, gericht_kalorienanzahl];
        console.log(a_gericht_d);
        return a_gericht_d;
      }
    }
  }

  saveNahrungsauswahl(a_nahrungsauswahl){
    console.log(a_nahrungsauswahl);
    localStorage.setItem("a_nahrungsauswahl", a_nahrungsauswahl);
    return a_nahrungsauswahl;
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
