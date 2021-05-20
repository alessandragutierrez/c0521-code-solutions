var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  var i;
  if (event.target.matches('.tab') !== true) {
    return;
  }
  for (i = 0; i < $tabElements.length; i++) {
    if ($tabElements[i] !== event.target) {
      $tabElements[i].className = 'tab';
    } else {
      $tabElements[i].className = 'tab active';
    }
  }
  var $dataView = event.target.getAttribute('data-view');
  for (i = 0; i < $viewElements.length; i++) {
    if ($viewElements[i].getAttribute('data-view') !== $dataView) {
      $viewElements[i].className = 'view hidden';
    } else $viewElements[i].className = 'view';
  }
});
