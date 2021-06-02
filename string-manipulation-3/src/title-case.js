/* exported titleCase */
function titleCase(string) {
  var i;
  var wordArray = [];
  var word = '';
  var lowercaseWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  // turning string into an array
  // sorting through dashes and colons
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

  // sorting through the wordArray
  // uppercasing the first letter of every word that is NOT in the lowercaseWords array
  for (i = 0; i < wordArray.length; i++) {
    if (lowercaseWords.indexOf(wordArray[i]) === -1) {
      wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
  }

  // turning the array back into a string and searching for special case words
  // assigning return values to the string variable and returning it from the function
  string = wordArray.join(' ');
  if (string.includes('Javascript')) {
    string = string.replace('Javascript', 'JavaScript');
  } else if (string.includes('Api')) {
    string = string.replace('Api', 'API');
  }
  return string;
}
