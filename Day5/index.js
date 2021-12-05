// #JavaScriptmas 2021 Day 5 Challenge

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.

const writeCardBtn = document.getElementById("btn");
const cardMessage = document.getElementById("greeting-display");
const greetings = [
  "Santa Claus is coming to town!",
  "We wish you a Merry Christmas!",
  "Happy holidays!",
  "Ho, ho, ho! Merry Christmas!",
  "Jingle all the way!",
];
loadEventListeners();
function loadEventListeners() {
  writeCardBtn.addEventListener("click", writeCard);
}
function writeCard() {
  const random = Math.floor(Math.random() * greetings.length);
  cardMessage.innerText = greetings[random];
}
