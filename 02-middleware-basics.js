// 1.
// Make the following endpoints using middleware 
// Note that: all of your authorization logic should be in middleware only and all the endpoints need to be POST requests as you'll be sending a request body across

// a.
// Make a new endpoint that only users with the role "card game expert" are allowed to access, everyone else gets a 403 - forbidden response
// Here's an example of the endpoint itself

// app.post('/card-game', yourMiddleware, (req, res) => {
//   res.send('you have access!')
// })

// b.
// A new endpoint that only users with the role "cricket expert" cannot access (blacklisted), anyone with the role "cricket expert" gets a 402 - "you are too good at cricket" response

// c.
// A new endpoint that users with the role "admin" or "meetups expert" can access - everyone else gets a 405 - "you know you're not meant to be here" response  

// d. 
// Extend the last route to be able to be passed any number of roles and can check whether the user is in that array
// This one is tricky, a good google search term to research the topic would be "role based middleware authorization express"
// Let a teacher know if you're having any trouble

// 2.
// We'll create a new app one with basic authentication and authorization
// It will be a one sided marketplace, admins can post new products, customers can buy products and guests can browse products
// Create a new data structure of roles, they'll be two roles: admin and customer
// Your users data structure will now have a role id, the relationship is a role has many users and a user belongs to a role
// Make sure these data structures are in their own separate files that are imported into index.js

// 3.
// Create a products data structure
// Products will have an id, name, price, inventory and sku

// 4.
// Create a function that auto increments the id when a new product is added

// 5.
// Create an endpoint to add a product, only admins can do this

// 6. 
// Create an endpoint for updating and deleting a product, only admins can do this

// 7. 
// Turn all of your data structures into JSON files
// When you start the app the data should be read into the program

// 8. 
// Add a registration endpoint for creating new customers, customers should have an id, username, password and automatically get the role of customer

// 9. 
// Add an endpoint that allows customers to buy a product, only customers should have access to this endpoint
// Inventory should be reduced by whatever the customer wants

// 10.
// Read the stripe docs and make a charge to your stripe account
// The charge will be similar to the way in which you implemented stripe in Rails
// https://stripe.com/docs/charges

// 11.
// Build out a front end for your app
// Create two new directories (backend and frontend), put all the express code (and the package.json) into the backend directory
// For the frontend fulfill the following steps
// When users land on the page they'll have the selection of products to choose from 
// Users will be able to navigate to an individual item
// On the individual item page users will be able to buy the item  
// In order to buy an item users will need to be customers therefore you'll need to include a login page
// Remember that CORS errors will be thrown, to solve CORS look up the cors package https://www.npmjs.com/package/cors