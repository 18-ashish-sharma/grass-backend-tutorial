const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Grass Team')
});

app.listen(3000, console.log('Server is listening on port 3000'));