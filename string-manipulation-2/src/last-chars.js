/* exported lastChars */

function lastChars(length, string) {
  if (string === '' || length > string.length) {
    return string;
  }
  var lengthOfString = string.length;
  var count = lengthOfString - length;
  var lastChars = '';
  for (var i = count; i < string.length; i++) {
    lastChars += string[i];
  }
  return lastChars;
}

// input: length -- a number ; string
// output: trimmed string @ length value, from end
// gameplan:
// -- if string is empty
//     -- return string
// -- if length is greater than string.length
//     -- return string
// -- create new variable and store the value of string.length
// -- subtract the argument length, from the variable that stores string.length,
//   and store the result in a new variable (count)
// -- create a variable to store the final last characters
// -- loop through the string argument, starting at the index of the variable (count)
//     -- add characters at each index to the empty variable which stores final characters
// -- return final characters variable
