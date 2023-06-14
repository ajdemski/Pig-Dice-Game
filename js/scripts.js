// User Interface Logic (interaction with the user interface, event handlers, etc.)

let gameBoard = new gameBoard();
function rollDice() {
  let roll = gameBoard.score();

}

function endTurn() {
  gameBoard.playerTurn();
}

// Business Interface Logic (data manipulation, calculations, game rules, etc.)

function gameBoard(){
  this.players = {};
  this.roundScore = 0;
}

function Player(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

gameBoard.prototype.score = function () {
  let min = Math.ceil(1);
  let max = Math.floor(7);
  let roll = Math.floor(Math.random() * (max - min) +min);
  this.roundScore += roll;
  return roll;
}

gameBoard.prototype.playerTurn = function () {
  let roll = this.score();
  if (roll === 1) {
    this.roundScore = 0;
  } else {

  }
}

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (max - min) + min);
}