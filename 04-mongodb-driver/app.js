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
// run npm install

const uri = "mongodb+srv://<yourname>:<yourpassword>@<your-cluster-name>.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    throw(err)
  }
  else {
    const collection = client.db("sample_mflix").collection("netflix");

    app.listen(5000, () => {
      console.log('Listening on Port 5000');
    })
  
    app.use(morgan('dev'))
    app.use(express.json())
  
    app.get('/comments', (req, res, next) => {
      // 3.
      // Read the mongodb npm docs to figure out how to do it https://www.npmjs.com/package/mongodb#start-a-mongodb-server
      // Find only the first 10 comments and send them back to the client
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
      // Optional challenge:
      // Create a new frontend directory with an index.html
      // Add a form
      // This form should send the data to the comments POST endpoint to add a comment

  }
  client.close();
});