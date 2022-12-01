function handleClick(instrumentType) {
  console.log(instrumentType);
  if("wasdjkl".includes(instrumentType)) {
    makeAnimated(instrumentType);
    makeSound(instrumentType);
  } else {
    console.log("No functionality for the pressed key!");
  }
}

function makeSound(instrumentType) {
  let audioType = "sounds/";
  if(instrumentType==="w") audioType += "crash.mp3";
  else if(instrumentType==="a") audioType +="kick-bass.mp3";
  else if(instrumentType==="s") audioType += "snare.mp3";
  else if(instrumentType==="d") audioType += "tom-1.mp3";
  else if(instrumentType==="j") audioType += "tom-2.mp3";
  else if(instrumentType==="k") audioType += "tom-3.mp3";
  else if(instrumentType==="l") audioType += "tom-4.mp3";
  else console.log("No audio for that key");
  var audio = new Audio(audioType);
  audio.play();
}

function makeAnimated(instrumentType) {
  document.querySelector(".set ."+instrumentType)
            .classList.add("pressed");
  setTimeout(function() {
    document.querySelector(".set ."+instrumentType)
              .classList.remove("pressed");
  }, 100);
}


document.querySelectorAll(".drum")
    .forEach(input => input.addEventListener("click", function() {
      handleClick(input.innerHTML);
    }));

document.addEventListener("keypress", function(event) {
  handleClick(event.key);
});
