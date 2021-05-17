/* exported pick */

// input: 2 parameters
//     -- (source) an object
//     -- (keys) javascript strings representing properties on the object
// output: a new object containing the properties listed in (keys) and their values
//     -- if the (key) listed is not defined in the (source), it will not be added to final object

// -- create a variable of an empty object, to store final keys/values
// -- loop through the keys by index
//    -- loop through the properties in the source
//        -- if keys at current index matches any property in the source AND that property value is NOT undefined
//          -- add the property and it's value to the final object
// -- return the final object

function pick(source, keys) {
  var finalObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (keys[i] === key && source[key] !== undefined) {
        finalObject[key] = source[key];
      }
    }
  }
  return finalObject;
}
