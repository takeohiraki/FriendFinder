// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Create server
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8080;
require("dotenv").config();

app.use(express.static(path.join(__dirname, 'app')));

// Handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, "app/routing/apiRoutes"))(app)
require(path.join(__dirname, "app/routing/htmlRoutes"))(app)

// Starts the server
// =============================================================
app.listen((PORT), function () {
  console.log("App listening on PORT " + PORT);
});
