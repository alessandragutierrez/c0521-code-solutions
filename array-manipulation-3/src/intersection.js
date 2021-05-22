/* exported intersection */

// input: 2 arrays
// output: a new array containing the unique values found in BOTH arrays, in the order they occur

// create a variable of an empty array to hold final values

// loop through the first array
//     use the indexOf method on the second array, and search the current index of the first array
//     if the return is NOT equal to -1
//         push the current index of the first array into the final array

// return the final array

function intersection(first, second) {
  var intersectedValues = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      intersectedValues.push(first[i]);
    }
  }
  return intersectedValues;
}
