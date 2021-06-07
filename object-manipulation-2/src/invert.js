/* exported invert */

// input: (source) -- an object
// output: a new object with the values and properties of (source) inverted

// -- create a variable of an empty object to store inverted object
// -- loop through the source object
//     -- add each property value as a property to the empty object, and each property as a value
// -- return inverted object

function invert(source) {
  var invertedObject = {};
  for (const prop in source) {
    invertedObject[source[prop]] = prop;
  }
  return invertedObject;
}
