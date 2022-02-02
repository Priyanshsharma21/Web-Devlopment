
// -----------random number-----------


var randon_Number1 = Math.floor(Math.random() * 6)+1;

var random_Dice1 = ("/Dicee Challenge - Starting Files/images/dice"+randon_Number1+".png");
// ----------DOM manupulation------------

document.querySelectorAll("img")[0].setAttribute("src",random_Dice1);



var randon_Number2 = Math.floor(Math.random() * 6)+1;

var random_Dice2 = ("/Dicee Challenge - Starting Files/images/dice"+randon_Number2+".png");
// ----------DOM manupulation------------

document.querySelectorAll("img")[1].setAttribute("src",random_Dice2);


if(random_Dice1>random_Dice2){
    document.querySelector("h1").textContent=" 🚩Player1 Wins!";
}
else if(random_Dice1<random_Dice2){
    document.querySelector("h1").textContent=" 🚩Player2 Wins!";
}
else {
    document.querySelector("h1").textContent="Draw";
}