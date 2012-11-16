console.log("loaded");
socket.on('displayUpdate', function (coords) {
  $("#xCoord").text(coords.x);
  $("#yCoord").text(coords.y);
  $("#zCoord").text(coords.z);
});