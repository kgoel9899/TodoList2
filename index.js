var express = require("express");
var todoController = require("./controllers/todoController");
var PORT = process.env.PORT || 3000;
var app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"));
todoController(app);
app.listen(PORT);
console.log("You are listening to port 3000");
////
