const path = require("path");

const express = require("express");
var app = express();

const postData = require("../../src/models/queries/postData.js");
const contentData = require("../../src/models/queries/getData.js");
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("views", path.join(__dirname,'..',"views"));

app.get("/", (req, res) => {
    res.render("home", {});
  });
  
  app.get("/contact", (req, res) => {
    res.render("contact", {});
  });
  
  app.get("/content", (req, response , next) => {
    contentData.getData()
    .then(resultData =>
      {
        let output = JSON.stringify(resultData.rows);
        let dataContent = JSON.parse(output)[0];
        let dataTableContent = JSON.parse(output);
        response.render("content", { dataContent, dataTableContent })
  })
  .catch(err => next(err));
  });
  
  app.post("/content",urlencodedParser, (req, res, next) => {
    
    postData(
      req.body.first_name,
      req.body.last_name,
      req.body.interests,
      req.body.email,
      req.body.phone_number,
    ).then(res.redirect("/content"))
    .catch(err => next(err));

  });

module.exports = app;