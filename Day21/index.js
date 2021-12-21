// #JavaScriptmas 2021 Day 21 Challenge

// Task:
// - Retrieve distance from previous destination from array of objects.
// - Calculate speed and round speed to an integer (whole number).
// - Display speed in speedometer paragraph.

// Stretch goals:
// - Calculate average overall speed.
// - Display location as North Pole on pageload.

const speedometer = document.getElementById("speedometer");
const select = document.getElementById("select");
const time = document.getElementById("time");
const btn = document.getElementById("avgBtn");
//let currentLocation = ""
//let timeTaken = 0

loadEventListeners();
function loadEventListeners() {
  btn.addEventListener("click", calculateSpeed);
}

let destination = [
  {
    name: "North Pole",
    distanceFromPrevDestination: 0,
  },
  {
    name: "Munich",
    distanceFromPrevDestination: 2892,
  },
  {
    name: "Kiev",
    distanceFromPrevDestination: 1111,
  },
  {
    name: "Ulaanbaatar",
    distanceFromPrevDestination: 5324,
  },
  {
    name: "Sydney",
    distanceFromPrevDestination: 5458,
  },
  {
    name: "Tijuana",
    distanceFromPrevDestination: 6531,
  },
  {
    name: "Chicago",
    distanceFromPrevDestination: 1729,
  },
  {
    name: "Calgary",
    distanceFromPrevDestination: 1524,
  },
];

function calculateSpeed() {
  let speed = 0;
  let duration = parseInt(time.value);
  currentLocation = select.value;

  destination.forEach((destination) => {
    if (currentLocation === destination.name) {
      if (duration <= 0) {
        alert("Please enter a positive journey time in hours");
      } else if (duration > 0) {
        speed = Math.round(destination.distanceFromPrevDestination / duration);
        speedometer.textContent = `Reindeer's average speed to location: ${speed} mph`;
      }
    }
  });
}
