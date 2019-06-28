'use strict';

require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const firebase = require("firebase");
const envVars = process.env;

const firebaseConfig = {
  apiKey: envVars.apiKey,
  authDomain: envVars.authDomain,
  databaseURL: envVars.databaseURL,
  projectId: envVars.projectId,
  storageBucket: envVars.storageBucket,
  messagingSenderId: envVars.messagingSenderId,
  appId: envVars.appId
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const userRef = database.ref(`users`);

app.use(bodyParser.json())

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/users', (req, res) => {
  let { username, email, imageUrl } = req.body; 
  let user = createNewUser(username, email, imageUrl);
  console.log('wrote data');  
  res.send(user);
});

userRef.on('value', function(snapshot) {
  console.log(snapshot.val());
});

function createNewUser(username, email, imageUrl) {
  return userRef.push({
    username: username,
    email: email,
    profile_picture : imageUrl
  });
}
