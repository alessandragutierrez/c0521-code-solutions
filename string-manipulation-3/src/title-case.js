/* exported titleCase */
function titleCase(string) {
  var i;

  // turning string into an array
  // sorting through dashes and colons
  var wordArray = [];
  var word = '';
  string = string.toLowerCase();
  for (i = 0; i < string.length; i++) {
    if (string[i] === '-') {
      word += string[i];
      i++;
      word += string[i].toUpperCase();
    } else if (string[i] === ':') {
      word += string[i];
      wordArray.push(word);
      word = '';
      i = i + 2;
      word += string[i].toUpperCase();
    } else if (string[i] !== ' ') {
      word += string[i];
    } else {
      wordArray.push(word);
      word = '';
    }
  }
  wordArray.push(word);

  // all words that SHOULD be lowercased are in a single array
  // sorting through the wordArray
  // fixing casing on special words
  // uppercasing the first letter of every word that is NOT in the lowercasing array
  var lowercaseWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i].includes('javascript:')) {
      wordArray[i] = 'JavaScript:';
    } else if (wordArray[i].includes('javascript')) {
      wordArray[i] = 'JavaScript';
    } else if (wordArray[i].includes('api')) {
      wordArray[i] = 'API';
    } else if (lowercaseWords.indexOf(wordArray[i]) === -1) {
      wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
  }

  // turning the array back into a string
  // assigning it to the string variable and returning it
  string = wordArray.join(' ');
  return string;
}
