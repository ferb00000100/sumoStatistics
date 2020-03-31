
const express = require("express");
const routes = require("./routes");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes
app.use(routes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("sumo-audit/build"));
}
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./sumo-audit/build/index.html"));
});

app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


