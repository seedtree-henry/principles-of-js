var openSocket = require("socket.io-client");
const socket = openSocket("http://localhost:5000");

setInterval(emitEvent, 2000);

function emitEvent() {
  console.log("Emit an event.");
  socket.emit("newEvent", "Are you listening?");
}
