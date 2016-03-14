var React = require('react');
var TurnDisplay = require('./TurnDisplay.react');
var GameOverDisplay = require('./GameOverDisplay.react');
var PassDisplay = require('./PassDisplay.react');
var GameScore = require('./GameScore.react');
var GameLogic = require('../game/GameLogic');
var Dimension = require('../game/OthelloDimension');


// <Panel
//   turn={this.state.turn}
//   board={this.state.board}
//   playerName={this.state.playerName}
//   onConfirmPass={this.confirmPass}
// />

// <Panel
//   gameState={this.state}
//   onConfirmPass={this.confirmPass}
// />

var Panel = React.createClass({

  render: function() {

    var panelStyle = {
      'width': Dimension.get('panelWidth') + "px",
      'height': Dimension.get('panelHeight') + "px",
    };

    if(GameLogic.isEndGame(this.props.gameState.board)) {
      return (
        <div className="panel" style={panelStyle}>
          <TurnDisplay turn={this.props.gameState.turn} />
          <GameOverDisplay
            board={this.props.gameState.board}
            playerName={this.props.gameState.playerName}
            onNewGame={this.props.onNewGame}
          />
          <GameScore
            board={this.props.gameState.board}
            playerName={this.props.gameState.playerName}
          />
        </div>
      )
    }
    else {
      return (
        <div className="panel" style={panelStyle}>
          <TurnDisplay turn={this.props.gameState.turn} />
          <PassDisplay
            playerName={this.props.gameState.playerName[this.props.gameState.turn]}
            onConfirmPass={this.props.onConfirmPass}
            showPass={GameLogic.needPass(this.props.gameState.board, this.props.gameState.turn)}
          />
          <GameScore
            board={this.props.gameState.board}
            playerName={this.props.gameState.playerName}
          />
        </div>
      );
    }
  }
});

module.exports = Panel;
