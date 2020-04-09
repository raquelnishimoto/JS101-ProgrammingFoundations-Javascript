const readline = require('readline-sync');
const MESSAGES = require('./resources/rpssl_messages.json');
const VALID_CHOICES = { r: 'rock', p: 'paper', ss: 'scissors', sk: 'spock', l: 'lizard' };
const VALID_ENTRIES = Object.keys(VALID_CHOICES);
const VALID_VALUES = Object.values(VALID_CHOICES);
const WINNER_OPTIONS = {
  paper: ['rock', 'spock'], scissors: ['paper', 'lizard'], rock: ['scissors', 'lizard'],
  spock: ['scissors', 'rock'], lizard: ['spock', 'paper']
};
const MAX_POINTS = 5;

function initialise() {
  return { matchCount: 1, playerScore: 0, computerScore: 0 };
}

function matchResult(player, computer) {
  if (WINNER_OPTIONS[player].includes(computer)) {
    return "Player wins!";
  } else if (WINNER_OPTIONS[computer].includes(player)) {
    return "Computer wins!";
  } else {
    return 'It is a tie';
  }
}

function options(choices) {
  let options = [];
  for (const num in choices) {
    options.push(`${num} for ${choices[num]}`);
  }
  return options.join(', ');
}

function dashboard(game) {
  return `MATCH ${game['matchCount']}: You ${game['playerScore']} vs. Computer ${game['computerScore']}.`;
}

function finalResults(total) {
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

let answer = '';

do {
  let gameScore = initialise();
  console.clear();
  prompt(MESSAGES.intro);

  do {
    prompt(dashboard(gameScore));

    prompt(`Choose one option: ${VALID_VALUES.join(', ')}.`);
    prompt(`Enter ${options(VALID_CHOICES)}.`);
    let playerChoice = readline.question().toLowerCase();

    while (!VALID_ENTRIES.includes(playerChoice)) {
      prompt(MESSAGES.invalidInput);
      playerChoice = readline.question().toLowerCase();
    }

    let randomNum = Math.round(Math.random() * (VALID_ENTRIES.length - 1));
    let computerChoice = Object.entries(VALID_CHOICES)[randomNum][1];
    playerChoice = VALID_CHOICES[playerChoice];

    console.clear();

    prompt(`You chose ${playerChoice}, computer chose ${computerChoice}.`);
    prompt(matchResult(playerChoice, computerChoice));

    console.log(MESSAGES.lineDivisor);

    calculateScore(matchResult(playerChoice, computerChoice), gameScore);
  } while (gameScore['playerScore'] < MAX_POINTS && gameScore['computerScore'] < MAX_POINTS);

  prompt(finalResults(gameScore));
  prompt(MESSAGES.retryGame);
  answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please, enter a valid option: ');
    answer = readline.question().toLowerCase();
  }
  console.clear();
} while (answer === 'y');

prompt(MESSAGES.gameOver);
