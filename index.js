// For Player One
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);

var randomImg1 = "/images/dice" + randomNumber1 + ".png";
//Tap into the image source by setting attribute.

var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomImg1);

// For Player Two
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "/images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src", randomImg2);

function dice() {
    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
dice();