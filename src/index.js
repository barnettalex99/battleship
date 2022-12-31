const Ship = require('./ship');

const obj = new Ship(4);

obj.hit();
obj.hit();
obj.hit();
obj.hit();
obj.isSunk();

console.log(obj.length);
console.log(obj.numHits);
console.log(obj.sunk);
