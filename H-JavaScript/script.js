// This is used to show alaer on click the button 
// code 
// let namastebtn = document.querySelector('button');
// namastebtn.addEventListener('click',showMsg);

// function showMsg(){
//     alert("Namaste World!");
// }

// This will take input from user 

let namastebtn = document.querySelector('button');
namastebtn.addEventListener('click',inputMsg);

function inputMsg(){
   let name = prompt("Enter Your Name:");
   namastebtn.textContent = "ROll Number 1. "+ name ;
}

var male= prompt("Enter Male Name: ");
var female= prompt("Enter female Name: ");

var love_Percentage = Math.random();
love_Percentage *= 101;
var result = Math.floor(love_Percentage);
if(result>90){
alert(male + "❤️" + female+" by "+result+"% Percentage like Ram Love Sita");
}
elseif(result>70 && result <90)
{
alert(male + "❤️" + female+" by "+result+"% Percentage Like Ayush love Barkha");
}
elseif(result<70)
{
alert(male + "❤️" + female+" by "+result+"% Percentage");
} 
elseif
{
alert(male + "❤️" + female+" by "+result+"% Percentage");

}

