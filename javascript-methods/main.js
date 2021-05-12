// The Math Object
var number1 = 25;
var number2 = 9;
var number3 = 82;
var maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue:', maximumValue);

var heroes = [
  'Daredevil',
  'Spider Man',
  'Wonder Woman',
  'Batman'
];

var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// Array Methods
var library = [
  {
    title: 'Where The Crawdads Sing',
    author: 'Delia Owens'
  },
  {
    title: 'The Midnight Library',
    author: 'Matt Haig'
  },
  {
    title: 'Existentialism is a Humanism',
    author: 'Jean-Paul Sartre'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

// String Methods
var fullName = 'Alessandra Gutierrez';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
