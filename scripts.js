// Array of books by Rick Riordan
const books = [
  {
    title: "The Lightning Thief",
    authors: "Rick Riordan",
    series: "Percy Jackson & the Olympians",
    publication_date: "2005",
    image_url: "images/1.1.jpg"
  },
  {
    title: "The Sea of Monsters",
    authors: "Rick Riordan",
    series: "Percy Jackson & the Olympians",
    publication_date: "2006",
    image_url: "images/1.2.jpg"
  },
  {
    title: "The Titan’s Curse",
    authors: "Rick Riordan",
    series: "Percy Jackson & the Olympians",
    publication_date: "2007",
    image_url: "images/1.3.jpg"
  },
  {
    title: "The Battle of the Labyrinth",
    authors: "Rick Riordan",
    series: "Percy Jackson & the Olympians",
    publication_date: "2008",
    image_url: "images/1.4.jpg"
  },
  {
    title: "The Last Olympian",
    authors: "Rick Riordan",
    series: "Percy Jackson & the Olympians",
    publication_date: "2009",
    image_url: "images/1.5.jpg"
  },
  {
    title: "The Lost Hero",
    authors: "Rick Riordan",
    series: "Heroes of Olympus",
    publication_date: "2010",
    image_url: "images/2.1.jpg"
  },
  {
    title: "The Son of Neptune",
    authors: "Rick Riordan",
    series: "Heroes of Olympus",
    publication_date: "2011",
    image_url: "images/2.2.jpg"
  },
  {
    title: "The Mark of Athena",
    authors: "Rick Riordan",
    series: "Heroes of Olympus",
    publication_date: "2012",
    image_url: "images/2.3.jpg"
  },
  {
    title: "The House of Hades",
    authors: "Rick Riordan",
    series: "Heroes of Olympus",
    publication_date: "2013",
    image_url: "images/2.4.jpg"
  },
  {
    title: "The Blood of Olympus",
    authors: "Rick Riordan",
    series: "Heroes of Olympus",
    publication_date: "2014",
    image_url: "images/2.5.jpg"
  },
  {
    title: "The Red Pyramid",
    authors: "Rick Riordan",
    series: "The Kane Chronicles",
    publication_date: "2010",
    image_url: "images/3.1.jpg"
  },
  {
    title: "The Throne of Fire",
    authors: "Rick Riordan",
    series: "The Kane Chronicles",
    publication_date: "2011",
    image_url: "images/3.2.jpg"
  },
  {
    title: "The Serpent’s Shadow",
    authors: "Rick Riordan",
    series: "The Kane Chronicles",
    publication_date: "2012",
    image_url: "images/3.3.jpg"
  },
  {
    title: "The Sword of Summer",
    authors: "Rick Riordan",
    series: "Magnus Chase and the Gods of Asgard",
    publication_date: "2015",
    image_url: "images/4.1.jpg"
  },
  {
    title: "The Hammer of Thor",
    authors: "Rick Riordan",
    series: "Magnus Chase and the Gods of Asgard",
    publication_date: "2016",
    image_url: "images/4.2.jpg"
  },
  {
    title: "The Ship of the Dead",
    authors: "Rick Riordan",
    series: "Magnus Chase and the Gods of Asgard",
    publication_date: "2017",
    image_url: "images/4.3.jpg"
  },
  {
    title: "The Hidden Oracle",
    authors: "Rick Riordan",
    series: "The Trials of Apollo",
    publication_date: "2016",
    image_url: "images/5.1.jpg"
  },
  {
    title: "The Dark Prophecy",
    authors: "Rick Riordan",
    series: "The Trials of Apollo",
    publication_date: "2017",
    image_url: "images/5.2.jpg"
  },
  {
    title: "The Burning Maze",
    authors: "Rick Riordan",
    series: "The Trials of Apollo",
    publication_date: "2018",
    image_url: "images/5.3.jpg"
  },
  {
    title: "The Tyrant’s Tomb",
    authors: "Rick Riordan",
    series: "The Trials of Apollo",
    publication_date: "2019",
    image_url: "images/5.4.jpg"
  },
  {
    title: "The Tower of Nero",
    authors: "Rick Riordan",
    series: "The Trials of Apollo",
    publication_date: "2020",
    image_url: "images/5.5.jpg"
  },
];

let showFavoritesOnly = false;


// This function filters books based on the selected series
function filterBooks() {
  const selectedSeries = document.getElementById("series-filter").value;
  const filteredBooks = selectedSeries
    ? books.filter((book) => book.series === selectedSeries)
    : books;

  displayBooks(filteredBooks);
}

// This function will display books in card format
function displayBooks(filteredBooks) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  filteredBooks.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-content">
        <h2>${book.title}</h2>
        <img src="${book.image_url}" alt="${book.title} Poster" />
        <ul>
          <li>Series: ${book.series}</li>
          <li>Author: ${book.authors}</li>
          <li>Published: ${book.publication_date}</li>
        </ul>
      </div>
    `;

    cardContainer.appendChild(card);
  });
}
let favorites = [];

function displayBooks(filteredBooks) {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  filteredBooks.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-content">
        <h2>${book.title}</h2>
        <img src="${book.image_url}" alt="${book.title} cover" />
        <ul>
          <li>Series: ${book.series}</li>
          <li>Author: ${book.authors}</li>
          <li>Published: ${book.publication_date}</li>
        </ul>
        <button class="star-button">⭐ Add to Favorites</button>
      </div>
    `;

    const starBtn = card.querySelector(".star-button");

    // Set initial button state
    updateStarButton(starBtn, book.title);

    // Add listener to toggle favorite
    starBtn.addEventListener("click", () => {
      toggleFavorite(book.title);
      updateStarButton(starBtn, book.title);
    });

    container.appendChild(card);
  });
}
function toggleFavorite(title) {
  const index = favorites.indexOf(title);
  if (index === -1) {
    favorites.push(title);
  } else {
    favorites.splice(index, 1);
  }
  console.log("Favorites:", favorites);
}

function updateStarButton(button, title) {
  if (favorites.includes(title)) {
    button.textContent = "⭐ Favorited!";
    button.style.backgroundColor = "#ffd700";
  } else {
    button.textContent = "⭐ Add to Favorites";
    button.style.backgroundColor = "";
  }
}


// This function is called to display books initially
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggle-favorites").addEventListener("click", () => {
    showFavoritesOnly = !showFavoritesOnly;
    updateToggleButton();
    renderBooks();
  });



  updateToggleButton();

  renderBooks();
});

function updateToggleButton() {
  const toggleBtn = document.getElementById("toggle-favorites");
  toggleBtn.textContent = showFavoritesOnly ? "Show All Books" : "Show Favorites Only";
}

function filterBooks() {
  renderBooks();
}
function renderBooks() {
  const selectedSeries = document.getElementById("series-filter").value;

  let filteredBooks = books;

  if (selectedSeries) {
    filteredBooks = filteredBooks.filter(book => book.series === selectedSeries);
  }

  if (showFavoritesOnly) {
    filteredBooks = filteredBooks.filter(book => favorites.includes(book.title));
  }


  displayBooks(filteredBooks);
}
