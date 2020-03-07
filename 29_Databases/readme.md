# Databases

## Intro to Databases
* What is a database?
	* A collection of information/data
	* Has an interface
* SQL(relational) vs. NoSQL(non-relational)
	* relational: tabular
	* non-relational: flexible. nested. like javscript object

# Intro MongoDB
* What is MongoDB?
	* non realtional database
	* flexible and dynamic
* Why are we using it?
	* most popular db
		* MEAN stack : Mongo Express Angular Nodejs
	*
* Let's install it!

## Our First Mongo Commands
* `mongod` : starts mongo daemon process in order to use mongo
* `mongo` : opens mongo console
* `help`
* `show dbs` : shows all the dbs we haves
* `use` : use or create db
* `insert`
* `find`
* `update`
* `remove`

## Mongoose
* What Is Mongoose?
	* ODM : Object Data Mapper
	* javascript layer
	* `.connect()` : if db didn't exist, creates db. next time connected to same db we created.
	* `.Schema()` : plan for what a db item looks like
	* `.model()` : compile schema to model. returns object that has method
* Why are we using it?
	* way for us to write javascript and that javascript code interact with database
	* to use database in node file
* Interact with a Mongo Database using Mongoose