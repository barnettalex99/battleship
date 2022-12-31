const Gameboard = require('./gameboard');
const Ship = require('./ship');

const obj = new Ship(4);

obj.hit();
obj.hit();
obj.hit();
obj.hit();
obj.isSunk();

const obj2 = new Gameboard();

console.log(obj.length);
console.log(obj.numHits);
console.log(obj.sunk);

console.log(obj2.board[63]);
