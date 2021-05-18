/* exported chunk */

// input: 2 parameters (array, size)
// output: a new array of arrays. sub-arrays will have a length equal to size.
//         leftover elements are put into a final sub-array.

// -- if the array is empty OR if size is greater than array.length
//     -- return array

// -- create a variable of an empty array which will hold final arrays
// -- create a variable of an empty array which will hold sub-arrays
// -- create a variable to hold the value of size, which we will use to increment the original value

// -- loop through the array
//     -- if the current index of the array is less than the value of size
//         -- push the array item at the current index into the sub-array
//     -- if the current index of the array is equal to the value of size
//         -- push the sub-array into the final array
//         -- reset the sub-array to the value of an empty-array again
//         -- push the array item at current index into the sub-array
//         -- incremenent the value of size by the value we used to store it's original value
// -- push the remaining values of the sub-array into the final array
// -- return the final array

function chunk(array, size) {
  if (array === [] || size > array.length) {
    return array;
  }
  var finalArray = [];
  var subArray = [];
  var incrementValue = size;
  for (var i = 0; i < array.length; i++) {
    if (i < size) {
      subArray.push(array[i]);
    } else if (i === size) {
      finalArray.push(subArray);
      subArray = [];
      subArray.push(array[i]);
      size += incrementValue;
    }
  }
  finalArray.push(subArray);
  return finalArray;
}
