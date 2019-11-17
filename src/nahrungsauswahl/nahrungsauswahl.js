"use strict";

import stylesheet from "./nahrungsauswahl.css";
import Database from "../database.js"


export default class Nahrungsauswahl {

  constructor(app) {
    this._app = app;
  //  var kalorienanzahl = localStorage.getItem("kalorienanzahl");
  //  console.log(kalorienanzahl);

    let all_breakfast_g = document.getElementsByName("breakfast_g");
       this.a_gericht_b = all_breakfast_g.forEach(element => element.addEventListener('click', this.updateBreakfast));
    let all_lunch_g = document.getElementsByName("lunch_g");
      this.a_gericht_l = all_lunch_g.forEach(element => element.addEventListener('click', this.updateLunch));
    let all_dinner_g = document.getElementsByName("dinner_g");
      this.a_gericht_d = all_dinner_g.forEach(element => element.addEventListener('click', this.updateDinner));

    this.a_nahrungsauswahl = [this.a_gericht_b, this.a_gericht_l, this.a_gericht_d];
    document.getElementById("bSpeichereGericht").addEventListener("click", this.saveNahrungsauswahl);

  }
/*
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
          var gericht_bezeichnung = "Wurst/Käsebrot";
          var gericht_kalorienanzahl = 500;
          break;
          case "breakfast_g3":
          var gericht_bezeichnung = "Müsli";
          var gericht_kalorienanzahl = 600;
          break;
          case "breakfast_g4":
          var gericht_bezeichnung = "Omelette";
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
          var gericht_bezeichnung = "Wurst/Käsebrot";
          var gericht_kalorienanzahl = 500;
          break;
          case "dinner_g2":
          var gericht_bezeichnung = "Pizza";
          var gericht_kalorienanzahl = 900;
          break;
          case "dinner_g3":
          var gericht_bezeichnung = "Lachsbrötchen";
          var gericht_kalorienanzahl = 700;
          break;
          case "dinner_g4":
          var gericht_bezeichnung = "Nudeln";
          var gericht_kalorienanzahl = 600;
          break;
          default:
        }
        a_gericht_d = [gericht_bezeichnung, gericht_kalorienanzahl];
        console.log(a_gericht_d);
        return a_gericht_d;
      }
    }
  }
*/
  saveNahrungsauswahl(){

    ///Breakfast
    let a_gericht_b;
    var breakfast = document.getElementsByName('breakfast_g');
    for (var i = 0, length = breakfast.length; i < length; i++) {
      if (breakfast[i].checked) {
        switch (breakfast[i].value) {
          case "breakfast_g1":
          var gericht_bezeichnung = "Obst";
          var gericht_kalorienanzahl = 300;
          break;
          case "breakfast_g2":
          var gericht_bezeichnung = "Wurst/Käsebrot";
          var gericht_kalorienanzahl = 500;
          break;
          case "breakfast_g3":
          var gericht_bezeichnung = "Müsli";
          var gericht_kalorienanzahl = 800;
          break;
          case "breakfast_g4":
          var gericht_bezeichnung = "Omelette";
          var gericht_kalorienanzahl = 1000;
          break;
          default:
        }
        a_gericht_b = [gericht_bezeichnung, gericht_kalorienanzahl];
      }}

    ///Lunch
    let a_gericht_l;
    var lunch = document.getElementsByName('lunch_g');
    for (var i = 0, length = lunch.length; i < length; i++) {
      if (lunch[i].checked) {
        switch (lunch[i].value) {
          case "lunch_g1":
          var gericht_bezeichnung = "Steak";
          var gericht_kalorienanzahl = 900;
          break;
          case "lunch_g2":
          var gericht_bezeichnung = "Fisch";
          var gericht_kalorienanzahl = 800;
          break;
          case "lunch_g3":
          var gericht_bezeichnung = "Nudeln";
          var gericht_kalorienanzahl = 1200;
          break;
          case "lunch_g4":
          var gericht_bezeichnung = "Risotto";
          var gericht_kalorienanzahl = 1000;
          break;
          default:
        }
        a_gericht_l = [gericht_bezeichnung, gericht_kalorienanzahl];
        }}
    ///Dinner
    let a_gericht_d;
    var dinner = document.getElementsByName('dinner_g');
    for (var i = 0, length = dinner.length; i < length; i++) {
      if (dinner[i].checked) {
        switch (dinner[i].value) {
          case "dinner_g1":
          var gericht_bezeichnung = "Wurst/Käsebrot";
          var gericht_kalorienanzahl = 500;
          break;
          case "dinner_g2":
          var gericht_bezeichnung = "Pizza";
          var gericht_kalorienanzahl = 900;
          break;
          case "dinner_g3":
          var gericht_bezeichnung = "Lachsbrötchen";
          var gericht_kalorienanzahl = 700;
          break;
          case "dinner_g4":
          var gericht_bezeichnung = "Nudeln";
          var gericht_kalorienanzahl = 1200;
          break;
          default:
        }
        a_gericht_d = [gericht_bezeichnung, gericht_kalorienanzahl];
    }}

    console.log(a_gericht_b );
    console.log(a_gericht_l );
    console.log(a_gericht_d );
    let gericht = new Database.Gericht();
    let bez="";
    let kal="";
    if (!a_gericht_b&&!a_gericht_l){
      bez=a_gericht_d[0]+"("+a_gericht_d[1]+")";
      kal=a_gericht_d[1];
    }
    else if(!a_gericht_b&&!a_gericht_d){
      bez=a_gericht_l[0]+"("+a_gericht_l[1]+")";
      kal=a_gericht_l[1];
    }
    else if(!a_gericht_l&&!a_gericht_d){
      bez=a_gericht_b[0]+"("+a_gericht_b[1]+")";
      kal=a_gericht_b[1];
    }
    else if(!a_gericht_b){
      bez=a_gericht_l[0]+"("+a_gericht_l[1]+"), "+a_gericht_d[0]+"("+a_gericht_d[1]+")";
      kal=a_gericht_l[1]+a_gericht_d[1];
    }
    else if(!a_gericht_l){
      bez=a_gericht_b[0]+"("+a_gericht_b[1]+"), "+a_gericht_d[0]+"("+a_gericht_d[1]+")";
      kal=a_gericht_b[1]+a_gericht_d[1];
    }
    else if(!a_gericht_d){
       bez=a_gericht_b[0]+"("+a_gericht_b[1]+"), "+a_gericht_l[0]+"("+a_gericht_l[1]+")";
       kal=a_gericht_b[1]+a_gericht_l[1];
    }
    else {
      bez=a_gericht_b[0]+"("+a_gericht_b[1]+"), "+a_gericht_l[0]+"("+a_gericht_l[1]+"), "+a_gericht_d[0]+"("+a_gericht_d[1]+")";
      kal=a_gericht_b[1]+a_gericht_l[1]+a_gericht_d[1];
    }

    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var y = today.getFullYear();

    let datum = d+"."+m+"."+y;

    var kalorienbedarf = localStorage.getItem("kalorienanzahl");


    let datensatz={
      datum: datum,
      bezeichnung: bez,
      kalorienanzahl: kal,
      kalorienbedarf: kalorienbedarf,
    }

    gericht.saveNew(datensatz);

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
