var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detecting mouse click
for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var key = this.innerHTML;
        playTheAudio(key);
        buttonAnimation(key);
    });
}

//detecting keyboard strokes by adding it to the entire document
document.addEventListener("keydown",function(event){
    playTheAudio(event.key);
    buttonAnimation(event.key);
});

function playTheAudio(key){
    switch (key) {
        case "w":
            var sound0 = new Audio("sounds/sound-0.mp3");
            sound0.play();
            break;
        case "a":
            var sound1 = new Audio("sounds/sound-1.mp3");
            sound1.play();
            break;
        case "s":
            var sound2 = new Audio("sounds/sound-2.mp3");
            sound2.play();
            break;
        case "d":
            var sound3 = new Audio("sounds/sound-3.mp3");
            sound3.play();
            break;
        case "j":
            var sound4 = new Audio("sounds/sound-4.mp3");
            sound4.play();
            break;
        case "k":
            var sound5 = new Audio("sounds/sound-5.mp3");
            sound5.play();
            break;
        case "l":
            var sound6 = new Audio("sounds/sound-6.mp3");
            sound6.play();
            break;
        default: console.log(key)
            break;
    }
}

function buttonAnimation(currentKey){
 var activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");

 setTimeout(function(){
    activeButton.classList.remove("pressed");
 },100);
}