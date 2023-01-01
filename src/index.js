import './styles.css';

const Gameboard = require('./gameboard');
const Player = require('./player');
const Ship = require('./ship');
const initializeBoards = require('./website');

// this is the file that will run the game logic

// creates the initial players --> DO WE EVEN NEED THESE??
const playerOne = new Player('playerOne', true);
const computerPlayer = new Player('computer', false);

// creates the initial boards
const playerBoard = new Gameboard();
const computerBoard = new Gameboard();

// creates the ships on each board

const playerCarrier = new Ship(5);
const playerBattleship = new Ship(4);
const playerSubmarine = new Ship(3);
const computerCarrier = new Ship(5);
const computerBattleship = new Ship(4);
const computerSubmarine = new Ship(3);

// places the ships on each board

playerBoard.placeShipRandom(playerCarrier);
playerBoard.placeShipRandom(playerBattleship);
playerBoard.placeShipRandom(playerSubmarine);

computerBoard.placeShipRandom(computerCarrier);
computerBoard.placeShipRandom(computerBattleship);
computerBoard.placeShipRandom(computerSubmarine);

// creates initial DOM

initializeBoards(playerBoard, computerBoard);
