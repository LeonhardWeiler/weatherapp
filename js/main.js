import { createStructure, addCity, inputCity } from "./blueprint.js";
import { fetchCurrentCity, fetchOtherCities, fetchNewCity } from "./weather.js";

const searchInput = document.querySelector(".search-main");
const suggestionsContainer = document.querySelector(".suggestions");

const apiKey = "2fa73590fd8b5a4c6e68098ad5625395";
let currentSuggestions = [];
let cities = [];
let idCounter = 0;

searchInput.value = "";

if (localStorage.getItem("mainCity")) {
  createStructure();
  fetchCurrentCity(localStorage.getItem("mainCity"));
  cities = JSON.parse(localStorage.getItem("cities")) || [];
  cities = cities.filter((city, index) => cities.indexOf(city) === index);
  fetchOtherCities(cities);

  for (let i = 0; i < cities.length; i++) {
    addCity(i);
  }
  fetchOtherCities(cities);
}

async function fetchCities(query, container) {
  if (query.length < 2) {
    container.style.display = "none";
    return;
  }

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=7&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    currentSuggestions = await response.json();
    showSuggestions(currentSuggestions, container);
  } catch (error) {
    console.error("Fehler beim Laden der Städte:", error);
  }
}

function showSuggestions(cities, container) {
  container.innerHTML = "";
  if (cities.length === 0) {
    container.style.display = "none";
    return;
  }

  cities.forEach(city => {
    const div = document.createElement("div");
    div.textContent = `${city.name}, ${city.country}`;
    container.appendChild(div);
  });

  container.style.display = "block";
}

suggestionsContainer.addEventListener("click", async (event) => {
  const cityName = event.target.textContent.split(",")[0];
  const isValid = await checkCityAPI(cityName);

  if (isValid) {
    selectCity(cityName);
  } else {
    console.error("Stadt nicht gefunden oder ungültig.");
    if (searchMain) {
      const searchMain = document.querySelector(".search-main");
      searchMain.style.outline = "2px solid #ee0000";
    }
    if (document.querySelector('.popup-input')) {
      const popupInput = document.querySelector('.popup-input');
      popupInput.style.outline = "2px solid #ee0000";
    }
  }
});

function selectCity(cityName) {
  suggestionsContainer.style.display = "none";
  localStorage.setItem("mainCity", cityName);
  createStructure();
  fetchCurrentCity(cityName);
  cities = JSON.parse(localStorage.getItem("cities")) || [];
  cities = cities.filter((city, index) => cities.indexOf(city) === index);
  for (let i = 0; i < cities.length; i++) {
    addCity(i);
  }
  fetchOtherCities(cities);
}

searchInput.addEventListener("input", () => {
  fetchCities(searchInput.value, suggestionsContainer);
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

document.addEventListener('keydown', async function(event) {
  if (event.ctrlKey && event.key === 'k') {
    if (document.querySelector('.search-main')) {
      event.preventDefault();
      if (document.activeElement === searchInput) return;
      document.querySelector('.search-main').focus();
    }
    if (document.querySelector('.add-city-box')) {
      event.preventDefault();
      if (document.querySelector('.popup-box')) return;
      const selectedCity = inputCity("other");
      if (!selectedCity) return;
      const isValid = await checkCityAPI(selectedCity);
      if (!isValid) return;

      addCity(idCounter);
      fetchNewCity(selectedCity, idCounter);
      setTimeout(() => {
        const cityElement = document.querySelector(`.city-${idCounter}`);

        if (cityElement) {
          cities.push(cityElement.textContent);
          idCounter++;
          localStorage.setItem('cities', JSON.stringify(cities));
        } else {
          console.log('City not found');
        }
      } , 100);

      return;
    }
  }
  if (event.key === 'Escape') {
    if (document.querySelector('.popup-box')) {
      event.preventDefault();
      const popupBox = document.querySelector('.popup-box');
      popupBox.remove();
      document.body.style.overflow = '';
    }
  }

  if (event.ctrlKey && event.key === 'p') {
    event.preventDefault();
    if (document.querySelector('.popup-box')) return;
    const selectedCity = inputCity("main");
    if (!selectedCity) return;
    localStorage.removeItem('mainCity');
    localStorage.setItem('mainCity', selectedCity);
    fetchCurrentCity(selectedCity);
    return;
  }

  if (event.key === 'Enter') {
    if (document.querySelector('.popup-suggestions')) {
      const box = document.querySelector('.popup-box');
      const popupSuggestions = document.querySelector('.popup-suggestions');

      event.preventDefault();
      let cityName;
      try {
        cityName = currentSuggestions[0].name;
      } catch {
        return;
      }
      if (!cityName) return;

      const isValid = await checkCityAPI(cityName);
      if (isValid) {
        if (box.getAttribute('use') === 'main') {
          box.remove();
          localStorage.setItem("mainCity", cityName);
          cities = cities.filter((city, index) => cities.indexOf(city) === index);
          fetchCurrentCity(cityName);
          document.body.style.overflow = '';
        }
        if (box.getAttribute('use') === 'other') {
          addCity(idCounter);
          fetchNewCity(cityName, idCounter);
          box.remove();
          document.body.style.overflow = '';
          setTimeout(() => {
            const cityElement = document.querySelector(`.city-${idCounter}`);

            if (cityElement) {
              cities.push(cityElement.textContent);
              idCounter++;
              localStorage.setItem('cities', JSON.stringify(cities));
            } else {
              console.log('City not found');
            }
          } , 100);
        }
      } else {
      popupSuggestions.firstChild.style.borderTop = "2px solid #ee0000"
      }
    }
  }
});

document.addEventListener('click', async function (event) {
  const addCityBox = event.target.closest('.add-city-box');
  if (addCityBox) {
      const selectedCity = inputCity("other");
      if (!selectedCity) return;

      addCity(idCounter);
      fetchNewCity(selectedCity, idCounter);
      setTimeout(() => {
        const cityElement = document.querySelector(`.city-${idCounter}`);

        if (cityElement) {
          cities.push(cityElement.textContent);
          idCounter++;
          localStorage.setItem('cities', JSON.stringify(cities));
        } else {
          console.log('City not found');
        }
      } , 100);

      return;
  }

  const changeCityIcon = event.target.closest('.change-city-icon');
  if (changeCityIcon) {
    localStorage.removeItem('mainCity');
    const selectedCity = inputCity("main");
    if (!selectedCity) return;
    localStorage.setItem('mainCity', selectedCity);
    fetchCurrentCity(selectedCity);
    return;
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

    const cityElement = deleteCityIcon.closest('.city-group').querySelector('h2');
    cities = cities.filter(city => city !== cityElement.textContent);
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  const popupSuggestions = document.querySelector('.popup-suggestions');
  if (popupSuggestions) {
    const cityName = event.target.textContent.split(",")[0];
    const isValid = await checkCityAPI(cityName);
    const box = document.querySelector('.popup-box');

    if (isValid) {
      if (box.getAttribute('use') === 'main') {
        box.remove();
        localStorage.setItem("mainCity", cityName);
        cities = cities.filter((city, index) => cities.indexOf(city) === index);
        fetchCurrentCity(cityName);
        document.body.style.overflow = '';
      }
      if (box.getAttribute('use') === 'other') {
        addCity(idCounter);
        fetchNewCity(cityName, idCounter);
        box.remove();
        document.body.style.overflow = '';
        setTimeout(() => {
          const cityElement = document.querySelector(`.city-${idCounter}`);

          if (cityElement) {
            cities.push(cityElement.textContent);
            idCounter++;
            localStorage.setItem('cities', JSON.stringify(cities));
          } else {
            console.log('City not found');
          }
        } , 100);
      }
    } else {
      popupSuggestions.firstChild.style.borderTop = "2px solid #ee0000"
    }
  }
});

document.addEventListener("input", function (_) {
  const activeElement = document.activeElement;
  const popupSuggestions = document.querySelector(".popup-suggestions");

  if (activeElement === document.querySelector(".popup-input")) {
    fetchCities(activeElement.value, popupSuggestions);
  }
});
