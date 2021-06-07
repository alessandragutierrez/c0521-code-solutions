var $carousel = document.querySelector('.carousel-container');
var $images = document.querySelectorAll('img');
var $progressDots = document.querySelectorAll('.fa-circle');

var currentSlide = 1;
var intervalID = setInterval(nextSlide, 3.0 * 1000);

$carousel.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.classList.contains('fa-circle') === true) {
    changeSlide();
  } else if (event.target.classList.contains('fa-chevron-right') === true) {
    nextSlide();
  } else if (event.target.classList.contains('fa-chevron-left') === true) {
    previousSlide();
  }
  resetInterval();
}

function changeSlide() {
  var targetSlide = event.target.getAttribute('data-view');
  for (var i = 0; i < $images.length; i++) {
    if ($images[i].getAttribute('data-view') === targetSlide) {
      $images[currentSlide - 1].classList.add('hidden');
      $progressDots[currentSlide - 1].classList.remove('fas');
      currentSlide = parseInt(targetSlide);
      $images[currentSlide - 1].classList.remove('hidden');
      $progressDots[currentSlide - 1].classList.add('fas');
    }
  }
}

function nextSlide() {
  if (currentSlide === $images.length) {
    $images[currentSlide - 1].classList.add('hidden');
    $progressDots[currentSlide - 1].classList.remove('fas');
    currentSlide = 1;
    $images[currentSlide - 1].classList.remove('hidden');
    $progressDots[currentSlide - 1].classList.add('fas');
  } else {
    $images[currentSlide - 1].classList.add('hidden');
    $progressDots[currentSlide - 1].classList.remove('fas');
    currentSlide++;
    $images[currentSlide - 1].classList.remove('hidden');
    $progressDots[currentSlide - 1].classList.add('fas');
  }
}

function previousSlide() {
  if (currentSlide === 1) {
    $images[currentSlide - 1].classList.add('hidden');
    $progressDots[currentSlide - 1].classList.remove('fas');
    currentSlide = $images.length;
    $images[currentSlide - 1].classList.remove('hidden');
    $progressDots[currentSlide - 1].classList.add('fas');
  } else {
    $images[currentSlide - 1].classList.add('hidden');
    $progressDots[currentSlide - 1].classList.remove('fas');
    currentSlide--;
    $images[currentSlide - 1].classList.remove('hidden');
    $progressDots[currentSlide - 1].classList.add('fas');
  }
}

function resetInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(nextSlide, 3.0 * 1000);
}
