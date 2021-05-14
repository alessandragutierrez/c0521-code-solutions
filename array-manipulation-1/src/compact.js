/* exported compact */

function compact(array) {
  var compact = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) !== false) {
      compact.push(array[i]);
    }
  }
  return compact;
}
