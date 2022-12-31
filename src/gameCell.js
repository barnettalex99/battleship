class GameCell {
  constructor() {
    this.hasShip = false;
    this.isShot = false;
    this.missed = false;
    this.pointsTo = null;
  }
}

module.exports = GameCell;
