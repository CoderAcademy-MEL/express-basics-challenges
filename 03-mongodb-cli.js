// 1.
// Implement a todo management tool using the Mongo CLI. The schema of DB should be modelled as the following.

// title: String,
// isComplete: Boolean,
// priority: String

// You need to be able to do the following:

// a.
// Create a new todos-app database

// b.
// Create new todos collection

// c.
// Create new todos

// d.
// Read all todos

// e. 
// Read a specific todo

// f.
// Complete a todo

// g.
// Read all todos that are high priority

// h. 
// Delete a specific todo

// 2.

// Create a pokedex mongo database for pokemon and pokemon trainers

// a.
// Create a pokemon-app database

// b.
// Create a trainers collection and a pokemon collection

// c.
// Use the Mongo CLI to populate with two trainers (obviously Ash and Gary) with the following structure:

// name: 'Ash',
// home: 'Pallet Town',
// party: [],
// pokedex: []

// d.
// Seed your pokemon database with some pokemon, they should have this structure:

// name: 'ditto'
// url: 'https://pokeapi.co/api/v2/pokemon-species/132/' (get this from pokemon api)

// e.
// Use Mongo CLI to update the two trainers with 2 pokemon in their party and 6 pokemon in their pokedex, populate the arrays with the _id fields for pokemon

// f.
// Use Mongo CLI to find a subset of pokemon that both trainers have in common