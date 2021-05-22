/* exported equal */

// input: 2 arrays
// output: boolean value indicating whether arrays are identical or not

// first check if the lengths are equal to each other
// if not then return false

// loop through the first Array
//   if first array item at current index is NOT equal to second array item at same index
//     return false
// return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
