// Node JS includes http and path by default.

const http = require("http");
const path = require("path");

// Install express module.
const express = require("express");

// start an app and define port number.
const app = express();
const port = 5000;

// get method : path /

app.get("/", (req, res) => res.send("Chat App - Backend"));

// Listening the app on port 5000.

app.listen(port, function() {
  console.log(`App is running on port ${port}`);
});
