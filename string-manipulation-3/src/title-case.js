// /* exported titleCase */
// eslint-disable-next-line no-unused-vars
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

  // sorting through the array
  // lowercasing words that should be lowercased
  // uppercasing the first letter of every word + the word JavaScript and API
  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === 'javascript') {
      wordArray[i] = 'JavaScript';
    } else if (wordArray[i] === 'javascript:') {
      wordArray[i] = 'JavaScript:';
    } else if (wordArray[i] === 'api') {
      wordArray[i] = 'API';
    } else if (wordArray[i] !== 'and' && wordArray[i] !== 'or' && wordArray[i] !== 'nor' && wordArray[i] !== 'but' && wordArray[i] !== 'a' && wordArray[i] !== 'an' && wordArray[i] !== 'the' && wordArray[i] !== 'as' && wordArray[i] !== 'at' && wordArray[i] !== 'by' && wordArray[i] !== 'for' && wordArray[i] !== 'in' && wordArray[i] !== 'of' && wordArray[i] !== 'on' && wordArray[i] !== 'per' && wordArray[i] !== 'to') {
      wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
  }

  // turning the array back into a string
  // assigning it to the string variable and returning it
  string = wordArray.join(' ');
  return string;
}
