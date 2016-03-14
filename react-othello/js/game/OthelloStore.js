var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dimension = require('./OthelloDimension');
var GameLogic = require('./GameLogic');

var CHANGE_EVENT = 'change';

//// Declare game state ////

var turn = GameLogic.firstTurn();
var board = GameLogic.newBoard();
var playerName = {
  'O': "White",
  '@': "Black"
};

//// Define Store ////

var OthelloStore = assign({}, EventEmitter.prototype, {

  'getState': function() {
    return {
      'board': board,
      'turn': turn,
      'playerName': playerName,
    };
  },

  'emitChange': function() {
    this.emit(CHANGE_EVENT);
  },

  'addChangeListener': function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  'update': function(b, t) {
    if(b !== null)
      board = b;
    if(t !== null)
      turn = t;
  }
});

module.exports = OthelloStore;
