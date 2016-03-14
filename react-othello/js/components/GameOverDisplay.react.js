var React = require("react");
var Dimension = require('../game/OthelloDimension');
var GameLogic = require('../game/GameLogic');

var GameOverDisplay = React.createClass({
  'render': function() {

    var divStyle = {
      'width': Dimension.get('chartWidth') + "px",
      'height': Dimension.get('chartHeight') + "px",
      'backgroundColor': '#aaa'
    };

    var btnStyle = {
      'textAlign': 'center'
    };

    var count = GameLogic.count(this.props.board);
    var label = "";
    var name = "";
    if(count['@'] == count['O']) {
      label = "Draw Game";
      name = "";
    }
    else if(count['@'] > count['O']) {
      label = "Winner";
      name = this.props.playerName['@'];
    }
    else {
      label = "Winner";
      name = this.props.playerName['O'];
    }

    return (
      <div className="turnDisplay" style={divStyle}>
        <div className="panelCell">
          <p className="panelText">
            <br/>
            {label}
            <br/>
            {name}
            <br/>
          </p>
        </div>

        <div className="panelCell" style={btnStyle}>
          <button
            type="button" className="btn btn-primary"
            onClick={this.props.onNewGame}
          >New Game</button>
        </div>
      </div>
    );
  }
});
module.exports = GameOverDisplay;
