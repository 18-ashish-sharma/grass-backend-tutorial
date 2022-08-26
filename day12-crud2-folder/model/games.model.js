const mongoose = require("mongoose");

const GamesSchema = new mongoose.Schema({
  game_name: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 2) throw new Error("Please enter Game name more than two characters");
    },
  },
  no_of_players: {
    type: Number,
    default: 2,
    validate(value) {
      if (value < 2) throw new Error("At least two players must be specified");
    },
  },
  name_of_players: {
    type: Array,
  },
  equipments: {
    type: Array,
  }
});

const Game = mongoose.model("Game", GamesSchema);

module.exports = Game;
