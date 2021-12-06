// #JavaScriptmas 2021 Day 6 Challenge

// Task:
// - Add christmassify class to greeting.
// - Check whether christmassifierBtn has christmassify on it. 
// - If so, change text to "De-christmassify", if not, change text to "Christmassify"

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.

const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {

  greeting.classList.toggle("christmassified")

    if (christmassifierBtn.textContent === "Christmassify") {
      christmassifierBtn.textContent = "De-christmassify";
      document.body.className = "christmassified-background";

    } else {
      christmassifierBtn.textContent = "Christmassify";
      document.body.className = " ";
    }
}