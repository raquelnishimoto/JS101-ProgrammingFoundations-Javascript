const readLine = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MIDDLE_SQUARE = 5;
const POINTS_TO_WIN_GAME = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const VALID_OPTION = { p: 'player', c: 'computer' };
const WHO_GOES_FIRST_FLAG = 'choose';
const validContinueAnswers = ['y', 'n'];

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('_____+_____+_____');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('_____+_____+_____');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function initialiseBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[square] = INITIAL_MARKER;
  }

  return board;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function promptToContinue() {
  prompt("Press any key to continue");
  readLine.question();
}

function capitalise(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function joinOr(squares, delimiter = ', ', word = 'or') {
  let result = '';

  if (squares.length <= 1) return String(squares);

  result += squares.slice(0, squares.length - 1).join(delimiter);

  return `${result}${delimiter}${word} ${squares.slice(squares.length - 1)}`;
}

function emptySquares(board) {
  return Object.keys(board)
    .filter(square => board[square] === INITIAL_MARKER);
}

let getSquareIfAvailable = (board, square) => {
  return squareIsAvailable(board, square) ? square : undefined;
};

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}`);
    square = readLine.question().trim();

    if (squareIsAvailable(board, square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  square = findAtRiskSquare(board, COMPUTER_MARKER) ||
    findAtRiskSquare(board, HUMAN_MARKER) ||
    getSquareIfAvailable(board, MIDDLE_SQUARE) ||
    emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, presentPlayer) {
  if (presentPlayer === 'player') {
    playerChoosesSquare(board);
  } else if (presentPlayer === 'computer') {
    computerChoosesSquare(board);
  }
  return null;
}

function alternatePlayer(presentPlayer) {
  if (presentPlayer === 'player') {
    return 'computer';
  } else if (presentPlayer === 'computer') {
    return 'player';
  }
  return null;
}

function squareIsAvailable(board, square) {
  return emptySquares(board).includes(String(square));
}

function atAttack(board, squares, attacker) {
  let [position1, position2] = squares;

  return board[position1] === attacker && board[position2] === attacker;
}

let atAttackSquareCombination = (squares) => {
  let combos = [];

  for (let idx = 0; idx < squares.length; idx++) {
    for (let inIdx = idx + 1; inIdx < squares.length; inIdx++) {
      combos.push([squares[idx], squares[inIdx]]);
    }
  }

  return combos;
};

function squareIsAtRisk(board, player, squares) {
  let risk = false;

  atAttackSquareCombination(squares).forEach(combination => {
    if (atAttack(board, combination, player)) {
      risk = true;
    }
  });

  return risk;
}

function findAtRiskSquare(board, player) {
  let squareAtRisk;

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    let squares = [sq1, sq2, sq3];

    for (let sq = 0; sq < squares.length; sq++) {

      if (
        squareIsAtRisk(board, player, squares) &&
        squareIsAvailable(board, squares[sq])) {
        squareAtRisk = squares[sq];
        break;
      }
    }
  }

  return squareAtRisk;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function winner(board, player) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      board[sq1] === player &&
      board[sq2] === player &&
      board[sq3] === player
    ) {
      return true;
    }
  }
  return null;
}

function detectWinner(board) {
  if (winner(board, HUMAN_MARKER)) {
    return 'Player';
  } else if (winner(board, COMPUTER_MARKER)) {
    return 'Computer';
  }
  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function keepScores(board, score) {
  if (detectWinner(board)) {
    score[detectWinner(board)] += 1;
  }
  return score;
}

function gameWinner(score) {
  let winner = '';

  for (let player in score) {
    if (score[player] >= POINTS_TO_WIN_GAME) {
      winner = player;
    }
  }
  return winner;
}

function displayGameScore(score) {
  return `Game score: You ${score['Player']} vs. Computer ${score['Computer']}`;
}

/*
* Tic-Tac-Toe Game
*/

while (true) {
  let score = { Player: 0, Computer: 0 };

  while (!gameWinner(score)) {
    let board = initialiseBoard();
    let currentPlayer = WHO_GOES_FIRST_FLAG;

    if (currentPlayer === 'choose') {
      while (!Object.keys(VALID_OPTION).includes(currentPlayer)) {
        prompt("Select who playes first (p player, c for computer)");
        currentPlayer = readLine.question().trim();
      }
      currentPlayer = VALID_OPTION[currentPlayer];
    }

    prompt(`Welcome to TIC TAC TOE!`);
    prompt(`${capitalise(currentPlayer)} goes first.`);
    promptToContinue();

    while (true) {
      displayBoard(board);
      prompt(displayGameScore(score));

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (boardFull(board) || someoneWon(board)) break;
    }
    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    keepScores(board, score);

    if (gameWinner(score)) {
      prompt(`${gameWinner(score)} won the game!`);
      break;
    }

    promptToContinue();
  }

  prompt('Play again? (y or n)');
  let answer = readLine.question().trim();

  while (!validContinueAnswers.includes(answer.toLowerCase())) {
    prompt("Invalid answer. Please, enter y or n.");
    answer = readLine.question().trim();
  }

  if (answer.toLowerCase() !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
