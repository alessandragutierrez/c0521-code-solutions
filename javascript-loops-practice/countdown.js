/* exported countdown */
// while loop
function countdown(number) {
  var countdown = [];
  while (number >= 0) {
    countdown.push(number);
    number = number - 1;
  }
  return countdown;
}

// for loop
// function countdown(number) {
//   var countdown = [];
//   for (var i = number; i >= 0; i = i - 1) {
//     countdown.push(i);
//   }
//   return countdown;
// }
