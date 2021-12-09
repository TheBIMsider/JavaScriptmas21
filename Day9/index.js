// #JavaScriptmas 2021 Day 9 Challenge

// Task:
// Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.

const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls)

function deckTheHalls() {
  if (decorator.checked) {
    house.innerHTML = "🎄🎅🏡🤶❄"
    document.body.className = "xmas-background"
} else {
  house.innerHTML = "🏡"
  document.body.className = " "
  }
}
