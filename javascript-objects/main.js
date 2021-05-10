// student object
var student = {
  firstName: 'Alessandra',
  lastName: 'Gutierrez',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Pastry Cook';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

// vehicle object
var vehicle = {
  make: 'Ford',
  model: 'Focus',
  year: 2012
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

// pet object
var pet = {
  name: 'Gus-Gus',
  type: 'mouse'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
