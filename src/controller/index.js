const path = require("path");

const express = require("express");
var app = express();

const postData = require("../../src/queries/postData.js");
const contentData = require("../../src/queries/getData.js");
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("views", path.join(__dirname,'..',"views"));

app.get("/", (req, res) => {
    res.render("home", {});
  });
  
  app.get("/contact", (req, res) => {
    res.render("contact", {});
  });
  
  app.get("/content", (req, response) => {
    contentData.getData((err, res) => {
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