var openSocket = require("socket.io-client");
const socket = openSocket("http://localhost:5000");

var messagesUlTag = document.querySelector(".messagesList");
var messageFormTag = document.querySelector(".newMessageForm");
var messageInputTag = messageFormTag.querySelector("input");

messageFormTag.addEventListener("submit", submitMessage);

function submitMessage(event) {
  event.preventDefault();
  var message = messageInputTag.value;
  socket.emit("newMessage", message);

  messageInputTag.value = "";
}

socket.on("noti", getNoti);

function getNoti(data) {
  console.log(data);
}
