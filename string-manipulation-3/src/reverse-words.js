/* exported reverseWords */

// input: string
// output: a string with characters of each word reversed, but the words still in original order

// -- create a variable of an empty string to hold the string in reverse
// -- loop through the string starting from the end
//     -- add each character to the empty variable
// -- create a variable of an empty string to hold individual words
// -- create a variable of an empty array to push words into
//     -- loop through the reversed string
//         -- if character is a space
//             -- push the word into the array
//             -- push a space into the array
//             -- reset the word variable to an empty string
//         -- else
//             -- add the character to the word variable
// -- push the final word into the array
// -- create a variable of an empty string to hold the final reversed words string
// -- loop through the array starting from the end
//     -- add each array item to the reversed words string
// -- return the reversed words variable

function reverseWords(string) {
  var i;
  var stringInReverse = '';
  for (i = string.length - 1; i >= 0; i = i - 1) {
    stringInReverse += string[i];
  }
  var words = '';
  var wordsArray = [];
  for (i = 0; i < stringInReverse.length; i++) {
    if (stringInReverse[i] === ' ') {
      wordsArray.push(words);
      wordsArray.push(' ');
      words = '';
    } else {
      words += stringInReverse[i];
    }
  }
  wordsArray.push(words);
  var reverseWords = '';
  for (i = wordsArray.length - 1; i >= 0; i = i - 1) {
    reverseWords += wordsArray[i];
  }
  return reverseWords;
}
