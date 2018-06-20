var bodyParser = require('body-parser');
var mongoose = require("mongoose");
mongoose.connect("mongodb://test:test123@ds163510.mlab.com:63510/todolisttest");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var todoSchema = new mongoose.Schema({
  item: String
});
var Todo = mongoose.model("Todo", todoSchema);
module.exports = function(app) {
  app.get("/todo", function(req, res){
    Todo.find({}, function(err, data){
      if(err) {
        throw err;
      }
      else{
        res.render("todo", {todos: data});
      }
    });
  });
  app.post("/todo", urlencodedParser, function(req, res){
    var newTodo = Todo(req.body).save(function(err, data){
      if (err) {
        throw err;
      }
      else{
        res.json(data);
      }
    });
  });
  app.delete("/todo/:item", function(req, res){
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
      if (err) {
        throw err;
      }
      else{
        res.json(data);
      }
    });
  });
};
