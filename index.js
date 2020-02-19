var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonTextContent = this.textContent;
    playSound(buttonTextContent);
    pressAnimation(buttonTextContent);
  });
}

document.addEventListener("keydown", function(e) {
    playSound(e.key);
    pressAnimation(e.key);
  });

  function playSound(selctedSound){
    switch (selctedSound) {
      case 'w':
        var tom1 = new Audio('sounds\\tom-1.mp3');
        tom1.play();
        break;
      case 'a':
        var tom2 = new Audio('sounds\\tom-2.mp3');
        tom2.play();
        break;
      case 's':
        var tom3 = new Audio('sounds\\tom-3.mp3');
        tom3.play();
        break;
      case 'd':
        var tom4 = new Audio('sounds\\tom-4.mp3');
        tom4.play();
        break;
      case 'j':
        var snare = new Audio('sounds\\snare.mp3');
        snare.play();
        break;
      case 'k':
        var crash = new Audio('sounds\\crash.mp3');
        crash.play();
        break;
      case 'l':
        var kick = new Audio('sounds\\kick-bass.mp3');
        kick.play();
        break;
    }
  }
function pressAnimation(enteredKey){
  var key = document.querySelector("."+ enteredKey);
  key.classList.add("pressed");
  setTimeout(function(){
    key.classList.remove("pressed");}, 100);
}
