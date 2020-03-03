var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animalType", function(req, res){
	var animalType = req.params.animalType;
	var sound = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!"
	}
	if(sound[animalType]){
		res.send("The " + animalType + " says '" + sound[animalType] + "'");
	}
});

app.get("/repeat/:saying/:numRepeat", function(req, res){
	var numRepeat = Number(req.params.numRepeat);
	var sentStr = "";
	for(; numRepeat > 0; numRepeat--) {
		sentStr += req.params.saying + " ";
	}
	res.send(sentStr);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found... what are you doing with your life?");
});

app.listen(3000, function(){
	console.log("server has started!");
});