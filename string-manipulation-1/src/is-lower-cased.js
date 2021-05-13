/* exported isLowerCased */

function isLowerCased(word) {
  var isLowerCased = false;
  var lowerCase = word.toLowerCase();
  if (word === lowerCase) {
    isLowerCased = true;
  }
  return isLowerCased;
}
