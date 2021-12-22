// #JavaScriptmas 2021 Day 22 Challenge

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.

const btn = document.getElementById("btn");
let timer = document.getElementById("timer");
let affirmation = document.getElementById("affirmation");
let timeout;

loadEventListeners();
function loadEventListeners() {
  btn.addEventListener("click", startTimer);
}

const startingTime = 1; // in minutes
let time = (startingTime * 60) -1; // removes 1 second to account for time to start timer

function startTimer() {
  setInterval(updateCountdown, 1000);
  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.textContent = `${minutes}:${seconds}`;
    time--;
    if (time <= 0) {
      clearInterval(timer);
      timer.textContent = "Time for a Timmies!";
    }
  }
}
