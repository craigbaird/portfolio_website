var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

// Route includes
var index = require("./index");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
  // app.use(express.static(__dirname + '/personal_website'));
app.use(express.static("public"));

// Routes
app.use("/", index);

// App Set //
app.set("port", (process.env.PORT || 5000));

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
