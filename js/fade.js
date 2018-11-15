// General wrapper, that deals with changing the content.
function switch_content(dest){

  console.log(status, '-->', dest)
  // First check: do we have to switch at all?
  if (status==dest || (!status && dest=='/')) {
    console.log('samesies')
  }
  else {
    // If we are at the main page: shrink the sidebar.
    if (status=='/' || !status) {
      shrink_sidebar(dest)
    }
    else if (dest == '/') {
      console.log('gro2?')
      grow_sidebar();
    }
    else {
      var content = document.getElementById("content");
      content.src = dest;
    }
  }
  status = dest;
}

// From home to subpages.
function shrink_sidebar(dest) {
  var sidebar = document.getElementById("left");
  var main = document.getElementById("right");
  var content = document.getElementById("content");

  var width = 48;
  var mwidth = 48;
  var goal = 28;
  var step = 0.5;
  var steps = (width - goal) / step;
  var ostep = 2/steps;
  var op = 1;
  var i = 0;

  var freq = setInterval(frame, 5);
  function frame() {
    i += 1;
    if (i >= steps){
      clearInterval(freq);
    }
    else {
      width = width - step;
      mwidth = mwidth + step;
      if (i < steps/2) {
        op -= ostep;
      }
      else if (i == steps/2) {
        content.src = dest;
        op += ostep;
      }
      else {
        op += ostep;
      };
      content.style.opacity = op;
      sidebar.style.width = width + '%';
      main.style.width = mwidth + '%';
    }
  };
}

// From subpages to home.
function grow_sidebar() {
  var sidebar = document.getElementById("left");
  var main = document.getElementById("right");
  var content = document.getElementById("content");

  var width = 28;
  var mwidth = 68;
  var goal = 48;
  var step = 0.5;
  var steps = (goal - width) / step;
  var ostep = 2/steps;
  var op = 1;
  var i = 0;

  var freq = setInterval(frame, 5);
  function frame() {
    i += 1;
    if (i >= steps){
      clearInterval(freq);
    }
    else {
      width = width + step;
      mwidth = mwidth - step;
      if (i < steps/2) {
        op -= ostep;
      }
      else if (i == steps/2) {
        content.src = '/';
        op += ostep;
      }
      else {
        op += ostep;
      };
      content.style.opacity = op;
      sidebar.style.width = width + '%';
      main.style.width = mwidth + '%';
    }
  };
}
