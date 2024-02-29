const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define custom route for template.html
app.get('/AngelOne', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Angelone.html'));
});

app.get('/MStock', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'MStock.html'));
});

app.get('/5Paisa', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '5Paisa.html'));
});

app.get('/HDFCSky', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'HDFCSky.html'));
});

app.get('/unavailable', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'msg.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
