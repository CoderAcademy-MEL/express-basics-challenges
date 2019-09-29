// 1.
// Make the following endpoints using middleware

// a.
// A new endpoint that only users with the role "card game expert" is allowed to access, everyone else gets a 403 - forbidden response

// b.
// A new endpoint that only users with the role "cricket expert" cannot access (blacklisted), anyone with the role "cricket expert" gets a 402 - "you are too good at cricket" response

// c.
// A new endpoint that users with the role "admin" or "meetups expert" can access - everyone else gets a 405 - "you know you're not meant to be here" response  

// d. 
// Extend the last route to be able to be passed any number of roles and can check whether the user is in that array

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
