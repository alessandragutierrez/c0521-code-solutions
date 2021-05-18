// create a variable to hold number of clicks, which we will use to determine
// the off and on position. start the click count at 0.

// create a document query for the div Element
// create a document query for the span element

// add an event listener to the span element for a click

// create a function for the event click
//   increment the number of clicks by one
//   create a conditional to test whether the number of clicks is even or odd
//     if the click is odd
//       turn the lightbulb on by changing the div and span classes to ON
//     if the click is even
//       turn the lightbulb off by changing the div and span classes to OFF

var numberOfClicks = 0;

var lightBulb = document.querySelector('span');
var background = document.querySelector('div');

lightBulb.addEventListener('click', lightBulbSwitch);

function lightBulbSwitch(event) {
  numberOfClicks++;
  if (numberOfClicks % 2 === 0) {
    lightBulb.className = 'circle off';
    background.className = 'off';
  } else {
    lightBulb.className = 'circle on';
    background.className = 'on';
  }
}
