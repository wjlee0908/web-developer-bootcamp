# YelpCamp
* Add Landing Pge
* Add Campgrounds that lists all campgrounds

Each Campground has:
* Name
* Image

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

# Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

# Show Page
* Review the RESTful routes we've seen so far
	* INDEX - show all resources
	* CREATE - add new resource to database
	* NEW - show form to create new resource
* Add description to our campground model
* Show db.colleciton.drop()
	* delete all datas in collection
* Add a show route/template
	* SHOW - `dogs/:id` Shows info about one resource
	* `ModelName.findById(id, function(err, foundResource))`
	
# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

# Add Seeds File
* Add seeds.js file
* Run the seeds file every time the server starts

# Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
	* `campground/:id/comments/new`
		* comment is dependent on the campground
* Add the comment new and create routes
* Add the new comment form

# Style Show Page
* Add sidebar to show page
* Display comments nicely