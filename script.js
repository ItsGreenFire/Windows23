let bgImg;
bgImg = "url("+ 'background.jpg' + ")";

let findbox = document.getElementById("find-box")
let taskbar = document.getElementById("taskbar");
let triggerOpen = false;

function trigger_find() {
  if (!triggerOpen) {
    taskbar.style.borderRadius = "0 15px 0 0";
    findbox.style.display = "block";
    taskbar.style.backgroundColor = "rgba(100, 100, 100, .7)";
    setTimeout(function () {findbox.style.left = "0";}, 100);
  } else {
    taskbar.style.borderRadius = "15px 15px 0 0";
    findbox.style.left = "-500px"
    taskbar.style.backgroundColor = "rgba(100, 100, 100, .35)";
    setTimeout(function () {findbox.style.display = "none";}, 200);
  }
  triggerOpen = !triggerOpen
  console.log(taskbar.style.borderRadius)
}

function open_settings() {
  console.log("Opened Settings!")
}

function open_fe() {
  console.log("Opened File Exporer!")
}

let thing = document.getElementById("window")

thing.onmousedown = function(event) {

  let shiftX = event.clientX - thing.getBoundingClientRect().left;
  let shiftY = event.clientY - thing.getBoundingClientRect().top;

  thing.style.position = 'absolute';
  thing.style.zIndex = 1000;
  document.body.append(thing);

  moveAt(event.pageX, event.pageY);

  // moves the thing at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    thing.style.left = pageX - shiftX + 'px';
    thing.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the thing on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the thing, remove unneeded handlers
  thing.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    thing.onmouseup = null;
  };

};

thing.ondragstart = function() {
  return false;
};

document.body.style.backgroundImage = bgImg;