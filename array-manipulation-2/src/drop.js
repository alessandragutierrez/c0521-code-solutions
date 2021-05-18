/* exported drop */

// input: two parameters (array, count)
// output: a new array

// -- create a new variable of an empty array to store final array
// -- loop through each item in array
//     -- if the current index is greater than or euqal to 'count'
//         -- push the item at current index into empty array
// -- return final array

function drop(array, count) {
  var finalArray = [];
  for (var i = count; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
