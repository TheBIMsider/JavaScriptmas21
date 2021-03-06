// #JavaScriptmas 2021 Day 4 Challenge

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

const items = ["Candles", "Chocolate", "Decorations", "Sugar Cookies", "Wrapping Paper"]
const checklist = document.getElementById("checklist")

for (let i=0; i < items.length; i++){
  checklist.innerHTML +=
  `<div class="checklist-item">
  <input type="checkbox"/>
  <label class="strikethrough">${items[i]}</label>
  </div>`
}
