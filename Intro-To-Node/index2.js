const superheroes = require('superheroes');
const supervillains = require('supervillains');

var superVillainsNames = supervillains.random()
var superHeroName = superheroes.random();

var randomNumner = Math.floor(Math.random()*2);
// var allnames = superheroes.all;
// console.log(allnames);
console.log(superHeroName +" v/s "+superVillainsNames);

setTimeout(function(){
    console.log("....And The Fight Begins");
},500);

setInterval(() => {
    if(randomNumner>=1){
        console.log(superVillainsNames+ " Defeat " + superHeroName + " World in danger.....Bhagoooo");
    }
    else(
        console.log(superHeroName+ "Defeat "+superVillainsNames+ " World is saved.......nachoooo")
    )
}, 1000);