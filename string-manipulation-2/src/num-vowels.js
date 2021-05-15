/* exported numVowels */

function numVowels(string) {
  var numVowels = 0;
  var characters = string.toLowerCase();
  for (var i = 0; i < characters.length; i++) {
    if (characters[i] === 'a' || characters[i] === 'e' || characters[i] === 'i' || characters[i] === 'o' || characters[i] === 'u') {
      numVowels++;
    }
  }
  return numVowels;
}

// objective: count the number of vowels in a given string
// input: a string
// output: # of vowels
// gameplan:
// -- create a variable with starting
//     value of 0 to carry number of vowels
// -- turn string into all lowercase or uppercase in order
//     to properly count vowel number, and store the newly uppercase/
//     lowercase letters in a new variable
// -- loop through each character of string
//     -- if the character is equal to a OR e OR i OR o OR u
//         -- add one number to the empty variable
// -- return the final variable
