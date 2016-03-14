var React = require('react');
var Grid = require('./Grid.react');
var Panel = require('./Panel.react');
var OthelloStore = require('../game/OthelloStore');
var Dimension = require('../game/OthelloDimension');
var OthelloActions = require('../game/OthelloActions');

var Game = React.createClass({

  getInitialState: function() {
    OthelloStore.setGame(this);
    return OthelloStore.getState();
  },

  handleClick: function(e) {
    var c = JSON.parse(e.currentTarget.id);
    OthelloActions.humanClick(c);
  },

  confirmPass: function(e) {
    console.log(__filename + ": pass confirmed.");
    OthelloActions.pass();
  },

  newGame: function(e) {
    OthelloActions.newGame();
  },

  render: function() {
    var style = {
      'width': Dimension.get('gameWidth') + "px",
      'height': Dimension.get('gameHeight') + "px",
    };

    return (
      <div style={style} className="game">
        <Panel
          gameState={this.state}
          onConfirmPass={this.confirmPass}
          onNewGame={this.newGame}
        />
        <Grid
          board={this.state.board}
          turn={this.state.turn}
          onCellClick={this.handleClick}
        />
      </div>
    );
  }
});

module.exports = Game;
