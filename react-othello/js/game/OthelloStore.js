var GameLogic = require('./GameLogic');

//// Declare game state ////

var turn = GameLogic.firstTurn();
var board = GameLogic.newBoard();
var playerName = {
  'O': "White",
  '@': "Black"
};

var game = null;

//// Define Store ////

var OthelloStore = {

  setGame: function(obj) {
    game =  obj;
  },

  getState: function() {
    return {
      'board': board,
      'turn': turn,
      'playerName': playerName,
    };
  },


  update: function(b, t) {
    if(b !== null)
      board = b;
    if(t !== null)
      turn = t;

    game.setState(this.getState());
  }
};

module.exports = OthelloStore;
