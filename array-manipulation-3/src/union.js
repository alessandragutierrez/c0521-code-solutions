/* exported union */

// input: 2 arrays
// output: a new array containing the unique values from both arrays, in the order they occurred

// create a variable of an empty array to hold final values

// loop through the first array
//     use the indexOf method on the final array, to compare to the current index of the first array (to find unique values)
//     if the return of the method is strictly equal to -1
//         push the current index of the first array into the final array
// loop through the second array
//     use the indexOf method on the final array, to compare to the current index of the second array (to find unique values)
//     if the return of the method is - 1
//         push the current index of the second array into the final array

// return the final array

function union(first, second) {
  var unionValues = [];
  var i;
  for (i = 0; i < first.length; i++) {
    if (unionValues.indexOf(first[i]) === -1) {
      unionValues.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (unionValues.indexOf(second[i]) === -1) {
      unionValues.push(second[i]);
    }
  }
  return unionValues;
}
