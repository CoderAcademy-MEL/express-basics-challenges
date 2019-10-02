const express = require('express')
const app = express();
const morgan = require('morgan');
const ObjectID = require('mongodb').ObjectID;

const MongoClient = require('mongodb').MongoClient;

// 1.
// You can seed your cluster with sample data sets
// To do this go to the menu with the three dots => LOAD SAMPLE DATASET
// This will take some time to upload, but you'll soon have a range of sample data sets like airbnb and weather data

// 2.

// a.
// replace the uri variable below with your own mongodb atlas connection link
// you can access this in CONNECT => CONNECT YOUR APPLICATION => COPY 
// if you're getting an authorization error you can change your password in DATABASE ACCESS 

// b.
// cd into the 04-mongodb-driver directory
// run npm install

const uri = "mongodb+srv://<yourname>:<yourpassword>@<your-cluster-name>.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    throw(err)
  }
  else {
    const collection = client.db("sample_mflix").collection("comments");

    app.listen(5000, () => {
      console.log('Listening on Port 5000');
    })
  
    app.use(morgan('dev'))
    app.use(express.json())
  
    app.get('/comments', (req, res, next) => {
      // 3.
      // Find only the first 10 comments and send them back to the client
      // Read the mongodb npm docs to figure out how to do it https://www.npmjs.com/package/mongodb#start-a-mongodb-server
      // Hint: use the .limit() function to limit the data being sent back, the collection is massive so it's a bit slow to return
    })
  
    app.get('/comments/:id', (req, res, next) => {
      const id = ObjectID(req.params.id)
      // 4.
      // Find the commend that matches what's passed in as a param
    })
  
    app.post('/comments', (req, res, next) => {
      // 5.
      // Insert a new comment into the comments collection
    })
  
    app.delete('/comments/delete/:id', (req, res, next) => {
      let id = ObjectID(req.params.id);
      // 6.
      // Delete the comment that matches what's passed in as a param
    });

      // 7.
      // Use the async / await syntax instead, the toArray() method returns a promise when means you can await the result

      // 8.
      // Optional challenge:
      // Create an endpoint that sends a HTML file with a form
      // In this HTML file write some javascript in a <script> that makes a POST fetch request to your backend to add a new comment, you shouldn't have any cors issues with this approach as everything is running on the same port

  }
  client.close();
});