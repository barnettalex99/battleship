// creates ship objects

const GameCell = require('./gameCell');

class Gameboard {
  constructor() {
    this.columns = 8;
    this.rows = 8;
    this.board = this.init();
    this.shipsCount = 0;
    this.sunkCount = 0;
    this.allSunk = false;
  }

  // initializes board array

  init() {
    this.board = [];
    for (let i = 0; i < 64; i++) {
      const newCell = new GameCell();
      this.board.push(newCell);
    }
    return this.board;
  }

  // returns new board array with ship added

  placeShip(index, addedShip) {
    if (addedShip.length === 5 && ((index > 3 && index < 8) || (index > 11 && index < 16)
    || (index > 19 && index < 24) || (index > 27 && index < 32) || (index > 35 && index < 40)
    || (index > 43 && index < 48) || (index > 51 && index < 56) || (index > 59 && index < 64))) {
      return 'error';
    }
    if (addedShip.length === 4 && ((index > 4 && index < 8) || (index > 12 && index < 16)
    || (index > 20 && index < 24) || (index > 28 && index < 32) || (index > 36 && index < 40)
    || (index > 44 && index < 48) || (index > 52 && index < 56) || (index > 60 && index < 64))) {
      return 'error';
    }
    if (addedShip.length === 3 && ((index > 4 && index < 8) || (index > 12 && index < 16)
    || (index > 20 && index < 24) || (index > 28 && index < 32) || (index > 36 && index < 40)
    || (index > 44 && index < 48) || (index > 52 && index < 56) || (index > 60 && index < 64))) {
      return 'error';
    }
    for (let i = index; i < (index + addedShip.length); i++) {
      this.board[i].hasShip = true;
      this.board[i].pointsTo = addedShip;
    }
    this.shipsCount += 1;
    return this.board;
  }

  recieveAttack(index) {
    if (this.board[index].hasShip === true) {
      this.board[index].pointsTo.hit();
      if (this.board[index].pointsTo.isSunk() === true) {
        this.sunkCount += 1;
      }
      if (this.sunkCount === this.shipsCount) {
        this.allSunk = true;
      }
    } else {
      this.board[index].missed = true;
    }
  }
}
module.exports = Gameboard;
