'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyA9kvQ2Rv0FdZstkT1ZLMlUDIsS1ZE1Amw",
  authDomain: "journalson-1e0a2.firebaseapp.com",
  databaseURL: "https://journalson-1e0a2.firebaseio.com",
  projectId: "journalson-1e0a2",
  storageBucket: "",
  messagingSenderId: "449163688400",
  appId: "1:449163688400:web:9ce5af1b475d829c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});