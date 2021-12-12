// #JavaScriptmas 2021 Day 12 Challenge

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?

const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

loadEventListeners()
function loadEventListeners() {
  btn.addEventListener("click", addedGuest);
}

function showGuests() {
  let fullList = "";
  for (let i = 0; i < guests.length; i++) {
    fullList+= `<li>${guests[i]}</li>`; 
  }
guestList.innerHTML = fullList;
}
showGuests();

function addedGuest() {
  let addedGuest = "";
  if(input.value === "") {
  } else {
    addedGuest = input.value;
    guestList.innerHTML+= `<li>${addedGuest}</li>`;
    input.value = "";
  }
}
