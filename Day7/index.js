// #JavaScriptmas 2021 Day 7 Challenge

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.

const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
let xmasSong = new Audio("bells.mp3")
let songPlaying = false

loadEventListeners()
function loadEventListeners() {
  playBtn.addEventListener("click", play);
  pauseBtn.addEventListener("click", pause);
  stopBtn.addEventListener("click", stop);
}

function play () {
  xmasSong.play();
  songPlaying = true;
}

function pause () {
  songPlaying ? xmasSong.pause() : xmasSong.play();
}

function stop () {
  xmasSong.pause();
  xmasSong.currentTime = 0;
}
