const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
// const uuid = require('./helpers/uuid');

// Creates port
const PORT = process.env.PORT || 3001;

// initializes express
const app = express();

// Middleware
// Auto-parses and stringifies
app.use(express.json());
// prevents invalid characters in the url
app.use(express.urlencoded({ extended: true }));

// Sends entire public folder to browser
app.use(express.static('public'));

// Route
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Listens to anything that happens on port 3001; and then can respond.  
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
