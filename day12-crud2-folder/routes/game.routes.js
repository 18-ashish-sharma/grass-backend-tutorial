const express = require('express');
const GameController = require('../controller/games.controller')
const router = express.Router();

// route -> /create GameController.createGame -> function which will create data
router.post('/create', GameController.createGame);

module.exports = router;