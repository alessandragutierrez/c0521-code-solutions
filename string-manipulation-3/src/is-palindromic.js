/* exported isPalindromic */

// input: string
// output: boolean value indicating whether the string is a palindrome
//         (reads same backwards as forwards)

// -- create an empty variable to store the string without spaces
// -- log each character of the string argument EXCEPT spaces into the empty variable
// -- create an empty variable to store the string without spaces in reverse
// -- loop through the string in reverse and log each character in the empty variable
// -- if the reversed string is equal to the string without spaces
//     -- return true
// -- else
//     -- return false

function isPalindromic(string) {
  var i;
  var stringMinusSpaces = '';
  for (i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      stringMinusSpaces += string[i];
    }
  }
  var stringInReverse = '';
  for (i = stringMinusSpaces.length - 1; i >= 0; i = i - 1) {
    stringInReverse += stringMinusSpaces[i];
  }
  if (stringInReverse === stringMinusSpaces) {
    return true;
  } else {
    return false;
  }
}
