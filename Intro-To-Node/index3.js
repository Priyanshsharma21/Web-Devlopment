const pokemon = require('pokemon');
 
pokemon.random();
 
let wildPokemon = pokemon.random();
 
let myPokemon = pokemon.random();
 
let randomNumber = Math.floor((Math.random() * 2));
 
console.log("*You are walking and hear a rustling in the grass*");
setTimeout(function() {
  console.log("'huh...'");
}, 1000);
setTimeout(function() {
  console.log("*A wild " + wildPokemon + " appears!*");
}, 2000);
setTimeout(function() {
  console.log("'I have an insatiable urge to catch this Pokemon! Time to BATTLE!");
}, 4000);
setTimeout(function() {
  console.log("'" + myPokemon + ", I choose you!'");
}, 8000);
setTimeout(function() {
  console.log("*" + wildPokemon + " and " + myPokemon + " battle valiantly, though it is coming to an end...*");
}, 11000);
setTimeout(function() {
  if (randomNumber >= 1) {
    console.log("'Oh... " + wildPokemon + " defeated " + myPokemon + "! He got away this time...'");
  } else {
    console.log("'Oh... " + myPokemon + " defeated " + wildPokemon + "! Now I caught him with my Pokeball!'")
  }
}, 14000);
setTimeout(function() {
  console.log("'Now I must continue my journey to catch them all and become the greatest Pokemon Trainer!'");
}, 17000);