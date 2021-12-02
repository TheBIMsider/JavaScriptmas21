// #JavaScriptmas Challenge 2

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customize the themes.
// - Turn the radio buttons into a toggle switch.

const body = document.getElementById("body");
const christmasBtn = document.getElementById("christmas");
const snowBtn = document.getElementById("snow");
const greeting = document.getElementById("greeting");

loadEventListeners()
function loadEventListeners() {
  christmasBtn.addEventListener("click", showChristmas);
  snowBtn.addEventListener("click", showSnow);
}
function showChristmas() {
  document.getElementById("body").classList.remove("snow");
  document.getElementById("body").classList.add("christmas");
  greeting.innerText = "🎅 Merry Christmas!";
}
function showSnow() {
  document.getElementById("body").classList.remove("christmas");
  document.getElementById("body").classList.add("snow");
  greeting.innerText = "☃️ Let it Snow!";
}