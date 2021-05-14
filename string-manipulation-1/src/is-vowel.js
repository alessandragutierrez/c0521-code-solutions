/* exported isVowel */

// function isVowel(char) {
//   var isVowel = false;
//   if (char === 'a' || char === 'A' ||
//       char === 'e' || char === 'E' ||
//       char === 'i' || char === 'I' ||
//       char === 'o' || char === 'O' ||
//       char === 'u' || char === 'U') {
//     isVowel = true;
//   }
//   return isVowel;
// }

function isVowel(char) {
  var ch = char.toLowerCase();
  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    return true;
  }
  return false;
}
