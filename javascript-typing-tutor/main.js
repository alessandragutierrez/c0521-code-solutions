// -- query the DOM for the body element
// -- query the DOM for all span elements
// -- add an event listener to the body element for the "keydown" event

// -- set a variable to 0 to keep track of NODE list for span elements
// -- set the first span element to current character class (for underline)

// -- create function for event listener
//     -- if the event.key is strictly equal to the text content of the span element at current index
//         -- make the span element correct (green)
//         -- increment the variable that counts
//         -- move the current character class over to new current index (for underline)
//     -- else
//         -- set the span element to incorrect (red)

var body = document.querySelector('body');
var character = document.querySelectorAll('span');

body.addEventListener('keydown', typeCharacter);

var i = 0;
character[i].className = 'current-character';

function typeCharacter(event) {
  if (event.key === character[i].textContent) {
    character[i].className = 'correct';
    i++;
    character[i].className = 'current-character';
  } else {
    character[i].className = 'incorrect';
  }
}
