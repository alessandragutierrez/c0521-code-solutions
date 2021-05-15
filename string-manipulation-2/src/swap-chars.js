/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var swappedChars = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedChars += string[secondIndex];
    } else if (i === secondIndex) {
      swappedChars += string[firstIndex];
    } else {
      swappedChars += string[i];
    }
  }
  return swappedChars;
}

// objective: to swap characters at specified indexes
// input: 3 parameters (firstIndex, secondIndex, string)
// output: new string with characters swapped
// gameplan:
// -- create empty variable to hold new string with swapped characters
// -- loop through each character of string
//     -- if the current index is equal to the firstIndex value
//         -- add the character at secondIndex to the new variable
//     -- if the current index is equal to the secondIndex value
//         -- add the character at firstIndex to the new variable
//     -- else, add character at each index to the new variable
// -- return the new variable
