/* exported take */

// input: two parameters (array, count)
// output: a new array containing the first elements of the array at specified count

// -- if the array is empty
//     -- return the array
// -- if the count is greater than the array.length
//     -- return the array
// -- create a new variable containing an empty array to store final values
// -- loop through the array, ending at the value of 'count'
//     -- store each item in the array at current index into the empty created array
// -- return array with final values

function take(array, count) {
  if (array === [] || count > array.length) {
    return array;
  }
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
