var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $slides = document.querySelectorAll('.slide');

var currentSlide = 1;

document.addEventListener('click', changeSlide);
function changeSlide(event) {
  if (event.target.classList.contains('fa-circle') !== true) {
    return;
  }
  var targetSlide = event.target.getAttribute('data-view');
  for (var i = 0; i < $slides.length; i++) {
    if ($slides[i].getAttribute('data-view') === targetSlide) {
      $slides[currentSlide - 1].classList.add('hidden');
      currentSlide = parseInt(targetSlide);
      $slides[currentSlide - 1].classList.remove('hidden');
    }
  }
}

$rightArrow.addEventListener('click', nextSlide);
function nextSlide(event) {
  if (currentSlide === $slides.length) {
    $slides[currentSlide - 1].classList.add('hidden');
    currentSlide = 1;
    $slides[currentSlide - 1].classList.remove('hidden');
  } else {
    $slides[currentSlide - 1].classList.add('hidden');
    currentSlide++;
    $slides[currentSlide - 1].classList.remove('hidden');
  }
}

$leftArrow.addEventListener('click', previousSlide);
function previousSlide(event) {
  if (currentSlide === 1) {
    $slides[currentSlide - 1].classList.add('hidden');
    currentSlide = $slides.length;
    $slides[currentSlide - 1].classList.remove('hidden');
  } else {
    $slides[currentSlide - 1].classList.add('hidden');
    currentSlide--;
    $slides[currentSlide - 1].classList.remove('hidden');
  }
}
