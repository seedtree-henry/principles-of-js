// Node JS includes http and path by default.

var http = require("http");
var path = require("path");

// express module
var express = require("express");
var socketIO = require("socket.io");

// create an app and a server.
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var port = 5000;

app.get("/", function(req, res) {
  res.send("<h1>Real Time Chat</h1>");
});

io.on("connection", handleConnections);

function handleConnections(socket) {
  console.log(socket.id);

  socket.on("newMessage", function(data) {
    console.log(data);
  });
}

server.listen(port, function() {
  console.log(`Listening on port ${port}.`);
});
