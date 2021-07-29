"use strict";
const mainPageWeb = "../mainPage/competition.html";


function addPlayer() {
   const txtName = document.getElementById("txtName");
   const txtScore = document.getElementById("txtScore");
   if (!txtName.checkValidity()) {
      document.getElementById("checkName").innerHTML = "Name length [3-10]";
   }
   //  dont need cuz we have css:invalid work with this but cant work input type to show
   //  content message
   // if (!txtScore.checkValidity()) {
   //    document.getElementById("checkScore").innerHTML = "Score must be 0-100";
   // }
   if (txtName.checkValidity() && txtScore.checkValidity()) {
      const nameValue = document.getElementById("txtName").value;
      const scoreValue = document.getElementById("txtScore").value;
      let players = localStorage.getItem("players");
      players = (players) ? JSON.parse(players) : [];
      players.filter(player => player.name !== nameValue);
      players.push(new Player(nameValue, scoreValue));
      localStorage.setItem("players", JSON.stringify(players));

      // new discovery
      window.location.replace(mainPageWeb);
   }
}

function reset() {
   document.getElementById("result").innerHTML = "";
}

function showResult(request) {
   const players = localStorage.getItem("players");
   document.getElementById("result").innerHTML = "No available";
   if (request === "showAll") {
      listPlayer(players);
      return;
   }
   findWinner(players);
}

function listPlayer(players) {
   if (players !== null && players.length > 0) {
      reset();
      //we need to parse
      players = JSON.parse(players);
      document.getElementById("result").innerHTML = `List of user:</br>`;
      players.forEach(
         item => document.getElementById("result").innerHTML += `Name: ${item["name"]} Score: ${item["score"]} </br>`
      );
   }
}

function findWinner(players) {
   if (players !== null && players.length > 0) {
      reset();
      players = JSON.parse(players);
      let name = players[0]["name"], score = players[0]["score"];
      for (let index = 1; index < players.length; index++) {
         if (score < players[index]["score"]) {
            name = players[index]["name"];
            score = players[index]["score"];
         }
      }
      document.getElementById("result").innerHTML = ` The winner is:
      Name:${name} Score:${score}`;
   }
}


