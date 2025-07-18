// Detecting Button press

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    ButtonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  ButtonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;

    case "k":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

    case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function ButtonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
