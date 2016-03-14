var React = require('react');
var Dimension = require('../game/OthelloDimension');

// <PassDisplay
//   playerName={this.props.gameState.playerName[this.props.gameState.turn]}
//   onConfirmPass={this.props.onConfirmPass}
//   showPass={GameLogic.needPass(this.props.gameState.board, this.props.gameState.turn)}
// />

var PassDisplay = React.createClass({
  render: function() {
    var divStyle = {
      'backgroundColor': ((this.props.showPass) ? '#aaa' : ''),
      'width': Dimension.get('chartWidth') + "px",
      'height': Dimension.get('chartHeight') + "px",
    };

    var btnStyle = {
      'backgroundColor': ((this.props.showPass) ? '#aaa' : ''),
      'display': ((this.props.showPass) ? '' : 'none'),
      'textAlign': 'center'
    };

    return (
      <div className="turnDisplay" style={divStyle}>
        <div className="footerCell" style={btnStyle}>
          <p className="footerText">
            <br/>
            {this.props.playerName}
            <br/>
            No more move!
          </p>
        </div>

        <div className="footerCell" style={btnStyle}>
          <button
            type="button" className="btn btn-danger"
            onClick={this.props.onConfirmPass}
          >Pass</button>
        </div>
      </div>
    );
  }
});

module.exports = PassDisplay;
