var GameLogic = require("./GameLogic");
var OthelloStore = require('./OthelloStore');


var OthelloActions = {
  humanClick: function(c) {
    var state = OthelloStore.getState();
    if(GameLogic.checkValid( state.board, c.row, c.col, state.turn )) {

      GameLogic.updateBoard( state.board, c.row, c.col, state.turn );

      OthelloStore.update(
        state.board,
        GameLogic.nextTurn(state.turn)
      );

      OthelloStore.emitChange();
    }
  },
  pass: function() {
    var state = OthelloStore.getState();
    OthelloStore.update(
      null,
      GameLogic.nextTurn(state.turn)
    );
    OthelloStore.emitChange();
  },
  newGame: function() {
    window.location.reload();
  }
};

module.exports = OthelloActions;
