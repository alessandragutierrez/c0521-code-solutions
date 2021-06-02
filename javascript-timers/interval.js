var $heading = document.querySelector('h1');

function countdown() {
  var i = 3;
  var intervalID = setInterval(function () {
    $heading.innerHTML = i;
    if (i === 0) {
      $heading.innerHTML = '~Earth Beeeelooowww Us~';
      clearInterval(intervalID);
    } else {
      i--;
    }
  }, 1.0 * 1000);
}

countdown();
