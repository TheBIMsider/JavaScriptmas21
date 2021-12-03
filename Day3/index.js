// #JavaScriptmas 2021 Day 3 Challenge

// Task:
// - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
// - Run the function when the Fix button is clicked.

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.

const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");

loadEventListeners()
function loadEventListeners() {
  btn.addEventListener("click", fix);
}

function fix() {
  greeting.innerText = "🎅 Merry Christmas! ☃️";
  btn.innerHTML = "Fixed";
  greeting.style.fontFamily = ("Mountains of Christmas");
  document.body.style.backgroundColor = "red";
}
