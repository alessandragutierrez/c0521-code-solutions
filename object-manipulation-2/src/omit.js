/* exported omit */

// input: 2 parameters
//       (source) an object
//       (keys) an array of strings
// output: a new object containing all the properties from the original
//   argument that were NOT listed in keys

// -- if source object is empty
//     -- return source object
// -- create a variable of an empty object to hold final properties / values
// -- loop through the array of strings
//     -- loop through the properties in source
//         -- if the string at current index is NOT equal to the current property
//             -- add the property and value into the final variable
// -- return the final variable

function omit(source, keys) {
  var finalObject = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== key) {
        finalObject[key] = source[key];
      }
    }
  }
  return finalObject;
}
