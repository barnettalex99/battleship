const Ship = require('./ship');

const obj = new Ship(4);
obj.hit();
obj.hit();
obj.hit();
obj.hit();
obj.isSunk();

test('expects constructor length to equal length', () => {
  expect(obj.length).toBe(4);
});

test('expects numHits to increase by 1 everytime', () => {
  expect(obj.numHits).toBe(4);
});

test('expects isSunk to be true', () => {
  expect(obj.sunk).toBe(true);
});
