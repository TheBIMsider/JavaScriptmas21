// #JavaScriptmas 2021 Day 23 Challenge

// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.

const input = document.getElementById("text-input");
const sign = document.getElementById("sign");

input.addEventListener("keyup", signMessage);

function signMessage () {
  let message = "🎅" + input.value + "☃️";
  sign.textContent = message;
  textInput.value = " ";
}
