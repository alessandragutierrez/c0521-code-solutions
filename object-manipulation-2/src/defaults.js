/* exported defaults */

// input: 2 parameters (target, source) both are objects
// output: modify (target) so that it includes values of properties that it does not possess

// -- if target is empty
//     -- loop through the source object
//         -- add each source property and value to target object

// -- loop through the source object
//     -- loop through the target object
//         -- if property in source object does not match a property in target object
//             -- add the property and value of the source object to the target object

function defaults(target, source) {
  if (target !== source) {
    for (var key in source) {
      target[key] = source[key];
    }
  }
  for (const propTarget in target) {
    for (const propSource in source) {
      if (propTarget !== propSource) {
        target[propSource] = source[propSource];
      }
    }
  }
}
