for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let listener = this.innerHTML;
    playDrum(listener);
    whilePressing(listener);
  });
}

document.addEventListener("keypress", function (play) {
  playDrum(play.key);
  whilePressing(play.key);
});

function playDrum(keys) {
  if (keys === "w") {
    let audio = new Audio("../sounds/crash.mp3");
    audio.play();
  } else if (keys === "a") {
    let audio = new Audio("../sounds/kick-bass.mp3");
    audio.play();
  } else if (keys === "s") {
    let audio = new Audio("../sounds/snare.mp3");
    audio.play();
  } else if (keys === "d") {
    let audio = new Audio("../sounds/tom-1.mp3");
    audio.play();
  } else if (keys === "j") {
    let audio = new Audio("../sounds/tom-2.mp3");
    audio.play();
  } else if (keys === "k") {
    let audio = new Audio("../sounds/tom-3.mp3");
    audio.play();
  } else if (keys === "l") {
    let audio = new Audio("../sounds/tom-4.mp3");
    audio.play();
  }
  return;
}

function whilePressing(aKey) {
  let button = document.querySelector(`.${aKey}`);
  console.log(aKey);
  button.classList.add("pressed");

  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}
