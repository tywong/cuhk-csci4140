var Othello = (function() {

  var ROWS = 8;
  var COLS = 8;

  function boundCheck(pos) {
    return (pos.row >= 0 && pos.row < ROWS) && (pos.col >= 0 && pos.col < COLS);
  }

  function oppenent(player) {
    return ((player == '@') ? 'O' : '@');
  }

  function isEmpty(board, pos) {
    return (board[pos.row][pos.col] == '.');
  }

  function moveAlongDir(pos, dir) {
    pos.row += dir.row;
    pos.col += dir.col;
  }

  function checkOneDir(board, start, dir, player) {
    var pos = {'row': start.row, 'col': start.col};
    var counter = 0;
    moveAlongDir(pos, dir);
    while(boundCheck(pos)) {
      if(board[pos.row][pos.col] == oppenent(player)) {
        counter++;
      }
      else if(board[pos.row][pos.col] == player) {
        return (counter > 0);
      }
      else {
        return false;
      }
      moveAlongDir(pos, dir);
    }
    return false;
  }

  function checkAllDir(board, start, player) {
    // console.log(player);
    if(board[start.row][start.col] != '.')
      return false;
    for(var i = -1; i <= 1; i++) {
      for(var j = -1; j <= 1; j++) {
        if(i === 0 && j === 0)
          continue;
        // console.log(i, j, checkOneDir(start, {'row': i, 'col': j}, player));
        if(checkOneDir(board, start, {'row': i, 'col': j}, player))
          return true;
      }
    }
    return false;
  }

  function updateOneDir(board, start, dir, player) {
    var pos = {'row': start.row, 'col': start.col};
    moveAlongDir(pos, dir);
    while(boundCheck(pos)) {
      if(board[pos.row][pos.col] == oppenent(player)) {
        board[pos.row][pos.col] = player;
      }
      else if(board[pos.row][pos.col] == player) {
        break;
      }
      moveAlongDir(pos, dir);
    }
    return;
  }

  function updateAllDir(board, start, player) {
    board[start.row][start.col] = player;
    for(var i = -1; i <= 1; i++) {
      for(var j = -1; j <= 1; j++) {
        var dir = {'row': i, 'col': j};
        if(i === 0 && j === 0)
          continue;
        if(checkOneDir(board, start, dir, player)) {
          updateOneDir(board, start, dir, player);
        }
      }
    }
  }

  function needPass(board, player) {
    for(var i = 0; i < ROWS; i++) {
      for(var j = 0; j < COLS; j++) {
        if(
          isEmpty(board, {'row':i, 'col':j}) &&
          checkAllDir(board, {'row': i, 'col': j}, player)
        ) {
          return false;
        }
      }
    }
    return true;
  }

  return {

    /// function: checkValid;
    /// return if an input from 'player' is valid or not.

    'checkValid': function(board, row, col, player) {
      return checkAllDir(board, {'row': row, 'col': col}, player);
    },

    /// function: updateBoard;
    /// update the board with a 'valid' input (row, col) from 'player'.
    /// the input cannot be invalid.

    'updateBoard': function(board, row, col, player) {
      updateAllDir(board, {'row': row, 'col': col}, player);
    },

    /// function: needPass;
    /// return if a player can make any valid move.

    'needPass': function(board, player) {
      return needPass(board, player);
    },

    /// function: isEndGame;
    /// return if both players can make any valid move.
    ///   if true: the game ends.

    'isEndGame': function(board) {
      return needPass(board, 'O') && needPass(board, '@');
    },

    /// function: nextTurn;
    /// return the next turn.

    'nextTurn': function(turn) {
      if(turn == '@') {
        return 'O';
      }
      else if(turn == 'O') {
        return '@';
      }
      else
        return null;
    },

    /// function: count;
    /// return an array storing the number of items including:
    ///   '@', 'O', and '.'
    /// in the 'board'.

    'count': function(board) {
      var count = {'@': 0, 'O': 0, '.': 0};
      board.forEach(function(row) {
        row.forEach(function(item) {
          count[item]++;
        });
      });
      return count;
    },

    /// function: firstTurn;
    /// define the first turn of the game;

    'firstTurn': function() {
        return 'O';
    },

    'newBoard': function() {
      var board = [];
      for(var i = 0; i < ROWS; i++) {
        var row = [];
        for(var j = 0; j < COLS; j++) {
          row.push('.');
        }
        board.push(row);
      }
      board[3][3] = board[4][4] = this.nextTurn(this.firstTurn()); 
      board[3][4] = board[4][3] = this.firstTurn()
      return board;
    },

  };
})();

module.exports = Othello;
