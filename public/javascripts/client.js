var accelerometer = new Accelerometer();
accelerometer.startListening();

setInterval(function () {
  var coords = accelerometer.getLast();
  socket.emit('clientUpdate', coords);
}, 500);