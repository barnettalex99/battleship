const Gameboard = require('./gameboard');
const Ship = require('./ship');

const obj1 = new Gameboard();
const testShip = new Ship(4);
const testShip2 = new Ship(5);

obj1.placeShip(0, testShip);
obj1.placeShip(20, testShip2);

obj1.recieveAttack(0);
obj1.recieveAttack(1);
obj1.recieveAttack(2);
obj1.recieveAttack(3);

testShip.isSunk();

test('expects array hasShip to be filled properly', () => {
  expect(obj1.board[63].hasShip).toBe(false);
});

test('expects array isShot to be filled properly', () => {
  expect(obj1.board[63].isShot).toBe(false);
});

test('expects array isShot to be filled properly', () => {
  expect(obj1.board[63].isShot).toBe(false);
});

test('expects board to have ship at proper spot', () => {
  expect(obj1.board[0].hasShip).toBe(true);
});

test('expects board to not add ship at invalid index', () => {
  expect(obj1.board[20].hasShip).toBe(false);
});

test('expects board cell to return a higher hit value after a hit', () => {
  expect(obj1.board[1].pointsTo.numHits).toBe(4);
});

test('expects board cell to return a higher hit value after a hit', () => {
  expect(testShip.numHits).toBe(4);
});

test('expects ship to return proper sunk value after attacks', () => {
  expect(testShip.sunk).toBe(true);
});

test('expects board to return proper sunk value after attacks', () => {
  expect(obj1.sunkCount).toBe(1);
});

test ('expects num of ships to match added value', () => {
  expect(obj1.shipsCount).toBe(1);
});

test('expects board to return proper allSunk value after 1 sunk ship', () => {
  expect(obj1.allSunk).toBe(true);
});
