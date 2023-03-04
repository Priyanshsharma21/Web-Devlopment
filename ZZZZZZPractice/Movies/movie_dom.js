// node movie_dom.js --source=mov.html

let minimist = require('minimist');
let fs = require('fs');
let jsdom = require('jsdom');

let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function(err,html){

let dom = new jsdom.JSDOM(html);
let document = dom.window.document;

console.log(document.title);

let mui_name = document.querySelectorAll("h5.MuiTypography-root div.MuiBox-root");
let imdb_rating = document.querySelectorAll("div.MuiBox-root h6.MuiTypography-root ")

// ----------------------------- 
// for(let i=0; i<mui_name.length; i++){
//     for(let j=i; j<imdb_rating.length; j++){
//     console.log(mui_name[i].textContent);
//     console.log(imdb_rating[i].textContent);


//     }
// }
// ------------------------------- 

for(let i=0; i<mui_name.length; i++){
    console.log("Movie is : "+mui_name[i].textContent + " Movie rating is : "+ imdb_rating[i].textContent);
}







// for(let i=0; i<imdb_rating.length; i++){
// }

})