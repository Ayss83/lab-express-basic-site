const express = require("express");
const app = express();

app.use(express.static('starter-code/public'));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});



app.listen(3000, () => {
  console.log("server started!");
});