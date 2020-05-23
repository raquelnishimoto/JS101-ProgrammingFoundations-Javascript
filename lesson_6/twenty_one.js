const readLine = require('readline-sync');
const MESSAGES = require('./resources/twenty_one_messages.json');
const VALID_ACTIONS = { h: 'hit', s: 'stay' };
const MAX_CARD_VALUE = 21;
const DEALER_MAX_STAY_VALUE = 17;
const DECK_RANK = ['H', 'D', 'C', 'S'];
const DECK_TYPE = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const VALID_ANSWER = { y: 'yes', n: 'no' };
const HIT = 'h';
const STAY = 's';
const POSITIVE = 'y';
const POINTS_TO_WIN_GAME = 5;

function initialiseDeck() {
  let cards = DECK_RANK.map(rank => {
    return DECK_TYPE.map(type => [rank, type]);
  });
  return shuffle(cards.flat());
}

function initialiseScores() {
  return { player: 0, dealer: 0 };
}

function prompt(message) {
  return console.log(`=> ${message}`);
}

function joinAnd(cards, delimiter = ', ', word = 'and') {
  let list = '';

  list += cards.slice(0, cards.length - 1).join(delimiter);
  list += ` ${word} ${cards.slice(cards.length - 1)}`;

  return list;
}

function capitalise(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function getType(cards) {
  return cards.map(card => {
    let type = card[1];

    switch (type) {
      case 'A': return 'Ace';
      case 'J': return 'Jack';
      case 'Q': return 'Queen';
      case 'K': return 'King';
      default: return type;
    }
  });
}

let maskLastCard = (player) => {
  player[player.length - 1].splice(1, 1, 'unkown card');
  return player;
};

function displayCards(dealer, player, maskCard = true) {
  let serialiseArray = JSON.stringify(dealer);
  let deepCopyArray = JSON.parse(serialiseArray);

  let dealerCards;

  if (maskCard) {
    dealerCards = getType(maskLastCard(deepCopyArray));
  } else {
    dealerCards = getType(dealer);
  }

  let playerCards = getType(player);

  console.log('*************************************');
  console.log(`Dealer has: ${joinAnd(dealerCards)}.`);
  console.log(`You have: ${joinAnd(playerCards)}, for a total of ${total(player)}.`);
  console.log('*************************************');
}

function displayTotalAndCardsInHand(player, cards) {
  prompt(`${player} cards are now: ${hand(cards)}.`);
  prompt(`${player} total is now: ${total(cards)}.`);
}

function hand(player) {
  return joinAnd(getType(player));
}

function displayMatchResult(dealer, player) {
  console.log(MESSAGES.DIVISOR);
  displayMatchWinner(dealer, player);
  console.log(`You have ${player} points VS. Dealer has ${dealer} points`);
  console.log(MESSAGES.DIVISOR);
}

function total(cards) {
  let values = cards.map(value => value[1]);

  let sum = values.reduce((acc, value) => {
    if (value === 'A') {
      return acc + 11;
    } else if (['J', 'K', 'Q'].includes(value)) {
      return acc + 10;
    } else {
      return acc + Number(value);
    }
  }, 0);

  sum = values.filter(value => value === 'A').reduce((acc) => {
    if (acc > MAX_CARD_VALUE) return acc - 10;
    return acc;
  }, sum);

  return sum;
}

function busted(cards) {
  return total(cards) > MAX_CARD_VALUE;
}

function dealerHits(cards) {
  return total(cards) < DEALER_MAX_STAY_VALUE;
}

function playerHits(deck, playerCards) {
  playerCards.push(...dealCards(deck, 1));
  return playerCards;
}

function dealCards(deck, qty) {
  return deck.splice(0, qty);
}

function isValid(input) {
  return Object.keys(VALID_ACTIONS).includes(input);
}

function shuffle(cards) {
  for (let index = cards.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [cards[index], cards[otherIndex]] = [cards[otherIndex], cards[index]];
  }
  return cards;
}

function winner(dealerTotal, playerTotal) {
  if (playerTotal > MAX_CARD_VALUE) {
    return 'dealer';
  } else if (dealerTotal > MAX_CARD_VALUE) {
    return 'player';
  } else if (dealerTotal > playerTotal) {
    return 'dealer';
  } else if (dealerTotal < playerTotal) {
    return 'player';
  }
  return null;
}

function gameWinner(score) {
  for (let player in score) {
    if (score[player] >= POINTS_TO_WIN_GAME) return player;
  }
  return null;
}

function displayGameWinner(score) {
  console.log(`*** GAME WINNER: ${capitalise(gameWinner(score))} ***`);
}

function displayGameScore(score) {
  console.log(`GAME TOTAL SCORE => You: ${score['player']} vs. Dealer ${score['dealer']}`);
  if (gameWinner(score)) {
    displayGameWinner(score);
  }
}

function displayMatchWinner(dealerTotal, playerTotal) {
  if (winner(dealerTotal, playerTotal)) {
    prompt(`${capitalise(winner(dealerTotal, playerTotal))} won this match!`);
  } else {
    prompt(MESSAGES.TIE);
  }
  return null;
}

function playAgain() {
  prompt(MESSAGES.ASK_PLAY_AGAIN);
  let answer = readLine.question().trim().toLowerCase();

  while (!Object.keys(VALID_ANSWER).includes(answer)) {
    prompt("Invalid answer. Please, enter 'y' of 'n'");
    answer = readLine.question().trim().toLowerCase();
  }
  return answer === POSITIVE;
}

function promptToContinue() {
  prompt(MESSAGES.PRESS_ENTER);
  readLine.prompt();
  console.clear();
}
/*
 TWENTY-ONE GAME
*/

let playersScore;

while (true) {
  console.clear();
  playersScore = initialiseScores();
  prompt(MESSAGES.WELCOME);

  while (!gameWinner(playersScore)) {
    displayGameScore(playersScore);

    let deckCards = initialiseDeck();
    let dealerCards = dealCards(deckCards, 2);
    let playerCards = dealCards(deckCards, 2);
    let playerTotal = total(playerCards);
    let dealerTotal = total(dealerCards);

    displayCards(dealerCards, playerCards);

    while (true) {

      prompt(MESSAGES.HIT_OR_STAY);

      let answer = readLine.question().trim().toLowerCase();

      while (!isValid(answer)) {

        prompt(MESSAGES.INVALID_ANSWER);
        answer = readLine.question().trim().toLowerCase();
      }

      if (answer === HIT) {
        console.clear();
        playerHits(deckCards, playerCards);
        prompt(MESSAGES.YOU_HIT);
        displayTotalAndCardsInHand('Your', playerCards);
        playerTotal = total(playerCards);
      }

      if (answer === STAY || busted(playerCards)) break;
    }

    if (busted(playerCards)) {
      prompt(MESSAGES.YOU_BUSTED);
      playersScore[winner(dealerTotal, playerTotal)] += 1;
      promptToContinue();
      continue;
    } else {
      console.clear();
      prompt(`You stayed at ${playerTotal}!`);
    }

    prompt(MESSAGES.DEALER_TURN);
    displayCards(dealerCards, playerCards, false);

    while (dealerHits(dealerCards)) {
      promptToContinue();
      prompt(MESSAGES.DEALER_HITS);
      playerHits(deckCards, dealerCards);
      displayTotalAndCardsInHand('Dealer', dealerCards);
      dealerTotal = total(dealerCards);
    }

    if (busted(dealerCards)) {
      prompt(MESSAGES.DEALER_BUSTED);
      playersScore[winner(dealerTotal, playerTotal)] += 1;
      promptToContinue();
      continue;
    } else {
      prompt(`Dealer stayed at ${dealerTotal}!`);
    }
    if (winner(dealerTotal, playerTotal)) {
      playersScore[winner(dealerTotal, playerTotal)] += 1;
    }

    displayMatchResult(dealerTotal, playerTotal);
    promptToContinue();

    if (gameWinner(playersScore)) break;
  }

  displayGameScore(playersScore);
  if (!playAgain()) break;
}
