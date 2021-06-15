/*******************************Player 1***********************************/

//generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//use the random number to select an image of the dice from 1 to 6. 
//use this number to construct the path to one of these images.
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImageSource = "images/" + randomDiceImage;

//select the first image tag that corressponds to player 1
var imagePlayer1 = document.querySelectorAll("img")[0];

//set its source using previously constructed path. This changes the image for player 1.
imagePlayer1.setAttribute("src", randomDiceImageSource);

/**************************************************************************/


/*******************************Player 2***********************************/

//generate a random number between 1 and 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//use the random number to select an image of the dice from 1 to 6. 
//use this number to construct the path to one of these images.
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImageSource2 = "images/" + randomDiceImage2;

//select the first image tag that corressponds to player 2
var imagePlayer2 = document.querySelectorAll("img")[1];

//set its source using previously constructed path. This changes the image for player 2.
imagePlayer2.setAttribute("src", randomDiceImageSource2);

/**************************************************************************/

/*******************************Winner***********************************/
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇Player 1 WINS!!! 🏆🎲"
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a DRAW!! 😑 Try again!!"
}
else {
    document.querySelector("h1").innerHTML = "🥇Player 2 WINS!!! 🏆🎲"
}