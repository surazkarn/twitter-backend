require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./config/database');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});

connectToDatabase()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
