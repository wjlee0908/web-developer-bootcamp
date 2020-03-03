var faker = require('faker');

console.log("=======================");
console.log("WELCOME TO MY SHOP!");
console.log("=======================");

var productName = "";
var price = "";
for(var i=0; i<10; i++) {
	productName = faker.commerce.productName();
	price = faker.commerce.price();
	console.log(productName + " - $" + price);
}