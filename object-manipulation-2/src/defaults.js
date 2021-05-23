/* exported defaults */

// input: 2 parameters (target, source) both are objects
// output: modify (target) so that it includes values of properties that it does not possess

// -- create variable to hold all target keys using the Object.keys method
// -- create variable to hold all source keys using the Object.keys method
// -- loop through the source keys array created from the above method
//     -- using the indexOf method on the target keys array, if the current index
//        of source key does not exist in the target keys
//           -- add the current key, and the value, to the target object
// -- return target

function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    if (targetKeys.indexOf(sourceKeys[i]) === -1) {
      target[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
  return target;
}
