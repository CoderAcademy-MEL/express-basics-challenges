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

