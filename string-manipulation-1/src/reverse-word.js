/* exported reverseWord */

function reverseWord(word) {
  var reversedWord = '';
  for (var i = word.length - 1; i >= 0; i = i - 1) {
    reversedWord += word[i];
  }
  return reversedWord;
}
