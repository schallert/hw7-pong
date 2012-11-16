var accelerometer = new Accelerometer();
accelerometer.startListening();

var clientName = $("#clientName").text();

setInterval(function () {
  var coords = accelerometer.getLast();
  socket.emit('clientUpdate_' + clientName, coords);
}, 250);