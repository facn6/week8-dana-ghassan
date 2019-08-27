const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

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
