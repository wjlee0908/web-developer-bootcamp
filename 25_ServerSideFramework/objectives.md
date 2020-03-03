# Introduction to Express

* What is framework? How is it different from a library?
	* both are bunch of codes
	* We have less control using framework than using library
	* make development faster
* What is Express?
	* node framework
	* web development framework
* Why are we using Express?
	* popular, widely supported
	* lightweight, so great framework for someone to learn first


# Our First Express App!!!

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app!

# NPM Init and Package.json

* Use the `--save` flag to install packages
	* save packages to package.json's dependency section along with version we installed
* Explain what the package.json file does
	* bunch of metadata
	* includes list of dependency packages
* Use `npm init` to create a new package.json

# More Routing!

* Show the `*` route matcher
	* matches all
* Write routes containing route parameters
	* to make pattern
	* :prameterName
	* not wildcard. not including `/`
* Discuss route order