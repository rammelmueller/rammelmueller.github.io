function shrink_sidebar(src, dest) {
  var sidebar = document.getElementById("left");
  var main = document.getElementById("right");

  var width = 48;
  var goal = 28;
  var step = 0.5;
  var half = width - (width - goal)/2;
  var steps = (width - goal) / step;
  var ostep = 2/steps
  var op = 1;


  // First half.
  var freq = setInterval(frame_first, 5);
  function frame_first() {
    if (width <= half) {
      clearInterval(freq);
    } else {
      width = width - step;
      sidebar.style.width = width + '%';
      op = op - ostep;
      main.style.opacity = op;
      console.log(main.style.opacity)
    }
  };

  // Second half.
  // var freq = setInterval(frame_second, 5);
  // function frame_second() {
  //   if (width <= goal) {
  //     clearInterval(freq);
  //   } else {
  //     width = width - step;
  //     sidebar.style.width = width + '%';
  //   }
  // };
}

function grow_sidebar() {
  var sidebar = document.getElementById("left");
  var width = 28;
  var freq = setInterval(frame, 10);
  function frame() {
    if (width == 48) {
      clearInterval(freq);
    } else {
      width++;
      sidebar.style.width = width + '%';
    }
  }
}
