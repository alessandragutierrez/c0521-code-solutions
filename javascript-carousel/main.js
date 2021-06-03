var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $slides = document.querySelectorAll('.slide');

var currentSlide = 1;
var intervalID = setInterval(nextSlide, 3.0 * 1000);

document.addEventListener('click', changeSlideClick);
$rightArrow.addEventListener('click', nextSlideClick);
$leftArrow.addEventListener('click', previousSlideClick);

function changeSlideClick(event) {
  changeSlide();
  resetInterval();
}

function nextSlideClick() {
  nextSlide();
  resetInterval();
}

function previousSlideClick() {
  previousSlide();
  resetInterval();
}

function changeSlide() {
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

function nextSlide() {
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

function previousSlide() {
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

function resetInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(nextSlide, 3.0 * 1000);
}
