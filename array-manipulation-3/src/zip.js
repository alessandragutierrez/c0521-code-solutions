/* exported zip */

// input: 2 arrays
// output: an array with arrays. each sub array is a pair, containing one item
//     from each original array, at matching indexes

// create a variable of an empty array to hold all the new arrays
// create a variable of an empty array to hold each pair of items

// loop through the first array
//     if the current index in the second array is NOT equal to undefined
//         push the current index from each of the arrays into the "pairs" array
//         then push this array into the final array
//         then reset the "pairs" array

// return the final array

function zip(first, second) {
  var zippedArray = [];
  var arrayPairs = [];
  for (var i = 0; i < first.length; i++) {
    if (second[i] !== undefined) {
      arrayPairs.push(first[i]);
      arrayPairs.push(second[i]);
      zippedArray.push(arrayPairs);
      arrayPairs = [];
    }
  }
  return zippedArray;
}
