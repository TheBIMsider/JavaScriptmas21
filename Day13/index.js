// #JavaScriptmas 2021 Day 13 Challenge

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

const btn = document.getElementById("btn")
const altBtn = document.getElementById("altBtn")
const veg = document.getElementById("vegetarian-input")
const guests = document.getElementById("num-input")
let food = document.getElementById("food")

loadEventListeners()
function loadEventListeners() {
  btn.addEventListener("click", xmasDinner);
  altBtn.addEventListener("click", altDinner);
}

function xmasDinner () {
  if (guests.value === "0") {
    alert("Come on there is at least you, enter 1 or more guests ;^)")
  } else if (veg.checked && guests.value <= 3) {
    food.textContent = "Nut Roast"
  } else if (veg.checked === false && guests.value <= 3) {
    food.textContent = "Game Hen"
  } else if (veg.checked && guests.value == 4) {
    food.textContent = "Candied Yams"
  } else if (veg.checked === false && guests.value == 4) {
    food.textContent = "Turkey"
  } else if (veg.checked && guests.value == 5) {
    food.textContent = "Candied Yams"
  } else if (veg.checked === false && guests.value == 5) {
    food.textContent = "Turkey"
  } else if (veg.checked && guests.value >= 6) {
    food.textContent = "Tofurky"
  } else if (veg.checked === false && guests.value >= 6) {
    food.textContent = "Turducken"
  } else {
    food.textContent = ""
  }
}

function altDinner () {
  if (guests.value === "0") {
    alert("Come on there is at least you, enter 1 or more guests :)")
  } else if (veg.checked && guests.value <= 3) {
    food.textContent = "Roasted Butternut Squash Soup"
  } else if (veg.checked === false && guests.value <= 3) {
    food.textContent = "KFC"
  } else if (veg.checked && guests.value == 4) {
    food.textContent = "Vegetarian Pizza"
  } else if (veg.checked === false && guests.value == 4) {
    food.textContent = "Pizza"
  } else if (veg.checked && guests.value == 5) {
    food.textContent = "Vegetarian Pizza"
  } else if (veg.checked === false && guests.value == 5) {
    food.textContent = "Pizza"
  } else if (veg.checked && guests.value >= 6) {
    food.textContent = "Christmas Cabbage"
  } else if (veg.checked === false && guests.value >= 6) {
    food.textContent = "Chinese Food Buffet"
  } else {
    food.textContent = ""
  }
}