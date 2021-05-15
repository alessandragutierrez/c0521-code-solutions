/* exported capitalizeWord */

function capitalizeWord(word) {
  var capitalizedWord = '';
  var i;

  var upperCased = word.toUpperCase();
  var lowerCased = word.toLowerCase();

  if (upperCased === 'JAVASCRIPT') {
    capitalizedWord += upperCased[0];
    for (i = 1; i < 4; i++) {
      capitalizedWord += lowerCased[i];
    }
    capitalizedWord += upperCased[4];
    for (i = 5; i < word.length; i++) {
      capitalizedWord += lowerCased[i];
    }
    return capitalizedWord;
  }

  capitalizedWord = upperCased[0];
  for (i = 1; i < word.length; i++) {
    capitalizedWord += lowerCased[i];
  }
  return capitalizedWord;
}

// -- input: a string
// -- output: a new string with the first letter of the word capitalized
//     -- however, the word JavaScript must have both the J and the S capitalized

// -- create a new variable of an empty string to hold final values

// -- make new variable with all words uppercased;
// -- make new variable with all words lowercased;
//     -- this is to lessen the amount of times to call the toUpperCase and
//     toLowerCase methods

// -- check if word === javascript
//     -- put uppercase index 0 into final variable
//     -- loop through and put lowercase index 1-3 into final variable
//     -- put uppercase index 4 into final variable
//     -- loop through and put lowercase index 5 to end into final variable
//     -- return final variable

// -- put uppercase index 0 into final variable
//     -- loop through and put remaining lowercase indexes into final variable
// -- return final variable
