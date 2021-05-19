/* exported isAnagram */

// input: 2 strings
// output: a boolean value indicating whether the second string is an anagram of the first string

// -- declare variables of empty arrays for both strings
// -- loop through each string and turn both into arrays
// -- sort both arrays
// -- loop through one array
//     -- if index does not match index of second array
//         -- return false
// -- return true

function isAnagram(firstString, secondString) {
  var firstStringArray = [];
  var secondStringArray = [];
  var i;
  for (i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringArray.push(firstString[i]);
    }
  }
  for (i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      secondStringArray.push(secondString[i]);
    }
  }
  firstStringArray.sort();
  secondStringArray.sort();
  for (i = 0; i < firstStringArray.length; i++) {
    if (firstStringArray[i] !== secondStringArray[i]) {
      return false;
    }
  }
  return true;
}
