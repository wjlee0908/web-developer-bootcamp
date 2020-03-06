const rp = require('request-promise');

console.log("weather of city: ")
rp('http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22')
	.then((body) => {
		var parsedData = JSON.parse(body);
		console.log(parsedData.weather[0].main);
	})
	.catch((err) => {
		console.log('Error',err);
	});

	
