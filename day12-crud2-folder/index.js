const express = require('express');
const app = express();
const DBCONFIG = require('./db');
const GamesRoute = require('./routes/game.routes');
const PORT = 8282;

// connect to mongo db database
DBCONFIG();

app.use(express.json());

app.use('/game', GamesRoute);



app.listen(PORT, console.log('Heya....! Server running on port', PORT));