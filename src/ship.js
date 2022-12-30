// creates ship objects

class Ship {
  constructor(length) {
    this.length = length;
    this.numHits = 0;
    this.sunk = false;
  }

  hit() {
    this.numHits += 1;
  }

  isSunk() {
    if (this.numHits === this.length) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;
