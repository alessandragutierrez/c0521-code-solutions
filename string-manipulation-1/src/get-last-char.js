/* exported getLastChar */

// function getLastChar(string) {
//   var lastChar;
//   for (var i = 0; i < string.length; i++) {
//     lastChar = string[i];
//   }
//   return lastChar;
// }

function getLastChar(string) {
  var lastIndex = string.length - 1;
  var lastChar = string[lastIndex];
  return lastChar;
}
