/* exported omit */

// input: 2 parameters
//     -- (source) an object
//     -- (keys) javascript strings representing properties on the object
// output: a new object containing the properties NOT listed in (keys)

// -- create a variable of an empty object, to store final keys/values
// -- loop through the source object and copy onto new variable
// -- loop through the keys by index
//    -- loop through the properties in the source
//        -- if keys at current index matches any property in the source
//          -- delete the property
// -- return the final object

function omit(source, keys) {
  var finalObject = {};
  for (var prop in source) {
    finalObject[prop] = source[prop];
  }
  for (var key in finalObject) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        delete finalObject[key];
      }
    }
  }
  return finalObject;
}
