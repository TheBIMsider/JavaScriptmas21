// #JavaScriptmas 2021 Day 16 Challenge

// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals: 
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc. 

const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")
const btn = document.getElementById("btn")
const suggestedMovie = document.getElementById("suggested-movie")

loadEventListeners()
function loadEventListeners() {
  btn.addEventListener("click", movieChoice);
}

const moviesArr = [
    {
      name: "Die Hard",
      age: "R",
      genre: "Action"
    },
    {
      name: "Love Actually",
      age: "R",
      genre: "Romance"
    },
    {
      name: "Bad Santa",
      age: "R",
      genre: "Comedy"
    },
    {
      name: "Christmas Vacation",
      age: "R",
      genre: "Classic"
    },
    {
      name: "Home Alone",
      age: "PG",
      genre: "Action"
    },
    {
      name: "It's a Wonderful Life",
      age: "PG",
      genre: "Romance"
    },
    {
      name: "A Christmas Story",
      age: "PG",
      genre: "Comedy"
    },
    {
      name: "How The Grinch Stole Christmas!",
      age: "PG",
      genre: "Classic"
    }
]

function movieChoice() {
  for (let i = 0; i < moviesArr.length; i++) {
      if (ageSelector.value === moviesArr[i].age && genreSelector.value === moviesArr[i].genre) {
          suggestedMovie.textContent = moviesArr[i].name;
          suggestedMovie.style.color = "#32CD32"
          suggestedMovie.style.fontWeight = "900"
          suggestedMovie.style.fontFamily = "Mountains of Christmas"
          suggestedMovie.style.fontSize = "50px"
      }
  }
}