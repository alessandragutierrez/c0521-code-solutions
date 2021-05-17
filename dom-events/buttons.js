// click event
function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick);

// mouseover event
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', hoverButton);
}
var hoverButton = document.querySelector('.hover-button');
hoverButton.addEventListener('mouseover', handleMouseover);

// double-click event
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', doubleClickButton);
}
var doubleClickButton = document.querySelector('.double-click-button');
doubleClickButton.addEventListener('dblclick', handleDoubleClick);
