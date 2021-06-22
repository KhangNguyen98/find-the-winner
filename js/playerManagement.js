//why sometime it get error??

// import  {Player} from "./player.js";

"use strict";

//new way to import;
// const Player = require("./player");


//import { Player } from "player.js";
let mainPageWeb = "http://127.0.0.1:5500/mainPage/competition.html";

// const listPlayer = [];

function addPlayer(){
 let txtName = document.getElementById("txtName");
 let txtScore = document.getElementById("txtScore");
 if(!txtName.checkValidity()){
    document.getElementById("checkName").innerHTML = "Name length [3-10]";
 }
//  dont need cuz we have css:invalid work with this but cant work input type to show
//  content message
 if(!txtScore.checkValidity()){
  document.getElementById("checkScore").innerHTML = "Score must be 0-100";
 }
 if(txtName.checkValidity() && txtScore.checkValidity()){
   //OMG 
    // txtName = document.getElementById("txtName").value;
    // txtScore = document.getElementById("txtScore").value;
    let nameValue = document.getElementById("txtName").value;
    let scoreValue = document.getElementById("txtScore").value;
  //  if(localStorage.getItem("players") == null
  //    || localStorage.getItem("players") == undefined){
  //    alert("Created");
  //    let listPlayer = [];
  //    localStorage.saveItem("list", listPlayer);
  //  }
  let players = localStorage.getItem("players");
  players = (players) ? JSON.parse(players) : [];
  players.filter(player => player.name != nameValue);
  players.push(new Player(nameValue, scoreValue));
  localStorage.setItem("players", JSON.stringify(players));
 

  // new discovery
  window.location.replace(mainPageWeb);
  window.location("https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript");
 }
}

function listPlayer(){ 
   let players = localStorage.getItem("players");
   console.log(players);
   if(players != undefined  && players.length > 0){
      //we need to parse
      players = JSON.parse(players);
       players.forEach(
          item => document.getElementById("players").innerHTML += `Name: ${item["name"]} Score: ${item["score"]} </br>` 
       );;
   } else {
      document.getElementById("players").innerHTML = "No available";
   }
   document.getElementById("winner").innerHTML = "";
}

function findWinner(){
   let players = localStorage.getItem("players");
   if(players != undefined  && players.length > 0){
      players = JSON.parse(players);
      let name = players[0] ["name"], score  = players[0] ["score"];
      for (let index = 1; index < players.length; index++) {
         if(score < players[index]["score"]){
            name = players[index]["name"];
            score = players[index]["score"];
         }
      }
       document.getElementById("winner").innerHTML = `Name:${name} Score:${score}`; 
   } else {
      document.getElementById("winner").innerHTML = "No available";
   }
   document.getElementById("players").innerHTML = "";
}


