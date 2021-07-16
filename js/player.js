
//export
class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  toString() {
    return `Player | name : ${this.name} | age : ${this.score}`;
  }
}

// function Player(name, score){
//  this.name = name;
//  this.score = score;
// }

//new way to export
// module.exports =  Player;