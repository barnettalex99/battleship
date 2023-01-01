// creates DOM and DOM methods
const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');
const instructionPanel = document.getElementById('instructions');
const computerAttacks = [];

function computerAttack(aPlayerBoard) {
  const randomCell = Math.floor(Math.random() * 63);
  const hasAttacked = computerAttacks.includes(randomCell);
  if (hasAttacked === false) {
    const compAttack = aPlayerBoard.recieveAttack(randomCell);
    const childDiv = document.getElementById(randomCell);
    computerAttacks.push(randomCell);
    if (compAttack === 'hit') {
      childDiv.style.backgroundColor = 'red';
    } else if (compAttack === 'sunk') {
      childDiv.style.backgroundColor = 'red';
      instructionPanel.innerHTML = `The computer has sunk ${aPlayerBoard.sunkCount} ships out of
      ${aPlayerBoard.shipsCount}`;
    } else if (compAttack === 'missed') {
      childDiv.style.backgroundColor = 'red';
    } else if (compAttack === 'allSunk') {
      instructionPanel.innerHTML = 'Computer wins.';
      childDiv.style.backgroundColor = 'red';
    }
  } else if (hasAttacked === true) {
    computerAttack(aPlayerBoard);
  }
}

// creates click function
function attack(gameboard, index, el, aPlayerBoard) {
  const recievedAttack = gameboard.recieveAttack(index);
  if (recievedAttack === 'hit') {
    el.style.backgroundColor = '#90EE90';
  } else if (recievedAttack === 'allSunk') {
    el.style.backgroundColor = '#90EE90';
    instructionPanel.innerHTML = 'You win';
  } else if (recievedAttack === 'sunk') {
    el.style.backgroundColor = '#90EE90';
    instructionPanel.innerHTML = `You have sunk ${gameboard.sunkCount} ships out of ${gameboard.shipsCount}`;
  } else if (recievedAttack === 'missed') {
    el.style.backgroundColor = '#FFCCCB';
  }
  computerAttack(aPlayerBoard);
}

// initializes boards
function createPlayerBoard(gameboard) {
  for (let i = 0; i < gameboard.board.length; i++) {
    const playerBoardCell = document.createElement('div');
    playerBoardCell.setAttribute('id', i);
    playerBoardCell.setAttribute('innerHTML', '');
    if (gameboard.board[i].hasShip === true) {
      playerBoardCell.style.backgroundColor = 'grey';
    }
    playerBoard.appendChild(playerBoardCell);
  }
}

function createComputerBoard(gameboard, aPlayerBoard) {
  for (let i = 0; i < gameboard.board.length; i++) {
    const computerBoardCell = document.createElement('div');
    computerBoardCell.setAttribute('class', i);
    computerBoardCell.addEventListener('click', () => { attack(gameboard, i, computerBoardCell, aPlayerBoard); }, false);
    computerBoard.appendChild(computerBoardCell);
  }
}

function initializeBoards(aPlayerBoard, aComputerBoard) {
  createPlayerBoard(aPlayerBoard);
  createComputerBoard(aComputerBoard, aPlayerBoard);
}

module.exports = initializeBoards;
