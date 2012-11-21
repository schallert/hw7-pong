console.log("loaded");
var Game = {};
$(document).ready(function(){
	console.log("hi");
	Game = new Pong();
})

socket.on('displayUpdate_bob', function (coords) {
  Game.updateLeftPaddle(coords.z * 1.5);
});

socket.on('displayUpdate_joe', function (coords) {
  Game.updateRightPaddle(coords.z * 1.5);
});