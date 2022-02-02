
// document.querySelector("h1").style.color="red";

// $("h1").css("color","gray"); 
// $("body").css("backgroundColor","pink");
// $("h1").addClass("heading");


// document.querySelector("h1").innerHTML = "<em>hello world</em>";

// $(".heading").html("<strong>Hello Hows going</strong>");

// $("a").attr("href","https://www.youtube.com/channel/UCLcOtm-lXx6m78eKB7DiY3Q")

// $("button").click(function(){
//     $("h1").css("color","red");
// })

// $("input").keydown(function(event){
//     $("h1").html(event.key);
// })


// $("h1").on("mouseover",function(){
//     $("h1").css("color","red");
// });


// $("h1").before("<button>click me </button>");
// $("h1").after("<button>click me </button>");
// $("h1").prepend("<button>click me </button>");
// $("h1").append("<button>click me </button>");



// $("h1").on("click",function(){
//     $("h1").fadeIn();
// }



// for(var i=0;i<5;i++){
//     $("btn"+[i]).click(function(){
//        if(btn1==true){
//         $("h1").css("color","red");
//        }
//        else if(btn2==true) {
//         $("h1").css("color","purple");
//        }
//        else if(btn3==true) {
//         $("h1").css("color","green");
//        }
//        else if(btn4==true) {
//         $("h1").css("color","gray");
//        }
//        else if(btn5==true) {
//         $("h1").css("color","blue");
//        }
    // });



// document.querySelector("h1").addEventListener("click",function(){
//     document.querySelector("h1").style.color = "red"
// })


// $("h1").slideUp();

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5},"slow");
})