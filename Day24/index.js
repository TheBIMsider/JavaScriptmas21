// #JavaScriptmas 2021 Day 24 Challenge

// Task:
// - Write a function to launch the sleigh! 
// - Write the CSS required to launch Santa and his sleigh. Check out this cool animation generator: https://animista.net/play/exits/

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.

const crew = document.getElementById("crew")
const btn = document.getElementById("btn")

btn.addEventListener("click", launch)

function launch() {
  crew.classList.add("slide-out-elliptic-right-bck")
}
