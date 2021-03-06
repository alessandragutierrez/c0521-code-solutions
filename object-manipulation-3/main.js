console.log('Lodash is loaded:', typeof _ !== 'undefined');

var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var cardDeck = [];
var players = [];
var playersTied = [];
var i;
var j;
var k;

function createCardDeck() {
  var card = {};
  for (i = 0; i < ranks.length; i++) {
    for (j = 0; j < suits.length; j++) {
      card.rank = ranks[i];
      card.suit = suits[j];
      cardDeck.push(card);
      card = {};
    }
  }
}

function createPlayerArray(playerNames) {
  for (var i = 0; i < playerNames.length; i++) {
    players.push({ name: playerNames[i] });
  }
}

// Fisher-Yates shuffle algorithm
function shuffle() {
  for (i = cardDeck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 0));
    k = cardDeck[i];
    cardDeck[i] = cardDeck[j];
    cardDeck[j] = k;
  }
  console.log('Card Deck:', cardDeck);
}

function deal(cardsPerHand) {
  var numberOfCards = players.length * cardsPerHand;
  var dealtCards = [];
  while (dealtCards.length !== numberOfCards) {
    var randomCardIndex = Math.floor(Math.random() * (cardDeck.length + 0));
    if (dealtCards.indexOf(cardDeck[randomCardIndex]) === -1) {
      dealtCards.push(cardDeck[randomCardIndex]);
    }
  }
  console.log('Dealt Cards:', dealtCards);
  for (i = 0; i < dealtCards.length; i++) {
    for (j = 0; j < players.length; j++) {
      players[j].hand = [];
      while (players[j].hand.length !== cardsPerHand) {
        players[j].hand.push(dealtCards[i]);
        i++;
      }
      console.log(players[j].name + "'s", 'hand:', players[j].hand);
    }
  }
}

function findScores() {
  var playerScore = 0;
  var cardRank;
  var faceRanks = ['Jack', 'Queen', 'King'];
  for (i = 0; i < players.length; i++) {
    for (j = 0; j < players[i].hand.length; j++) {
      cardRank = players[i].hand[j].rank;
      if (cardRank === 'Ace') {
        playerScore += 11;
      } else if (faceRanks.indexOf(cardRank) !== -1) {
        playerScore += 10;
      } else {
        playerScore += cardRank;
      }
    }
    players[i].score = playerScore;
    playerScore = 0;
    console.log(players[i].name + "'s", 'score:', players[i].score);
  }
}

function checkForTies() {
  playersTied = [];
  for (i = 0; i < players.length; i++) {
    for (j = 0; j < players.length; j++) {
      if (players[i] !== players[j]) {
        if (players[i].score === players[j].score) {
          playersTied.push(players[i]);
        }
      }
    }
  }
  if (playersTied.length > 0) {
    players = [];
    for (i = 0; i < playersTied.length; i++) {
      players.push(playersTied[i]);
    }
    var playersTiedNames = '';
    for (i = 0; i < (players.length - 1); i++) {
      playersTiedNames += (players[i].name + ' & ');
    }
    i = players.length - 1;
    playersTiedNames += (players[i].name);
    console.log('Uh Oh...', playersTiedNames, 'are tied!');
    console.log('Time for a tiebreaker: re-dealing one more card each.');
  }
}

function tiebreaker() {
  while (playersTied.length !== 0) {
    deal(1);
    findScores();
    checkForTies();
    findWinner();
  }
}

function findWinner() {
  var highScore = 0;
  var winner = [];
  for (i = 0; i < players.length; i++) {
    if (players[i].score === highScore) {
      winner.push(players[i].name);
    } else if (players[i].score > highScore) {
      highScore = players[i].score;
      winner = [];
      winner.push(players[i].name);
    }
  }
  if (winner.length > 1) {
    checkForTies();
  } else {
    console.log('The winner is', winner + ',', 'with a high score of', highScore + '.');
  }
}

function playGame(playerNames, cardsPerHand) {
  console.log('Players:', playerNames);
  createPlayerArray(playerNames);
  createCardDeck();
  shuffle();
  deal(cardsPerHand);
  findScores();
  findWinner();
  tiebreaker();
}

playGame(['Tom', 'Lisa', 'Molly'], 3);
