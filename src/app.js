const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
var app = express();
var controller = require("./controller");

var favicon = require("serve-favicon");

app.set("port", process.env.PORT || 5555);

app.use(favicon(path.join(__dirname, "..", "public", "favicon.ico")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(controller);

module.exports = app;
