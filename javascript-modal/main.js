// create dom queries for the open modal button, the survey pop up, and the survey button

// add an event listener to the open modal button for event click
//   add a function for the event
//     the function should display the survey pop up

// add an event listener to the survey button for event click
//   add a function for the event
//     the function should hide the survey pop up

var openModalButton = document.querySelector('.open-modal-button');
var surveyButton = document.querySelector('.survey-button');
var modal = document.querySelector('.modal');

openModalButton.addEventListener('click', openModal);
function openModal(event) {
  modal.className = 'modal open';
}

surveyButton.addEventListener('click', hideModal);
function hideModal(event) {
  modal.className = 'modal close';
}
