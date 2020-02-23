var movieDB = [
    {
        title: "Parasite",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Mad Max Fury Road",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Les Miserables",
        hasWatched: false,
        rating: 3.5
    }
];

movieDB.forEach(function(movie){
   var watchedString = ""; 
   if(movie.hasWatched) {
       watchedString = "You have watched";
   } 
   else {
       watchedString = "You have not seen";
   }

   console.log(watchedString + " \"" + movie.title + "\" - " + movie.rating + " stars");
});