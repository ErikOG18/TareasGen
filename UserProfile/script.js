function showUserProfile(){
    var username = prompt("Enter your username:");
    var age = prompt("Enter your age:");
    var movies = prompt("Enter a list of your favorite movies (comma-separated):");

    // lista de peliculas
    var favoriteMovies = movies.split(',');
    // info del usuario
    console.log("User Profile:");
    console.log("Username: " + username);
    console.log("Age: " + age);
    console.log("Favorite Movies:");
    // bucle y mensaje por cada una
    favoriteMovies.forEach(function(movie)  {
        console.log("The Film " + movie.trim() + " is one of my favorites.");
    });


}
// evento
showUserProfile();