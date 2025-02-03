import { createStructure, addCity, inputCity } from "./blueprint.js";
import { fetchCurrentCity, fetchOtherCities } from "./weather.js";

const searchInput = document.querySelector(".search-main");
const suggestionsContainer = document.querySelector(".suggestions");
const apiKey = "2fa73590fd8b5a4c6e68098ad5625395";
let currentSuggestions = [];
let cities = [];

searchInput.value = "";

if (localStorage.getItem("mainCity")) {
  createStructure();
  fetchCurrentCity(localStorage.getItem("mainCity"));

  for (let i = 0; i < cities.length; i++) {
    addCity(i);
  }
  fetchOtherCities(cities);
}

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
    suggestionsContainer.appendChild(div);
  });

  suggestionsContainer.style.display = "block";
}

suggestionsContainer.addEventListener("click", async (event) => {
  const cityName = event.target.textContent.split(",")[0];
  const isValid = await checkCityAPI(cityName);

  if (isValid) {
    selectCity(cityName);
  } else {
    console.error("Stadt nicht gefunden oder ungültig.");
    const searchMain = document.querySelector(".search-main");
    searchMain.style.outline = "2px solid #ee0000";
  }
});

function selectCity(cityName) {
  suggestionsContainer.style.display = "none";
  localStorage.setItem("mainCity", cityName);
  createStructure();
  fetchCurrentCity(cityName);
}

searchInput.addEventListener("input", () => {
  fetchCities(searchInput.value);
});

searchInput.addEventListener("keydown", async (event) => {
  if (event.key === "Enter" && currentSuggestions.length > 0) {
    event.preventDefault();

    const cityName = currentSuggestions[0].name;
    const isValid = await checkCityAPI(cityName);

    if (isValid) {
      selectCity(cityName);
    } else {
      console.error("Stadt nicht gefunden oder ungültig.");
      const searchMain = document.querySelector(".search-main");
      searchMain.style.outline = "2px solid #ee0000";
    }
  }
});

async function checkCityAPI(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    return response.ok;
  } catch (error) {
    console.error("Fehler bei der API-Anfrage:", error);
    return false;
  }
}

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

document.addEventListener('click', function (event) {
  const addCityBox = event.target.closest('.add-city-box');
  if (addCityBox) {
    const selectedCity = inputCity();
    if (!selectedCity) return;
    cities.push(selectedCity);
    addCity(cities.length - 1);
    fetchOtherCities(cities);
    return;
  }

  const changeCityIcon = event.target.closest('.change-city-icon');
  if (changeCityIcon) {
    localStorage.removeItem('mainCity');
    window.location.reload();
  }

  const deleteCityIcon = event.target.closest('.delete-city-icon');
  if (deleteCityIcon) {
    const cityBox = deleteCityIcon.closest('.city-preview-box');
    if (!cityBox) return;

    let next = cityBox.nextElementSibling;
    while (next && !next.classList.contains('city-preview-box') && !next.classList.contains('add-city-box')) {
      let toRemove = next;
      next = next.nextElementSibling;
      toRemove.remove();
    }

    cityBox.remove();
  }
});

