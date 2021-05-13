/* exported sumAll */

// for loop
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// while loop
// function sumAll(numbers) {
//   var sum = 0;
//   var i = 0;
//   while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
//   }
//   return sum;
// }
