/* exported takeRight */

// input: 2 parameters (array, count)
// output: a new array containing the last elements of the array of the value of count

// -- if array is empty
//     -- return array
// -- if value of count is greater than array.length
//     -- return array
// -- create a new variable of an empty array to store final array
// -- store array.length value in a new variable, and subtract the value of 'count'
//   from that variable. store the result of this expression back into the variable.
// -- loop through the array, starting at the value of the latter variable
//     -- push each item at current index into the final array
// -- return the final array

function takeRight(array, count) {
  if (array === [] || count > array.length) {
    return array;
  }
  var finalArray = [];
  var indexStart = array.length;
  indexStart = indexStart - count;
  for (var i = indexStart; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
