let bgImg;
bgImg = "url("+ 'background.png' + ")";

let findbox = document.getElementById("find-box")
let taskbar = document.getElementById("taskbar");
let triggerOpen = false;

function trigger_find() {
  if (!triggerOpen) {
    taskbar.style.borderRadius = "0 15px 0 0";
    findbox.style.display = "block";
    setTimeout(function () {findbox.style.left = "0";}, 100)
  } else {
    taskbar.style.borderRadius = "15px 15px 0 0";
    findbox.style.left = "-500px"
    setTimeout(function () {findbox.style.display = "none";}, 200)
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

document.body.style.backgroundImage = bgImg;