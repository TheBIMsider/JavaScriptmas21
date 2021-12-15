// #JavaScriptmas 2021 Day 15 Challenge

// Task: 
// - Write a function to display the correct greeting when a language is selected.

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".

const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
languageSelector.addEventListener("change", translate)

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "French",
        greeting: "Joyeux Noël!"
    },
    {
        language: "Irish",
        greeting: "Nollaig Shona!"
    },
    {
        language: "Norwegian",
        greeting: "God Jul!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    }
]

function translate() {
    let xmasGreeting = languageSelector.selectedIndex
    greetingDisplay.innerHTML = greetingsArr[xmasGreeting].greeting
}
