const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define custom route for template.html
app.get('/AngelOne', (req, res) => {
  res.sendFile('public/AngelOne.html', { root: __dirname });
});

app.get('/MStock', (req, res) => {
  res.sendFile('public/MStock.html', { root: __dirname });
});

app.get('/5Paisa', (req, res) => {
  res.sendFile('public/5Paisa.html', { root: __dirname });
});

app.get('/HDFCSky', (req, res) => {
  res.sendFile('public/HDFCSky.html', { root: __dirname });
});

app.get('/unavailable', (req, res) => {
  res.sendFile('public/msg.html', { root: __dirname });
});

app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
