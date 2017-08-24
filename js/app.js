console.log("Hello Furry!");

var Game = require("./game.js");

//Uruchomienie
var game = new Game();

//wywołanie metod i eventu keydown

document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});

game.showFurry();

game.showCoin();

game.startGame();
