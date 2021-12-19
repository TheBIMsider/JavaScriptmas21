// #JavaScriptmas 2021 Day 19 Challenge

// Task:
// - Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of
// - desserts on the click of a button.
// - Specific URL to get a random dessert image: 
// - https://foodish-api.herokuapp.com/api/images/dessert

// Stretch goals: 
// - Show multiple desserts.
// - Add the functionality to go back to the previous image.


const foodHolder = document.getElementById("foodHolder")
const btn = document.getElementById("btn")
btn.addEventListener("click", findYum)
const img = document.createElement("img")
img.classList.add ("image")
img.alt = "random food image"
foodHolder.appendChild(img)

async function getFood() {
  const req = await fetch("https://foodish-api.herokuapp.com/api/images/dessert/")
  const json = await req.json()
  return(json.image)
}

async function findYum() {
  const foodImage = await getFood()
  img.src =foodImage
}

(async function () {
  await findYum()
}) ()

// Thanks Leanne, Michael for your awesome Scrimba YouTube video
// explaining how to use the Foodish API. 
// https://youtu.be/OvFJMdrtaNw 