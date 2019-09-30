// 1. 
// Move the books array into its own file, import it into index.js

// 2. 
// Add three more books to the books array

// 3. 
// Create a route that randomly selects three books from your array, research .sample from the underscore library

// 4. 
// Create a new array called authors (in an authors.js file), import it into your index.js

// 5. 
// Remove the author name attribute from your books objects, instead replace it with an author id, an author has many books is the relationship 

// 6. 
// Add an endpoint for creating new authors

// 7. 
// Add an endpoint for reading all authors

// 8.
// Add an endpoint for reading one author

// 9. 
// Add a method that automatically increments the id related to your books and authors data structures, id should increment up by 1 like in Rails

// 10.
// Read through the following docs
// https://expressjs.com/en/guide/routing.html
// https://expressjs.com/en/guide/writing-middleware.html
// https://expressjs.com/en/4x/api.html#express
// https://expressjs.com/en/4x/api.html#req

// 11.
// Make two directories, one called backend, the other called frontend
// Move all of the Express code into the backend directory
// In the frontend directory add an HTML file that fetches the data from your backend (start with displaying all books)  
// You'll get an error
// Research CORS and fix the error https://www.npmjs.com/package/cors

// 12.
// Ensure that there's no duplicate names in our book data structure, if there's a duplicate book trying to be added respond with a 404 "cant add duplicate book" error

// Optional

// 13. 
// Research url encoded payloads
// From postman send a url encoded request body to the add books endpoint (instead of JSON)

// 14.
// Remove the in memory data structures and replace them with hard disk .json files
// When you add a new book or author it should be added to the .json file
// This way even when you stop the server you won't be losing any data

// 15.
// Research how to use Express to send server rendered HTML files 
// Use the Pug templating engine to write dynamic HTML
// https://pugjs.org/api/getting-started.html
// There should be a page that lists all books
// You should be able to click on a link that then lists the one book
// Work out how to style the page