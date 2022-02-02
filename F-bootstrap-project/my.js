
$(".insta a").addClass("lm1");
$(".tweet a").addClass("lm2");
$(".fb a").addClass("lm3");
$(".pin a").addClass("lm4");
$(".googly a").addClass("lm5");
$(".gitti a").addClass("lm6");


// for(var i=0; i<=6 ; i++){

    var anime = $(".lm1").on("click",function(){
        $(".insta").slideUp().slideDown().animate({opacity:0.5},"slow");
        // back2Normal(event.classList);
    });
    
    var anime = $(".lm2").on("click",function(){
        $(".tweet").slideUp().slideDown().animate({opacity:0.5},"slow");
        // back2Normal(i);

    });
    
    var anime = $(".lm3").on("click",function(){
        $(".fb").slideUp().slideDown().animate({opacity:0.5},"slow");
        // back2Normal(i);

    });
    
    var anime = $(".lm4").on("click",function(){
        $(".pin").slideUp().slideDown().animate({opacity:0.5},"slow");
        // back2Normal(i);

    });
    
    var anime = $(".lm5").on("click",function(){
        $(".googly").slideUp().slideDown().animate({opacity:0.5},"slow");
        // back2Normal(i);

    });
    
    var anime = $(".lm6").on("click",function(){
        $(".gitti").slideUp().slideDown().animate({opacity:0.5},"slow");
        // back2Normal(i);

    });
    
    
// }



// function back2Normal(choose){


//     switch ("lm"+choose) {

//         case "lm1":
//             $(".lm1").on("click",function(){
//                 $(".insta").animate({opacity:1},"fast");
//             });

//             break;

//         case "lm2":
//             $(".lm2").on("click",function(){
//                 $(".tweet").animate({opacity:1},"fast");
//             });
                
//              break;

//         case "lm3":
//                 $(".lm3").on("click",function(){
//                $(".fb").animate({opacity:1},"fast");
//                     });
                        
//               break;  
                     
//         case "lm4":
//                 $(".lm4").on("click",function(){
//                  $(".pin").animate({opacity:1},"fast");
//                  });
                            
//               break;
                             
//          case "lm5":
//             $(".lm5").on("click",function(){
//                 $(".googly").animate({opacity:1},"fast");
//             });
                
//                break;

//           case "lm6":
//              $(".lm6").on("click",function(){
//                  $(".gitti").animate({opacity:1},"fast");
//                 });
                    
//                break;

//         default:
//             console.log("xxxxxxxxxxxx")
//             break;
//     }


    
// }
