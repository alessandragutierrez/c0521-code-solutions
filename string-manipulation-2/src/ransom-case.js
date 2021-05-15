/* exported ransomCase */

function ransomCase(string) {
  var ransomWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomWord += string[i].toLowerCase();
    } else {
      ransomWord += string[i].toUpperCase();
    }
  }
  return ransomWord;
}

// -- input: a string
// -- output: the string ransomized (alternating upper and lower case)
//   -- odds are upper cased and evens are lower cased

// -- create a new variable for final ransomized word
// -- loop through each character of the word
//     -- if the index number is divisible by two (aka it is even)
//         -- make that character lower case
//     -- if it is not divisble by two (aka it is odd)
//         -- make that character upper case
// -- return the final ransom word
