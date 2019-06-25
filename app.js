'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const firebase = require("firebase");

// config
require('dotenv').config()
const envVars = process.env;

var firebaseConfig = {
  apiKey: envVars.apiKey,
  authDomain: envVars.authDomain,
  databaseURL: envVars.databaseURL,
  projectId: envVars.projectId,
  storageBucket: envVars.storageBucket,
  messagingSenderId: envVars.messagingSenderId,
  appId: envVars.appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});