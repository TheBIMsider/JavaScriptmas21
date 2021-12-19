// #JavaScriptmas 2021 Day 18 Challenge

// Task:
// - Write the CSS to create custom checkboxes for our shopping list.

// Stretch goals:
// - Add a different random check for each item.
// - Use JavaScript to match the custom check to the item listed, e.g. socks would have socks as the checkmark.

const items = ["Candles", "Decorations", "Chocolate"];
const checklist = document.getElementById("checklist");

for (let i = 0; i < items.length; i++) {
  checklist.innerHTML += `
        <div class="checklist-item">
                <input type="checkbox" id="${items[i]}" value="${items[i]}">
                <label for="${items[i]}" class="strikethrough">
                    <span class="custom-checkbox">${items[i]}
                </label>
            </div>
    `;
}
