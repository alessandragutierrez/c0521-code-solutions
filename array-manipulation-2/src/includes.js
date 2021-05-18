/* exported includes */

// input: 2 parameters (array, value)
// output: a boolean indicated whether the specified value exists in the array

// -- create a variable with the boolean value of false
// -- if the array is empty
//     -- return boolean value of false
// -- loop through each item in the array
//     -- if item at current index is equal to 'value'
//         -- make boolean value true
// -- return fianl boolean value

function includes(array, value) {
  var includes = false;
  if (array === []) {
    return includes;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includes = true;
    }
  }
  return includes;
}
