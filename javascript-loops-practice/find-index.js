/* exported findIndex */

function findIndex(array, value) {
  var firstIndex = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      firstIndex = i;
      break;
    }
  }
  return firstIndex;
}
