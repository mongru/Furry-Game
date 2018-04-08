var Game = require("./game.js");

var game = new Game();

// document.getElementById('reset').addEventListener('click', function() {
//   document.getElementById('over').classList.add("invisible");
//   var nextTry = new Game();
//   nextTry.showFurry();
//   nextTry.showCoin();
//   nextTry.startGame();
// });

document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});

game.showFurry();

game.showCoin();

game.startGame();
