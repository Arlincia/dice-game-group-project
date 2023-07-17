// Editing player names 
function editNames() {
    let firstPlayer= prompt("Hey Player 1: Insert your name?");
    let playerName = document.querySelector("p"[0]);
    playerName.innerHTML = firstPlayer

     let secondPlayer= prompt("Hey Player 2: Insert your name?");
    let newplayerName = document.querySelector("p.Player2");
    newplayerName.innerHTML = secondPlayer
    
}


// first user dice
// Generate a random number from 1 to 6
function diceGame() {
    const firstRandomNumber = Math.floor(Math.random()*6)+1

// images/face(the random number generated from 1-6).png 
const firstDiceImage = 'images/dice' + firstRandomNumber +  '.png';

document.querySelectorAll("img")[0] .setAttribute("src",firstDiceImage);

// second user dice
// Generate a random number from 1 to 6
const secondRandomNumber = Math.floor(Math.random()*6)+1

// images/face(the random number generated from 1-6).png 
const secondDiceImage = 'images/dice' + secondRandomNumber +  '.png';

document.querySelectorAll("img")[1] .setAttribute("src",secondDiceImage);

   
//determine the winner
let result= document.querySelectorAll("h2")[1];

if ( secondRandomNumber< firstRandomNumber) {
   result.innerHTML=  document.querySelector("p.Player1").innerHTML 
     + " WINS! &#128681; ";

}
else if (firstRandomNumber < secondRandomNumber) {
	result.innerHTML= document.querySelector("p.Player2").innerHTML 
     + " WINS! &#128681; ";
}
else {
	result.innerHTML= "&#128681; It is a draw! &#128681;";
}
}
let applyButton = document.getElementById("play")
applyButton.addEventListener("click",diceGame)


// for the minions laughing sound to be heard each time the rollthedice button is clicked
let play = document.getElementById("play");
function playMusic() {
  let audio = new Audio("laughing-minions.mp3");
  audio.play();
}

play.addEventListener("click", playMusic);

// confetti release
function basic(){
  confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});
}
