var React = require("react");
var Chart = require('react-google-charts').Chart;
var Dimension = require('../game/OthelloDimension');
var GameLogic = require('../game/GameLogic');

// <GameScore
//   board={this.props.gameState.board}
//   playerName={this.props.gameState.playerName}
// />

var GameScore = React.createClass({
  render: function() {
    var count = GameLogic.count(this.props.board);
    return (
      <div className="footerCell">
        <p className="footerText">
          {this.props.playerName['O']} : {count['O']}
          <br/>
          {this.props.playerName['@']} : {count['@']}
        </p>
      </div>
    )
  }
});

module.exports = GameScore;
