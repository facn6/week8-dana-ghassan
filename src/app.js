const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const postData = require("../src/queries/postData.js");
const contentData = require("../src/queries/getData.js");

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

app.get("/content", (req, response) => {
  var data = contentData.getData((err, res) => {
    if (err) {
      return console.log(err);
    }
    let output = JSON.stringify(res);
    let dataContent = JSON.parse(output)[0];
    let dataTableContent = JSON.parse(output);

    response.render("content", { dataContent, dataTableContent });
  });
});

app.post("/content",urlencodedParser, (req, res) => {
  
  req.check('email','invalid email address').isEmail();
  var errors = req.validationErrors();
  if(errors){
    req.session.errors =errors;
  }
  postData(
    req.body.first_name,
    req.body.last_name,
    req.body.interests,
    req.body.email,
    req.body.phone_number,
    (err, res) => {}
  );
  res.redirect("/content");
});

module.exports = app;
