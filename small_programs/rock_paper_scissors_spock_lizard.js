const readline = require('readline-sync');
const MESSAGES = require('./resources/rpssl_messages.json');
const VALID_CHOICES = { 1: 'rock', 2: 'paper', 3: 'scissors', 4: 'spock', 5: 'lizard' };
const VALID_NUMBERS = Object.keys(VALID_CHOICES);
const VALID_VALUES = Object.values(VALID_CHOICES);
const WINNER_OPTIONS = {
  paper: ['rock', 'spock'], scissors: ['paper', 'lizard'], rock: ['scissors', 'lizard'],
  spock: ['scissors', 'rock'], lizard: ['spock', 'paper']
};
const MAX_POINTS = 5;
let answer = '';

function initialise() {
  let gameScore = {};
  gameScore['matchCount'] = 1;
  gameScore['playerScore'] = 0;
  gameScore['computerScore'] = 0;
  return gameScore;
}

function displayWinner(player, computer) {
  if (WINNER_OPTIONS[player].includes(computer)) {
    return "Player wins!";
  } else if (WINNER_OPTIONS[computer].includes(player)) {
    return "Computer wins!";
  } else {
    return 'It is a tie';
  }
}

function displayOptions(choices) {
  let options = [];
  for (const num in choices) {
    options.push(`${num} for ${choices[num]}`);
  }
  return options.join(', ');
}

function displayScore(game) {
  return `MATCH ${game['matchCount']}: You ${game['playerScore']} vs. Computer ${game['computerScore']}.`;
}

function displayFinalResults(total) {
  let result = [`Total game score: You ${total['playerScore']} vs. Computer ${total['computerScore']}.`];
  if (total['playerScore'] >= MAX_POINTS) {
    result.unshift("Player wins the game!");
  } else if (total['computerScore'] >= MAX_POINTS) {
    result.unshift("Computer wins the game!");
  }
  return result.join(' ');
}

function calculateScore(matchResult, score) {
  score['matchCount'] += 1;
  if (matchResult.toLowerCase().includes('player')) {
    score['playerScore'] += 1;
  } else if (matchResult.toLowerCase().includes('computer')) {
    score['computerScore'] += 1;
  }
  return score;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

do {
  let gameScore = initialise();
  console.clear();
  prompt(MESSAGES.intro);

  do {
    prompt(displayScore(gameScore));

    prompt(`Choose one option: ${VALID_VALUES.join(', ')}.`);
    prompt(`Enter ${displayOptions(VALID_CHOICES)}.`);
    let playerChoice = readline.question().toLowerCase();

    while (!VALID_NUMBERS.includes(playerChoice)) {
      prompt(MESSAGES.invalidInput);
      playerChoice = readline.question().toLowerCase();
    }

    let randomNum = Math.ceil(Math.random() * (VALID_NUMBERS.length));
    let computerChoice = VALID_CHOICES[randomNum.toString()];
    playerChoice = VALID_CHOICES[playerChoice];

    console.clear();

    prompt(`You chose ${playerChoice}, computer chose ${computerChoice}.`);
    prompt(displayWinner(playerChoice, computerChoice));

    console.log(MESSAGES.lineDivisor);

    calculateScore(displayWinner(playerChoice, computerChoice), gameScore);
  } while (gameScore['playerScore'] < MAX_POINTS && gameScore['computerScore'] < MAX_POINTS);

  prompt(displayFinalResults(gameScore));
  prompt(MESSAGES.retryGame);
  answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please, enter a valid option: ');
    answer = readline.question().toLowerCase();
  }
  console.clear();
} while (answer === 'y');

prompt(MESSAGES.gameOver);
