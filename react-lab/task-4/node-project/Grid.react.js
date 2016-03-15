var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var Cell = require('./Cell.react');

var Grid = React.createClass({
	getInitialState: function() {
    var board = new Array();
    for(var i = 0; i < 8; i++) {
      var tmp = new Array();
      for(var j = 0; j < 8; j++) {
        tmp.push(' ');
      }
      board.push(tmp);
    }
		return {'board': board};
	},
  clickHandler: function(e, x, y) {
    var val = this.state.board[x][y];
    if(val == ' ' )
      this.state.board[x][y] = 'O';
    else if(val == 'O')
      this.state.board[x][y] = '@';
    else
      this.state.board[x][y] = ' ';

    this.setState({'board':this.state.board});
  },
  render: function() {
    var output = [];
    for(var i = 0; i < 8; i++) {
      for(var j = 0; j < 8; j++) {
          var f = this.clickHandler.bind(this, null, i, j);
          output.push(
            <Cell content={this.state.board[i][j]} clickHandler={f} key={i*8+j}/>
          );
      }
    }
    return (
			<div className="grid">
				{output}
			</div>
    );
  }

});

ReactDOM.render(
  <Grid />,
	document.getElementById('display')
);
