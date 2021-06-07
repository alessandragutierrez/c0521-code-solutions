/* exported unique */

// input: an array
// output: a new array containing only the unqiue elements of the original array
//         (in the order that they originally appear in)

// create a variable of an empty array to hold final array

// loop through the original array
//     apply the indexOf method to the final array so we can
//     continue comparing it to the original array
//     if the return of method call with the argued original array index is equal to -1
//         push the item at current index into the final array
// return the final array

function unique(array) {
  var uniqueValues = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueValues.indexOf(array[i]) === -1) {
      uniqueValues.push(array[i]);
    }
  }
  return uniqueValues;
}
