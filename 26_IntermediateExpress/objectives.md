# Rendering HTML and Templates

* Use res.render() to renter HTML(form an EJS file)
* Explain what EJS is and why we use it
	* Embedded javascript
	* use `<%= %>`
	* pass variable : `{ejsVar: data}`
* Pass variables to EJS templates

# EJS Control Flow

* Show examples of contol flow in EJS templates
	* `<%= %>`: returns value
	* `<% %>`: just evaluates js code.
		* if, loop statements
* Write if statements in an EJS file
* Write loops in an EJS file

# Styles And Partials

* Show how to properly include public assets
	* add js, css files in `/public`
* Properly configure our app to use EJS
	* `npm install ejs --save`
* Use partials to dry up our code!
	* `<%- include(""); %>`: root folder is /views
	* patial `.ejs` file goes `/views`. and directory to include is `/fileName`
	
# Post Requests!!!

* Write post routes, and test them with Postman
	* `app.post("/url", function)`
* Use a form to send a post request
	* `<form action="/url", method="POST">` : method = http verb(post, get...)
	* `<input name="varName" ~` : name used in request body
	* `res.redirect("/url")` : go back to url route from post route
* Use a body parser to get form data
	* `npm install body-parser`
	* change request body to javascript object