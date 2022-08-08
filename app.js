const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var items = [];

app.get("/", function(req, res){
  var today = new Date();

  var options = { weekday: 'long', month: 'long', day: 'numeric'}

  var day = today.toLocaleDateString("en-US", options)

  res.render("list", {day: day, items: items});
})

app.post("/", function(req, res){
  var item = req.body.newItem;
  items.push(item);

  res.redirect("/");
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})
