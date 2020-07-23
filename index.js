var randomNumber1=Math.floor(Math.random()*6);
var arrayImages=["images/dice1.png","images/dice2.png", "images/dice3.png" , "images/dice4.png","images/dice5.png", "images/dice6.png"];

document.querySelector(".img1").setAttribute("src", arrayImages[randomNumber1]);

var randomNumber2= Math.floor(Math.random()*6);
document.querySelector(".img2").setAttribute("src", arrayImages[randomNumber2]);

if (randomNumber1===0 && randomNumber2===0){
  document.querySelector("h1").innerHTML = "Draw, Roll Again!";
}
else if  (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw, Roll Again!";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🎉 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
}
