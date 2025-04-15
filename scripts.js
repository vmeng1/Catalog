// Array of books by Rick Riordan
const books = [
  {
    title: "The Lightning Thief",
    mythology: "Greek",
    series: "Percy Jackson & the Olympians",
    publication_date: "2005",
    image_url: "images/1.1.jpg"
  },
  {
    title: "The Sea of Monsters",
    mythology: "Greek",
    series: "Percy Jackson & the Olympians",
    publication_date: "2006",
    image_url: "images/1.2.jpg"
  },
  {
    title: "The Titan’s Curse",
    mythology: "Greek",
    series: "Percy Jackson & the Olympians",
    publication_date: "2007",
    image_url: "images/1.3.jpg"
  },
  {
    title: "The Battle of the Labyrinth",
    mythology: "Greek",
    series: "Percy Jackson & the Olympians",
    publication_date: "2008",
    image_url: "images/1.4.jpg"
  },
  {
    title: "The Last Olympian",
    mythology: "Greek",
    series: "Percy Jackson & the Olympians",
    publication_date: "2009",
    image_url: "images/1.5.jpg"
  },
  {
    title: "The Lost Hero",
    mythology: "Greek and Roman",
    series: "Heroes of Olympus",
    publication_date: "2010",
    image_url: "images/2.1.jpg"
  },
  {
    title: "The Son of Neptune",
    mythology: "Greek and Roman",
    series: "Heroes of Olympus",
    publication_date: "2011",
    image_url: "images/2.2.jpg"
  },
  {
    title: "The Mark of Athena",
    mythology: "Greek and Roman",
    series: "Heroes of Olympus",
    publication_date: "2012",
    image_url: "images/2.3.jpg"
  },
  {
    title: "The House of Hades",
    mythology: "Greek and Roman",
    series: "Heroes of Olympus",
    publication_date: "2013",
    image_url: "images/2.4.jpg"
  },
  {
    title: "The Blood of Olympus",
    mythology: "Greek and Roman",
    series: "Heroes of Olympus",
    publication_date: "2014",
    image_url: "images/2.5.jpg"
  },
  {
    title: "The Red Pyramid",
    mythology: "Egyptian",
    series: "The Kane Chronicles",
    publication_date: "2010",
    image_url: "images/3.1.jpg"
  },
  {
    title: "The Throne of Fire",
    mythology: "Egyptian",
    series: "The Kane Chronicles",
    publication_date: "2011",
    image_url: "images/3.2.jpg"
  },
  {
    title: "The Serpent’s Shadow",
    mythology: "Egyptian",
    series: "The Kane Chronicles",
    publication_date: "2012",
    image_url: "images/3.3.jpg"
  },
  {
    title: "The Sword of Summer",
    mythology: "Norse",
    series: "Magnus Chase and the Gods of Asgard",
    publication_date: "2015",
    image_url: "images/4.1.jpg"
  },
  {
    title: "The Hammer of Thor",
    mythology: "Norse",
    series: "Magnus Chase and the Gods of Asgard",
    publication_date: "2016",
    image_url: "images/4.2.jpg"
  },
  {
    title: "The Ship of the Dead",
    mythology: "Norse",
    series: "Magnus Chase and the Gods of Asgard",
    publication_date: "2017",
    image_url: "images/4.3.jpg"
  },
  {
    title: "The Hidden Oracle",
    mythology: "Greek and Roman",
    series: "The Trials of Apollo",
    publication_date: "2016",
    image_url: "images/5.1.jpg"
  },
  {
    title: "The Dark Prophecy",
    mythology: "Greek and Roman",
    series: "The Trials of Apollo",
    publication_date: "2017",
    image_url: "images/5.2.jpg"
  },
  {
    title: "The Burning Maze",
    mythology: "Greek and Roman",
    series: "The Trials of Apollo",
    publication_date: "2018",
    image_url: "images/5.3.jpg"
  },
  {
    title: "The Tyrant’s Tomb",
    mythology: "Greek and Roman",
    series: "The Trials of Apollo",
    publication_date: "2019",
    image_url: "images/5.4.jpg"
  },
  {
    title: "The Tower of Nero",
    mythology: "Greek and Roman",
    series: "The Trials of Apollo",
    publication_date: "2020",
    image_url: "images/5.5.jpg"
  },
];
let showFavoritesOnly = false;
let favorites = [];

// Change color up favorite button
function updateStarButton(button, title) {
  if (favorites.includes(title)) {
    button.textContent = "Favorited!";
    button.style.backgroundColor = "#ffd700";  // Change to yellow when favorited
  } else {
    button.textContent = "Add to Favorites";
    button.style.backgroundColor = "";  // Reset to default when not favorited
  }
}

// Adds/Removes book for favriote array
function toggleFavorite(title) {
  const index = favorites.indexOf(title);
  if (index === -1) {
    favorites.push(title);
  } else {
    favorites.splice(index, 1);
  }
  renderBooks();
}

// Toggle favorites view (Show all book or favorites only)
function updateToggleButton() {
  const toggleBtn = document.getElementById("toggle-favorites");
  if (showFavoritesOnly) {
    toggleBtn.textContent = "Show All Books";
    toggleBtn.classList.add("favorited");  // Add 'favorited' class to button
  } else {
    toggleBtn.textContent = "Show Favorites Only";
    toggleBtn.classList.remove("favorited");  // Remove 'favorited' class from button
  }
}

// Display books on page
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
          <li>Mythology: ${book.mythology}</li>
          <li>Published: ${book.publication_date}</li>
        </ul>
        <button class="star-button">Add to Favorites</button>
      </div>
    `;

    const starBtn = card.querySelector(".star-button");
    updateStarButton(starBtn, book.title);

    starBtn.addEventListener("click", () => {
      toggleFavorite(book.title);
      updateStarButton(starBtn, book.title);
    });

    container.appendChild(card);
  });
}

// Filters display based on series, favorites and title search
function renderBooks() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const selectedSeries = document.getElementById("series-filter").value;

  let filteredBooks = books;

  // Filter by series
  if (selectedSeries) {
    filteredBooks = filteredBooks.filter(book => book.series === selectedSeries);
  }

  // Filter by searching title
  if (query) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(query)
    );
  }

  // Filter by favorites
  if (showFavoritesOnly) {
    filteredBooks = filteredBooks.filter(book => favorites.includes(book.title));
  }

  displayBooks(filteredBooks);
}

// Set up event listeners and initial state
document.addEventListener("DOMContentLoaded", () => {
  // Toggle favorites button logic
  document.getElementById("toggle-favorites").addEventListener("click", () => {
    showFavoritesOnly = !showFavoritesOnly;
    updateToggleButton();
    renderBooks();
  });

  // Series filter and search logic
  document.getElementById("series-filter").addEventListener("change", renderBooks);
  document.getElementById("search-input").addEventListener("input", renderBooks);

  updateToggleButton();  // Initialize the toggle button's state
  renderBooks();  // Render the initial list of books
});
