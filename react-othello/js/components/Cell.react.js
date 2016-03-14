var React = require('react');
var Circle = require('./Circle.react');
var Dimension = require('../game/OthelloDimension');

// <Cell
//   data={cell}
//   clickable={clickable}
//   key={keyCounter}
//   coordinates={coordinates}
//   onCellClick={handler}
// />


var Cell = React.createClass({
  render:function() {
    var style = {
      'width': Dimension.get('cellWidth') + "px",
      'height': Dimension.get('cellHeight') + "px"
    };
    var className = (this.props.clickable) ? "cell clickable" : "cell";

    var id = JSON.stringify(this.props.coordinates);

    return (
      <div style={style} className={className} onClick={this.props.onCellClick} id={id}>
        <div className="cellInfo">
          {this.props.coordinates.row} {this.props.coordinates.col}
        </div>
        <Circle data={this.props.data} />
      </div>
    );
  }
});

module.exports = Cell;
