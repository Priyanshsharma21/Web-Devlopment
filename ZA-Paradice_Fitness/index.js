

$(".btn-sub").on("click",function(){
    $("btn-sub").html("Subscribed");
    });
    
// courosal 

    const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['https://www.youtube.com/watch?v=MEBBLRegHEg', 'https://www.youtube.com/watch?v=MEBBLRegHEg', 'https://www.youtube.com/watch?v=MEBBLRegHEg'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);


$(".calc-btn").mouseover(function(){
$("h1").css("color","white");
});