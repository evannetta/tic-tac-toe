class TicTacToe {
  constructor() {
    this.current = 'x';
    this.winner = null;
    this.turns = 0;
    this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  }

  getCurrentPlayerSymbol() {
    return this.current;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.board[rowIndex][columnIndex]) {
      return;
    }
    this.board[rowIndex][columnIndex] = this.current;
    this.current = this.current === 'x' ? 'o' : 'x';
    this.turns++;
    if (this.turns > 4) {
      //check row
      let row = this.board[rowIndex].join("");
      //check column
      let col = "";
      for (var r = 0; r < 3; r++) {
        col += this.board[r][columnIndex];
      }
      //check diag
      let d1 = this.board[0][0] + this.board[1][1] + this.board[2][2];
      let d2 = this.board[0][2] + this.board[1][1] + this.board[2][0];
      //set winner
      if (row === "xxx" || col === "xxx" || d1 === "xxx" || d2 === "xxx") {
        this.winner = 'x';
      }
      if (row === "ooo" || col === "ooo" || d2 === "ooo" || d1 === "ooo") {
        this.winner = 'o';
      }
    }
    return this.current;
  }

  isFinished() {
    if (this.winner || this.noMoreTurns()) {
      return true;
    }
    return false;
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    return this.turns === 9;
  }

  isDraw() {
    return this.noMoreTurns() && !this.winner;
  }

  getFieldValue(rowIndex, colIndex) {
    if (this.board[rowIndex][colIndex] === 0) {
      return null;
    }
    return this.board[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
