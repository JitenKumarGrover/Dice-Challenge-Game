	var randomNum1 = Math.floor(Math.random() * 6) + 1 ;
	var randomImage1 = "images/dice" + randomNum1 + ".png";

document.querySelector(".img1").setAttribute("src" , randomImage1) ;

var randomNum2 = Math.floor(Math.random() * 6) + 1 ;
var randomImage2 = "images/dice" + randomNum2 + ".png";

document.querySelector(".img2").setAttribute("src" , randomImage2) ;

if( randomNum1 > randomNum2){
	document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNum1 < randomNum2){
	document.querySelector("h1").innerHTML = "Player 2 Wins! ";
} else{
	document.querySelector("h1").innerHTML = "Draw!";
}