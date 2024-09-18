const express = require('express');

const app = express();

// handle home route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// listen on port 1245
app.listen(1245);

module.exports = app;
