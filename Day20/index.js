// #JavaScriptmas 2021 Day 20 Challenge

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.

const inputs = document.querySelectorAll(".controls input");
const eyes = document.querySelectorAll(".eye");
const nose = document.querySelectorAll(".nose");
const buttons = document.querySelectorAll(".button");
const eyeColor = document.getElementById("color");
const noseColor = document.getElementById("color2");
const buttonColor = document.getElementById("color3");

loadEventListeners()
function loadEventListeners() {
eyeColor.addEventListener("change", newEyeColor);
noseColor.addEventListener("change", newNoseColor);
buttonColor.addEventListener("change", newButtonColor);
}

function newEyeColor () {
  eyes.forEach ((eye)=>(eye.style.background = eyeColor.value));
}

function newNoseColor () {
  nose.forEach ((nose)=>(nose.style.background = noseColor.value));
}

function newButtonColor () {
  buttons.forEach ((button)=>(button.style.background = buttonColor.value));
}