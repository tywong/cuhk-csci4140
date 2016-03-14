var React = require('react');
var Circle = require('./Circle.react');

// <TurnDisplay turn={this.props.turn} />

var TurnDisplay = React.createClass({
  'render': function() {
    return (
      <div className="turnDisplay">
        <div className="panelCell">
          <p className="panelText">
            Current Turn
          </p>
        </div>

        <div className="panelCell">
          <Circle data={this.props.turn} />
        </div>
      </div>
    );
  }
});

module.exports = TurnDisplay;
