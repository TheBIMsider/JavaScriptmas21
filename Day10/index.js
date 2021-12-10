// #JavaScriptmas 2021 Day 10 Challenge

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.

const meter = document.getElementById("meter")
const progress = document.getElementById("progress")

let date = new Date();
let today = date.getDate();
const percent = ((today/25)* 100 +"%");
meter.value = today;

function daysLeft() {
  progress.innerText = "Christmas is " + percent + " ready";
}

daysLeft ()


