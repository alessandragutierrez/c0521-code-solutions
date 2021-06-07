/* exported flatten */

// input: an Array
// output: a new array with any direct child arrays unwrapped

// create a variable of an empty array
// loop through the array
//    if the array at current index is equal to an object
//        loop through the current index of the array and push each child item into the empty array
//    else
//        push the current index into the empty array
// return new array

function flatten(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      for (var n = 0; n < array[i].length; n++) {
        flattenedArray.push(array[i][n]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}
