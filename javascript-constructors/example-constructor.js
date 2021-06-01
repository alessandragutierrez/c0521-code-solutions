function ExampleConstructor() {}

console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('value of prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

var newObject = new ExampleConstructor();
console.log('value of newObject:', newObject);
console.log('typeof newObject:', typeof newObject);

var instanceofResult = newObject instanceof ExampleConstructor;
console.log('value of instanceofResult:', instanceofResult);
