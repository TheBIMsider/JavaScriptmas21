// #JavaScriptmas 2021 Day 17 Challenge

// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.

const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")

loadEventListeners()
function loadEventListeners() {
    btn.addEventListener("click", sort)
}

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    },
    {
        name: "Hans Gruber",
        hasBeenGood: false
    },
    {
        name: "John McClane",
        hasBeenGood: true
    },
    {
        name: "The Grinch",
        hasBeenGood: false
    },
    {
        name: "The Grinch",
        hasBeenGood: true
    }
]

function sort() {
    for (let i = 0; i < sorteesArr.length; i++) {
        if (sorteesArr[i].hasBeenGood === true) {
            niceList.innerHTML += `<li>${sorteesArr[i].name}</li>`
            niceList.style.color = "red"
            niceList.style.fontWeight = "900"
            niceList.style.fontFamily = "Lobster Two"
            niceList.style.fontSize = "35px"
        } else {
            naughtyList.innerHTML += `<li>${sorteesArr[i].name}</li>`
            naughtyList.style.color = "#32CD32"
            naughtyList.style.fontWeight = "900"
            naughtyList.style.fontFamily = "Mountains of Christmas"
            naughtyList.style.fontSize = "35px"
        }
    }
}
