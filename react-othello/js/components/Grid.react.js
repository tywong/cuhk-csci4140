var React = require('react');
var Cell = require('./Cell.react');
var GameLogic = require('../game/GameLogic');
var Dimension = require('../game/OthelloDimension');


// <Grid
//   board={this.state.board}
//   turn={this.state.turn}
//   onCellClick={this.handleClick}
// />

var Grid = React.createClass({

  render: function() {
    var keyCounter = 0;
    var r = 0;
    var c = 0;
    var output = [];
    var handler = this.props.onCellClick;  // avoid using "bind()";
    var board = this.props.board;
    var turn = this.props.turn;

    board.forEach(function(row) {
      row.forEach(function(cell) {
        var coordinates = {'row': r, 'col': c};
        var clickable = GameLogic.checkValid(board, r, c, turn);
        output.push(
          <Cell
            data={cell}
            clickable={clickable}
            key={keyCounter}
            coordinates={coordinates}
            onCellClick={handler}
          />
        );

        keyCounter++;
        c++;
      });

      r++;
      c = 0;
    });

    var style = {
      'width': Dimension.get('gridWidth') + "px",
      'height': Dimension.get('gridHeight') + "px",
    };

    return (
      <div style={style} className='grid'>
        {output}
      </div>
    );
  }
});

module.exports = Grid;
