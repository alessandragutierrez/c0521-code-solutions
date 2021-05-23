console.log('Lodash is loaded:', typeof _ !== 'undefined');

var i;
var j;
var k;
var players = [];
var playersTied = [];
var cardDeck = [
  {
    rank: 'Ace',
    suit: 'Clubs'
  },
  {
    rank: 2,
    suit: 'Clubs'
  },
  {
    rank: 3,
    suit: 'Clubs'
  },
  {
    rank: 4,
    suit: 'Clubs'
  },
  {
    rank: 5,
    suit: 'Clubs'
  },
  {
    rank: 6,
    suit: 'Clubs'
  },
  {
    rank: 7,
    suit: 'Clubs'
  },
  {
    rank: 8,
    suit: 'Clubs'
  },
  {
    rank: 9,
    suit: 'Clubs'
  },
  {
    rank: 10,
    suit: 'Clubs'
  },
  {
    rank: 'Jack',
    suit: 'Clubs'
  },
  {
    rank: 'Queen',
    suit: 'Clubs'
  },
  {
    rank: 'King',
    suit: 'Clubs'
  },
  {
    rank: 'Ace',
    suit: 'Diamonds'
  },
  {
    rank: 2,
    suit: 'Diamonds'
  },
  {
    rank: 3,
    suit: 'Diamonds'
  },
  {
    rank: 4,
    suit: 'Diamonds'
  },
  {
    rank: 5,
    suit: 'Diamonds'
  },
  {
    rank: 6,
    suit: 'Diamonds'
  },
  {
    rank: 7,
    suit: 'Diamonds'
  },
  {
    rank: 8,
    suit: 'Diamonds'
  },
  {
    rank: 9,
    suit: 'Diamonds'
  },
  {
    rank: 10,
    suit: 'Diamonds'
  },
  {
    rank: 'Jack',
    suit: 'Diamonds'
  },
  {
    rank: 'Queen',
    suit: 'Diamonds'
  },
  {
    rank: 'King',
    suit: 'Diamonds'
  },
  {
    rank: 'Ace',
    suit: 'Hearts'
  },
  {
    rank: 2,
    suit: 'Hearts'
  },
  {
    rank: 3,
    suit: 'Hearts'
  },
  {
    rank: 4,
    suit: 'Hearts'
  },
  {
    rank: 5,
    suit: 'Hearts'
  },
  {
    rank: 6,
    suit: 'Hearts'
  },
  {
    rank: 7,
    suit: 'Hearts'
  },
  {
    rank: 8,
    suit: 'Hearts'
  },
  {
    rank: 9,
    suit: 'Hearts'
  },
  {
    rank: 10,
    suit: 'Hearts'
  },
  {
    rank: 'Jack',
    suit: 'Hearts'
  },
  {
    rank: 'Queen',
    suit: 'Hearts'
  },
  {
    rank: 'King',
    suit: 'Hearts'
  },
  {
    rank: 'Ace',
    suit: 'Spades'
  },
  {
    rank: 2,
    suit: 'Spades'
  },
  {
    rank: 3,
    suit: 'Spades'
  },
  {
    rank: 4,
    suit: 'Spades'
  },
  {
    rank: 5,
    suit: 'Spades'
  },
  {
    rank: 6,
    suit: 'Spades'
  },
  {
    rank: 7,
    suit: 'Spades'
  },
  {
    rank: 8,
    suit: 'Spades'
  },
  {
    rank: 9,
    suit: 'Spades'
  },
  {
    rank: 10,
    suit: 'Spades'
  },
  {
    rank: 'Jack',
    suit: 'Spades'
  },
  {
    rank: 'Queen',
    suit: 'Spades'
  },
  {
    rank: 'King',
    suit: 'Spades'
  }
];

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
  }
  console.log('The winner is', winner + ',', 'with a high score of', highScore + '.');
}

function playGame(playerNames, cardsPerHand) {
  console.log('Players:', playerNames);
  createPlayerArray(playerNames);
  shuffle();
  deal(cardsPerHand);
  findScores();
  findWinner();
  tiebreaker();
}

playGame(['Tom', 'Lisa', 'Molly'], 3);
