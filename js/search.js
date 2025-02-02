const searchInput = document.querySelector(".search-main");
const suggestionsContainer = document.querySelector(".suggestions");
const apiKey = "2fa73590fd8b5a4c6e68098ad5625395";
let currentSuggestions = [];

async function fetchCities(query) {
  if (query.length < 2) {
    suggestionsContainer.style.display = "none";
    return;
  }

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=7&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    currentSuggestions = await response.json();
    showSuggestions(currentSuggestions);
  } catch (error) {
    console.error("Fehler beim Laden der Städte:", error);
  }
}

function showSuggestions(cities) {
  suggestionsContainer.innerHTML = "";
  if (cities.length === 0) {
    suggestionsContainer.style.display = "none";
    return;
  }

  cities.forEach(city => {
    const div = document.createElement("div");
    div.textContent = `${city.name}, ${city.country}`;
    div.addEventListener("click", () => {
      selectCity(city.name);
    });
    suggestionsContainer.appendChild(div);
  });

  suggestionsContainer.style.display = "block";
}

function selectCity(cityName) {
  searchInput.value = cityName;
  suggestionsContainer.style.display = "none";
  localStorage.setItem("mainCity", cityName);
}

searchInput.addEventListener("input", () => {
  fetchCities(searchInput.value);
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && currentSuggestions.length > 0) {
    event.preventDefault();
    selectCity(currentSuggestions[0].name);
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-container")) {
    suggestionsContainer.style.display = "none";
  }
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        document.querySelector('.search-main').focus();
    }
});

