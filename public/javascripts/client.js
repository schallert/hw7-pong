var accelerometer = new Accelerometer();
accelerometer.startListening();

setInterval(function () {
  socket.emit('message', { coords: accelerometer.getLast() });
}, 1000);