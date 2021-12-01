// Task:
// - Get today's date (you only need the day).
// - Calculate remaining days.
// - Display remaining days in countdownDisplay.
// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

const countdownDisplay = document.getElementById("countdown-display")
// Get current date information
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
//today = mm + '/' + dd + '/' + yyyy;
//document.write(today);

function renderCountdown(){
  const christmas = 25
  let daysLeft = String(christmas - dd)
  countdownDisplay.innerHTML = (daysLeft);
}

renderCountdown()





