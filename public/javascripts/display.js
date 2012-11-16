console.log("loaded");
socket.on('displayUpdate_bob', function (coords) {
  $("#xCoordBob").text(coords.x);
  $("#yCoordBob").text(coords.y);
  $("#zCoordBob").text(coords.z);
});

socket.on('displayUpdate_joe', function (coords) {
  $("#xCoordJoe").text(coords.x);
  $("#yCoordJoe").text(coords.y);
  $("#zCoordJoe").text(coords.z);
});