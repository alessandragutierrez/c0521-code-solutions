// create a variable to hold lightswitch boolean value of false

// create a document query for the div Element
// create a document query for the span element

// add an event listener to the span element for a click

// create a function for the event click
//   create a conditional to test whether the switch is false(off)
//     if the click is false(off)
//       change the switch to true(on)
//       turn the lightbulb on by changing the div and span classes to ON
//     if else
//       change the switch to false(off)
//       turn the lightbulb off by changing the div and span classes to OFF

var isOn = false;

var lightBulb = document.querySelector('span');
var background = document.querySelector('div');

lightBulb.addEventListener('click', lightBulbSwitch);

function lightBulbSwitch(event) {
  if (isOn === false) {
    isOn = true;
    lightBulb.className = 'circle on';
    background.className = 'on';
  } else {
    isOn = false;
    lightBulb.className = 'circle off';
    background.className = 'off';
  }
}
