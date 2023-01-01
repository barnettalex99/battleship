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
    this.length = 64;
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

  // places ships at random locations

  placeShipRandom(addedShip) {
    const randomIndex = Math.floor(Math.random() * 63);
    if (this.placeShip(randomIndex, addedShip) === 'error') {
      this.placeShipRandom(addedShip);
    } else {
      this.placeShip(randomIndex, addedShip);
    }
  }

  // returns new board array with new ship added if added to valid index

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
    if (addedShip.length === 3 && ((index > 5 && index < 8) || (index > 13 && index < 16)
    || (index > 21 && index < 24) || (index > 29 && index < 32) || (index > 37 && index < 40)
    || (index > 45 && index < 48) || (index > 53 && index < 56) || (index > 61 && index < 64))) {
      return 'error';
    }
    if (this.board[index].hasShip === true) {
      return 'error';
    }
    if (this.board[(index + 1)].hasShip === true) {
      return 'error';
    }
    if (this.board[(index + 2)].hasShip === true) {
      return 'error';
    }
    if (this.board[(index + 3)].hasShip === true) {
      return 'error';
    }
    if (this.board[(index + 4)].hasShip === true) {
      return 'error';
    }
    for (let i = index; i < (index + addedShip.length); i++) {
      this.board[i].hasShip = true;
      this.board[i].pointsTo = addedShip;
    }
    this.shipsCount += 1;
    return this.board;
  }

  // register attack index, hit correct ship, and check for win conditions

  recieveAttack(index) {
    if (this.board[index].hasShip === true) {
      this.board[index].pointsTo.hit();
      if (this.board[index].pointsTo.isSunk() === true) {
        this.sunkCount += 1;
        if (this.sunkCount === this.shipsCount) {
          this.allSunk = true;
          return 'allSunk';
        }
        return 'sunk';
      }
    } else {
      this.board[index].missed = true;
      return 'missed';
    }
    return 'hit';
  }
}
module.exports = Gameboard;
