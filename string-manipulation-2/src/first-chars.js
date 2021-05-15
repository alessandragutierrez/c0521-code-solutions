/* exported firstChars */

function firstChars(length, string) {
  if (string === '' || length > string.length) {
    return string;
  }
  var firstChars = '';
  for (var i = 0; i < length; i++) {
    firstChars += string[i];
  }
  return firstChars;
}

// input: length -- a number; string
// output: string trimmed to length
// gameplan:

// -- if string is empty
//     -- return empty string
// -- if length is greater than string.length
//     -- return full length of string
// --create an empty variable to store trimmed string
// -- loop through the specified length starting at 0
//     -- add each character of string at current index to empty variable
// -- return final variable
