# RESTful Routing

## Introduction
* Define REST and explain WHY it matters
	* REpresentational State Transfer
	* Pattern for defining our routes
	* A mapping between HTTP routes and CRUD functionality
		* CRUD: Create, Read, Use, Destroy
	* It's conventional, reliable
* List all 7 RESTful routes
* Show example of RESTful routing in practice

|Name|Path|HTTP Verb|Purpose|Mongoose Method|
|--- |--- |--- |--- |--- |
|Index|/dogs|GET|List all dogs|Dog.find()|
|New|/dogs/new|GET|Show new dog form|N/A|
|Create|/dogs|POST|Create a new dog, then redirect somewhere|Dog.create()|
|Show|/dogs/:id|GET|Show info about one specific dog|Dog.findById()|
|Edit|/dogs/:id/edit|GET|Show edit form for one dog|Dog.findById()|
|Update|/dogs/:id|PUT|Update particular dog, then redirect somewhere|Dog.findByIdAndUpdate()|
|Destroy|/dogs/:id|DELETE|Delete a particular dog, then redirect somewhere|Dog.findByIdAndRemove()|


## Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template
* Add Simple Nav Bar

## Basic Layout
* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Nav

## Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

## SHOWtime
* Add Show route
* Add Show template
* Add links to show page
* Style show template

## Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override
	* To use method except GET, POST
	* `<form action="url...?_method=PUT"`
	* install method-override package and use in express
	
## DESTROYYYYY
* Add Destroy Route
* Add Edit and Destroy Links

## Final Updates
* Sanitize blog body
	* to prevent entering javascript code
	* `express-sanitizer` package
* Style Index
* Update REST Table