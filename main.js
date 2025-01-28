const tempCurrent = document.querySelector('.temp-current');
const imgCurrent = document.querySelector('.img-current');
const nameCurrent = document.querySelector('.name-current');
const descCurrent = document.querySelector('.desc-current');
const timeCurrent = document.querySelector('.time-current');

//-----------------------------------------------------------

const day1 = document.querySelector('.day-1');
const minTempDay1 = document.querySelector('.min-temp-day-1');
const medTempDay1 = document.querySelector('.med-temp-day-1');
const maxTempDay1 = document.querySelector('.max-temp-day-1');

const day2 = document.querySelector('.day-2');
const minTempDay2 = document.querySelector('.min-temp-day-2');
const medTempDay2 = document.querySelector('.med-temp-day-2');
const maxTempDay2 = document.querySelector('.max-temp-day-2');

const day3 = document.querySelector('.day-3');
const minTempDay3 = document.querySelector('.min-temp-day-3');
const medTempDay3 = document.querySelector('.med-temp-day-3');
const maxTempDay3 = document.querySelector('.max-temp-day-3');

const day4 = document.querySelector('.day-4');
const minTempDay4 = document.querySelector('.min-temp-day-4');
const medTempDay4 = document.querySelector('.med-temp-day-4');
const maxTempDay4 = document.querySelector('.max-temp-day-4');

const day5 = document.querySelector('.day-5');
const minTempDay5 = document.querySelector('.min-temp-day-5');
const medTempDay5 = document.querySelector('.med-temp-day-5');
const maxTempDay5 = document.querySelector('.max-temp-day-5');

const day6 = document.querySelector('.day-6');
const minTempDay6 = document.querySelector('.min-temp-day-6');
const medTempDay6 = document.querySelector('.med-temp-day-6');
const maxTempDay6 = document.querySelector('.max-temp-day-6');

//-----------------------------------------------------------

const city1 = document.querySelector('.city-1');
const city1TempCurrent = document.querySelector('.city-1-temp-current');

const city1MinTempCurrent = document.querySelector('.city-1-min-temp-current');
const city1MedTempCurrent = document.querySelector('.city-1-med-temp-current');
const city1MaxTempCurrent = document.querySelector('.city-1-max-temp-current');
const city1ImgCurrent = document.querySelector('.city-1-img-current');

const city1Day1 = document.querySelector('.city-1-day-1');
const city1MinTempDay1 = document.querySelector('.city-1-min-temp-day-1');
const city1MedTempDay1 = document.querySelector('.city-1-med-temp-day-1');
const city1MaxTempDay1 = document.querySelector('.city-1-max-temp-day-1');
const city1ImgDay1 = document.querySelector('.city-1-img-day-1');

const city1Day2 = document.querySelector('.city-1-day-2');
const city1MinTempDay2 = document.querySelector('.city-1-min-temp-day-2');
const city1MedTempDay2 = document.querySelector('.city-1-med-temp-day-2');
const city1MaxTempDay2 = document.querySelector('.city-1-max-temp-day-2');
const city1ImgDay2 = document.querySelector('.city-1-img-day-2');

const city2 = document.querySelector('.city-2');
const city2TempCurrent = document.querySelector('.city-2-temp-current');

const city2MinTempCurrent = document.querySelector('.city-2-min-temp-current');
const city2MedTempCurrent = document.querySelector('.city-2-med-temp-current');
const city2MaxTempCurrent = document.querySelector('.city-2-max-temp-current');
const city2ImgCurrent = document.querySelector('.city-2-img-current');

const city2Day1 = document.querySelector('.city-2-day-1');
const city2MinTempDay1 = document.querySelector('.city-2-min-temp-day-1');
const city2MedTempDay1 = document.querySelector('.city-2-med-temp-day-1');
const city2MaxTempDay1 = document.querySelector('.city-2-max-temp-day-1');
const city2ImgDay1 = document.querySelector('.city-2-img-day-1');

const city2Day2 = document.querySelector('.city-2-day-2');
const city2MinTempDay2 = document.querySelector('.city-2-min-temp-day-2');
const city2MedTempDay2 = document.querySelector('.city-2-med-temp-day-2');
const city2MaxTempDay2 = document.querySelector('.city-2-max-temp-day-2');
const city2ImgDay2 = document.querySelector('.city-2-img-day-2');

const city3 = document.querySelector('.city-3');
const city3TempCurrent = document.querySelector('.city-3-temp-current');

const city3MinTempCurrent = document.querySelector('.city-3-min-temp-current');
const city3MedTempCurrent = document.querySelector('.city-3-med-temp-current');
const city3MaxTempCurrent = document.querySelector('.city-3-max-temp-current');
const city3ImgCurrent = document.querySelector('.city-3-img-current');

const city3Day1 = document.querySelector('.city-3-day-1');
const city3MinTempDay1 = document.querySelector('.city-3-min-temp-day-1');
const city3MedTempDay1 = document.querySelector('.city-3-med-temp-day-1');
const city3MaxTempDay1 = document.querySelector('.city-3-max-temp-day-1');
const city3ImgDay1 = document.querySelector('.city-3-img-day-1');

const city3Day2 = document.querySelector('.city-3-day-2');
const city3MinTempDay2 = document.querySelector('.city-3-min-temp-day-2');
const city3MedTempDay2 = document.querySelector('.city-3-med-temp-day-2');
const city3MaxTempDay2 = document.querySelector('.city-3-max-temp-day-2');
const city3ImgDay2 = document.querySelector('.city-3-img-day-2');

//------------------------------------------------------------------------------

const API_KEY = "2fa73590fd8b5a4c6e68098ad5625395";

function formatTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const hours = Math.floor(date.getHours());
  return `${hours < 10 ? '0' : ''}${hours}`;
}

function updateCurrentWeather(weather) {
  const temp = Math.round(weather.main.temp);
  const desc = weather.weather[0].description;
  const icon = weather.weather[0].icon;
  const name = weather.name;
  const time = formatTime(weather.dt);

  const tempElem = document.querySelectorAll('.temp-current');
  const imgElem = document.querySelectorAll('.img-current');
  const nameElem = document.querySelectorAll('.name-current');
  const descElem = document.querySelectorAll('.desc-current');
  const timeElem = document.querySelectorAll('.time-current');

  tempElem.forEach((item) => {
    item.textContent = `${temp}°C`;
  });
  nameElem.forEach((item) => {
    item.textContent = name;
  });
  descElem.forEach((item) => {
    item.textContent = desc;
  });
  timeElem.forEach((item) => {
    item.textContent = time;
  });
  imgElem.forEach((item) => {
    item.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    item.alt = desc;
  });
}

function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((weather) => {
      if (weather.cod === 200) {
        updateCurrentWeather(weather);
        console.log(weather);
      } else {
        console.error(`Fehler beim Abrufen der Daten: ${weather.message}`);
      }
    })
    .catch((error) => {
      console.error("API Fehler:", error);
    });
}

function fetchForecast(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((forecast) => {
      if (forecast.cod === "200") {
        updateForecast(forecast);
        console.log(forecast);
      } else {
        console.error(`Fehler beim Abrufen der Vorhersage: ${forecast.message}`);
      }
    })
    .catch((error) => {
      console.error("API Fehler:", error);
    });
}

function updateForecast(forecast) {
  const forecasts = forecast.list.slice(0, 5);

  forecasts.forEach((item, index) => {
    const temp = Math.round(item.main.temp);
    const time = formatTime(item.dt);
    const icon = item.weather[0].icon;

    const imgElem = document.querySelector(`.img-current-${index + 1}`);
    const tempElem = document.querySelector(`.temp-current-${index + 1}`);
    const timeElem = document.querySelector(`.time-current-${index + 1}`);

    if (imgElem && tempElem && timeElem) {
      imgElem.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      tempElem.textContent = `${temp}°C`;
      timeElem.textContent = time;
    }
  });
}

fetchWeather("Villach");
fetchForecast("Villach");

