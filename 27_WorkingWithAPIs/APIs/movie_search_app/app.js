const express = require("express")
const app = express();
const rp = require("request-promise")
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	var query = req.query.search
	var url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`
	
	rp(url)
	.then(function(body){
		var data = JSON.parse(body);
		res.render("results", {data: data});
	})
	.catch(function(error){
		
	});
});

app.listen(3000, function(){
	console.log("Moive App has started!!!");
});