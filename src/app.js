const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
var hbs = require("hbs");
require("handlebars-form-helpers").register(hbs.handlebars);

var favicon = require("serve-favicon");

var app = express();

app.use(favicon(path.join(__dirname, "..", "public", "favicon.ico")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main"
  })
);

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.render("home", {});
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.get("/content", (req, res) => {
  res.render("content", {});
});

module.exports = app;
