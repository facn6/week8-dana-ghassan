const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const postData = require("../src/queries/postData.js");

var bodyParser = require("body-parser");
var hbs = require("hbs");
var favicon = require("serve-favicon");
var app = express();

app.use(favicon(path.join(__dirname, "..", "public", "favicon.ico")));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

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

app.post("/content", urlencodedParser, (req, res) => {
  // response = {
  //   first_name: req.body.first_name,
  //   last_name: req.body.last_name,
  //   interest: req.body.interests,
  //   email: req.body.email,
  //   phone_number: req.body.phone_number
  // };
  postData(
    req.body.first_name,
    req.body.last_name,
    req.body.interests,
    req.body.email,
    req.body.phone_number,
    (err, res) => {}
  );
  // console.log(response);
  // res.end(response);
});

module.exports = app;
