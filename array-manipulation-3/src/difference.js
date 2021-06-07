/* exported difference */

// input: 2 arrays
// output: a new array containing the differences between the two, and in the order they occur

// create a new variable of an empty array to store final values

// loop through the first array
//     use the indexOf method on the second array, and search the current index of the first array
//     if the return is -1
//         push the current index of the first array into the final array
// now loop through the second array
//     use the indexOf method on the first array, and search the current index of the second array
//     if the return is -1
//         push the current index of the second array into the final array
// return the final array

function difference(first, second) {
  var differenceInValues = [];
  var i;
  for (i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      differenceInValues.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      differenceInValues.push(second[i]);
    }
  }
  return differenceInValues;
}
