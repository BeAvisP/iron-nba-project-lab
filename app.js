const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const players = require("./data");

// Set the view engine to render views & the path to the views
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
// Set the path to public directory
app.use(express.static(path.join(__dirname, "public")));

// Set the path to partials directory
hbs.registerPartials(__dirname + "/views/partials");

// Generate routes
app.get("/", (req, res, next) => res.render("index"));

app.get("/players", (req, res, next) => res.render("players", players));

app.get("/teams", (req, res, next) => {
  // To skip the layout on this route
  const data = {
    layout: false,
  };
  res.render("teams", data);
});

// Listen to the server in port 3000
app.listen(3000, () => console.log("Connected to the server in port 3000"));
