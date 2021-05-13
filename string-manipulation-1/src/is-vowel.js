/* exported isVowel */

function isVowel(char) {
  var isVowel = false;
  if (char === 'a' || char === 'A' ||
      char === 'e' || char === 'E' ||
      char === 'i' || char === 'I' ||
      char === 'o' || char === 'O' ||
      char === 'u' || char === 'U') {
    isVowel = true;
  }
  return isVowel;
}
