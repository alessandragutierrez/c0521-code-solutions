/* exported isUpperCased */

function isUpperCased(word) {
  var isUpperCased = false;
  var upperCase = word.toUpperCase();
  if (word === upperCase) {
    isUpperCased = true;
  }
  return isUpperCased;
}
