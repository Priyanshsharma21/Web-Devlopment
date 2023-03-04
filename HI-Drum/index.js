// document.querySelector(".set").addEventListener("click",function(){
//     console.log(this.innerHTML);
//    });












var drumClicked = (document.querySelectorAll(".drum")).length;

for (var i = 0; i < drumClicked; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonHTML = this.innerHTML;

        bajao(buttonHTML);
        button_Animation(buttonHTML);

    });


}


document.addEventListener("keydown", function (event) { // this event trigger the event happens like keydown or click
    bajao(event.key);
    button_Animation(event.key);
});



function bajao(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;


        case "d":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;


        case "e":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;


        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;


        case "o":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;


        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;


        default:
            console.log("hello");
            break;
    }
}


function button_Animation(currentKey) {
    var activeBtn = document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + currentKey).classList.remove("pressed");

    }, 100);
}