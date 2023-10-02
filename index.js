// var n = Math.random();
// var m= Math.random();
// n = n * 6 + 1;
// m = m * 6 + 1;
// n = Math.floor(n);
// m = Math.floor(m);

// // Dice One
// if (n === 1) {
//     document
//       .querySelector(".img1")
//       .setAttribute("src", "./images/dice1.png");
//   }
//   if (n === 2) {
//     document
//       .querySelector(".img1")
//       .setAttribute("src", "./images/dice2.png");
//   }
//   if (n === 3) {
//     document
//       .querySelector(".img1")
//       .setAttribute("src", "./images/dice3.png");
//   }
//   if (n === 4) {
//     document
//       .querySelector(".img1")
//       .setAttribute("src", "./images/dice4.png");
//   }
//   if (n === 5) {
//     document
//       .querySelector(".img1")
//       .setAttribute("src", "./images/dice5.png");
//   }
//   if (n === 6) {
//     document
//       .querySelector(".img1")
//       .setAttribute("src", "./images/dice6.png");
//   }

// //   Dice Two

// if (m === 1) {
//     document
//       .querySelector(".img2")
//       .setAttribute("src", "./images/dice1.png");
//   }
//   if (m === 2) {
//     document
//       .querySelector(".img2")
//       .setAttribute("src", "./images/dice2.png");
//   }
//   if (m === 3) {
//     document
//       .querySelector(".img2")
//       .setAttribute("src", "./images/dice3.png");
//   }
//   if (m=== 4) {
//     document
//       .querySelector(".img2")
//       .setAttribute("src", "./images/dice4.png");
//   }
//   if (m === 5) {
//     document
//       .querySelector(".img2")
//       .setAttribute("src", "./images/dice5.png");
//   }
//   if (m === 6) {
//     document
//       .querySelector(".img2")
//       .setAttribute("src", "./images/dice6.png");
//   }

// // Winner Diclare
// if(n>m){
//     document.querySelector("h1").innerHTML = "Player One 🚩"
// }
// else if(m>n){
//     document.querySelector("h1").innerHTML = "Player Two 🚩"
// }
// else if(n===m){
//     document.querySelector("h1").innerHTML = "Draw ⛳"
// }


// Dice One
var n = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + n + ".png";

var imageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);

// Dice Two

var m = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + m + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (n > m) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (n < m) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

