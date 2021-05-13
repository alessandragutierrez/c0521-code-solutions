/* exported capitalize */

function capitalize(word) {
  var capitalized = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    capitalized += word[i].toLowerCase();
  }
  return capitalized;
}
