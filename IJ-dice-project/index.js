
// // -----------random number-----------


// var randon_Number1 = Math.floor(Math.random() * 6)+1;

// var random_Dice1 = ("/Dicee Challenge - Starting Files/images/dice"+randon_Number1+".png");
// // ----------DOM manupulation------------

// document.querySelectorAll("img")[0].setAttribute("src",random_Dice1);



// var randon_Number2 = Math.floor(Math.random() * 6)+1;

// var random_Dice2 = ("/Dicee Challenge - Starting Files/images/dice"+randon_Number2+".png");
// // ----------DOM manupulation------------

// document.querySelectorAll("img")[1].setAttribute("src",random_Dice2);


// if(random_Dice1>random_Dice2){
//     document.querySelector("h1").textContent=" 🚩Player1 Wins!";
// }
// else if(random_Dice1<random_Dice2){
//     document.querySelector("h1").textContent=" 🚩Player2 Wins!";
// }
// else {
//     document.querySelector("h1").textContent="Draw";
// }

var randomnum1=Math.floor((Math.random()*6)+1);
var randomimage="dice"+randomnum1+".png";//example: dice1.png
document.querySelectorAll("img")[0].setAttribute("src","images/"+ randomimage); //example:images/dice4.png

var randomnum2=Math.floor((Math.random()*6)+1);
randomimage="dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src","images/"+ randomimage);

if (randomnum1> randomnum2) {
    document.querySelector("h1").innerHTML="⚡ Player 1 Wins !";
  }
else if (randomnum2 > randomnum1) {
    document.querySelector("h1").innerHTML="Player 2 wins ! ⚡";
  }
else {
    document.querySelector("h1").innerHTML="Draw";
  }