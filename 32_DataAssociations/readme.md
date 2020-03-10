# Associations

## Intro to Associations
* Define associations
* Discuss one:one, one:many, and many:many relationships

## Embedding Data
* nested object
* type: `posts: [postSchema]`
* `push()` and `save()`

## Referencing Data
* object has id of other object
* type: `posts: [123142, 15134123, 1341234]`
* push created result
* `.populate` : express object. not just id.

## Module.Exports
* Introduce module.exports
	* to clean up code
	* break code into seperate files
* Move our models into seperate files
	* `module.exports`: return value of file