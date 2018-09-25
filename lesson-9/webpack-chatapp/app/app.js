// Node JS includes http and path by default.

var http = require("http");
var path = require("path");

// express module
var express = require("express");

// create an app and a server.
var app = express();
var server = http.Server(app);
var port = 5000;

app.get("/", function(req, res) {
  res.send("<h1>Real Time Chat</h1>");
});

server.listen(port, function() {
  console.log(`Listening on port ${port}.`);
});
