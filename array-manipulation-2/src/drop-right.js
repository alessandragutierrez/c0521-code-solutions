/* exported dropRight */

// input: 2 parameters (array, count)
// output: a new shortened array with the items from the end dropped at the value of 'count'

// -- if the array is empty
//     -- return array
// -- create a variable of an empty array to store final array
// -- create a variable and store the value of array.length
// -- subtract the value of count from the value of the latter variable,
//     and store the result back into the variable
// -- loop through the array, ending at the value of the latter variable
//     -- push each item at current index into the empty array variable
// -- return final array variable

function dropRight(array, count) {
  if (array === []) {
    return array;
  }
  var finalArray = [];
  var indexEnd = array.length;
  indexEnd = array.length - count;
  for (var i = 0; i < indexEnd; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
