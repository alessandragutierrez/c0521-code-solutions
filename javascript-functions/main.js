function convertMinutesToSeconds(minutes) {
  var result = minutes * 60;
  return result;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

//

function greet(name) {
  return '"Hey, ' + name + '"';
}

var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

//

function getArea(width, height) {
  var result = width * height;
  return result;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

//

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', '"' + getFirstNameResult + '"');

//

function getLastElement(array) {
  var arrayLength = array.length;
  var lastElement = arrayLength - 1;
  return array[lastElement];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', '"' + getLastElementResult + '"');
