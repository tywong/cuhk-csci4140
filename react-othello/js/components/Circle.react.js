var React = require('react');
var Dimension = require('../game/OthelloDimension');

// <Circle data={this.props.data} />

var Circle = React.createClass({

  circleClass: {
    '.': 'circle',
    'O': 'circle',
    '@': 'circle trans'
  },

  render: function() {
    var style = {
      'width': Dimension.get('circleWidth') + "px",
      'height': Dimension.get('circleHeight') + "px",
      'display': ''
    };

    var frontStyle = "front";
    var backStyle = "back";

    if(this.props.data == '.') {
      style.display = 'none';
    }

    return (
      <div className={this.circleClass[this.props.data]} style={style}>
        <div className={frontStyle} style={style}>
          <p>White</p>
        </div>
        <div className={backStyle} style={style}>
          <p>Black</p>
        </div>
      </div>
    );
  }
});

module.exports = Circle;
