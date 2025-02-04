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
    item.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
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
        updateWeatherForDays(forecast.list);
        updateWeekdays();
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
      imgElem.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      tempElem.textContent = `${temp}°C`;
      timeElem.textContent = time;
    }
  });
}

function getWeekdays(amount) {
  const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const today = new Date();
  const nextDays = [];

  for (let i = 1; i <= amount; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    nextDays.push(weekdays[nextDay.getDay()]);
  }

  return nextDays;
}

function updateWeekdays() {
  const days = getWeekdays(6);

  days.forEach((day, index) => {
    const dayElem = document.querySelector(`.day-${index + 1}`);
    if (dayElem) {
      dayElem.textContent = day;
    }
  });
}

function groupForecastByDay(forecastList) {
  const grouped = {};

  forecastList.forEach((item) => {
    const date = new Date(item.dt * 1000).toISOString().split("T")[0];
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(item.main.temp);
  });

  return grouped;
}

function calculateDailyStats(groupedData) {
  return Object.entries(groupedData).map(([date, temps]) => {
    const sortedTemps = temps.sort((a, b) => a - b);
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    const median =
      sortedTemps.length % 2 === 0
        ? (sortedTemps[sortedTemps.length / 2 - 1] + sortedTemps[sortedTemps.length / 2]) / 2
        : sortedTemps[Math.floor(sortedTemps.length / 2)];

    return { date, min, max, median };
  });
}

function updateWeatherForDays(forecastList) {
  const groupedData = groupForecastByDay(forecastList);
  const dailyStats = calculateDailyStats(groupedData);
  const weekdays = getWeekdays(6);

  dailyStats.slice(0, 6).forEach((stats, index) => {
    const minElem = document.querySelector(`.min-temp-day-${index + 1}`);
    const maxElem = document.querySelector(`.max-temp-day-${index + 1}`);
    const medElem = document.querySelector(`.med-temp-day-${index + 1}`);
    const dayElem = document.querySelector(`.day-${index + 1}`);

    if (minElem && medElem && maxElem && dayElem) {
      const offset = ((stats.median - stats.min) / (stats.max - stats.min)) * 100;

      dayElem.textContent = weekdays[index];
      minElem.textContent = `${Math.round(stats.min)}°C`;
      maxElem.textContent = `${Math.round(stats.max)}°C`;

      medElem.style.setProperty('--line-offset', `${offset}%`);
    }
  });
}

function fetchWeatherOtherCities(cityArray) {
  cityArray.forEach((city, index) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;

    fetch(apiUrl)
    .then((response) => response.json())
    .then((weather) => {
      if (weather.cod === 200) {
        updateOtherCitiesCurrentWeather(weather, index);
      } else {
        console.error(`Fehler beim Abrufen der Daten: ${weather.message}`);
      }
    })
    .catch((error) => {
      console.error("API Fehler:", error);
    });
  });
}

function fetchForecastOtherCities(city) {
  city.forEach((city, index) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`;

    fetch(apiUrl)
    .then((response) => response.json())
    .then((forecast) => {
      if (forecast.cod === "200") {
        updateOtherCitiesForecast(forecast, index);
      } else {
        console.error(`Fehler beim Abrufen der Vorhersage: ${forecast.message}`);
      }
    })
    .catch((error) => {
      console.error("API Fehler:", error);
    });
  });
}

function updateOtherCitiesForecast(forecast, id) {
  const forecasts = forecast.list.slice(0, 2);
  const weekdays = getWeekdays(2);

  forecasts.forEach((item, index) => {
    const icon = item.weather[0].icon;
    const desc = item.weather[0].description;
    const maxTemp = Math.round(item.main.temp_max);
    const minTemp = Math.round(item.main.temp_min);
    const medTemp = Math.round((maxTemp + minTemp) / 2);

    const imgElem = document.querySelector(`.city-${id}-img-day-${index + 1}`);
    const maxTempElem = document.querySelector(`.city-${id}-max-temp-day-${index + 1}`);
    const medTempElem = document.querySelector(`.city-${id}-med-temp-day-${index + 1}`);
    const minTempElem = document.querySelector(`.city-${id}-min-temp-day-${index + 1}`);
    const dayElem = document.querySelector(`.city-${id}-day-${index + 1}`);

    if (!imgElem || !maxTempElem || !medTempElem || !minTempElem || !dayElem) {
      return;
    }

    const offset = ((medTemp - minTemp) / (maxTemp - minTemp)) * 100;
    medTempElem.style.setProperty('--line-offset', `${offset}%`);

    imgElem.src = `https://openweathermap.org/img/wn/${icon}.png`;
    imgElem.alt = desc;
    maxTempElem.textContent = `${maxTemp}°C`;
    minTempElem.textContent = `${minTemp}°C`;
    dayElem.textContent = weekdays[index];
  });
}

function updateOtherCitiesCurrentWeather(weather, id) {
  const temp = Math.round(weather.main.temp);
  const icon = weather.weather[0].icon;
  const name = weather.name;
  const maxTemp = Math.round(weather.main.temp_max);
  const minTemp = Math.round(weather.main.temp_min);
  const medTemp = Math.round((maxTemp + minTemp) / 2);
  const desc = weather.weather[0].description;

  const tempElem = document.querySelector(`.city-${id}-temp-current`);
  const imgElem = document.querySelector(`.city-${id}-img-current`);
  const minTempElem = document.querySelector(`.city-${id}-min-temp-current`);
  const medTempElem = document.querySelector(`.city-${id}-med-temp-current`);
  const maxTempElem = document.querySelector(`.city-${id}-max-temp-current`);
  const nameElem = document.querySelector(`.city-${id}`);
  const todayElem = document.querySelector(`.city-${id}-day-0`);

  if (!tempElem || !imgElem || !minTempElem || !medTempElem || !maxTempElem || !nameElem || !todayElem) {
    return;
  }

  const offset = ((medTemp - minTemp) / (maxTemp - minTemp)) * 100;
  medTempElem.style.setProperty('--line-offset', `${offset}%`);

  tempElem.textContent = `${temp}°C`;
  nameElem.textContent = name;
  minTempElem.textContent = `${minTemp}°C`;
  maxTempElem.textContent = `${maxTemp}°C`;
  todayElem.textContent = "Heute";

  imgElem.src = `https://openweathermap.org/img/wn/${icon}.png`;
  imgElem.alt = desc;
}

function fetchWeatherNewCity(city, index) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((weather) => {
      if (weather.cod === 200) {
        updateOtherCitiesCurrentWeather(weather, index);
      } else {
        console.error(`Fehler beim Abrufen der Daten: ${weather.message}`);
      }
    })
    .catch((error) => {
      console.error("API Fehler:", error);
    });
}

function fetchForecastNewCity(city, index) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((forecast) => {
      if (forecast.cod === "200") {
        updateOtherCitiesForecast(forecast, index);
      } else {
        console.error(`Fehler beim Abrufen der Vorhersage: ${forecast.message}`);
      }
    })
    .catch((error) => {
      console.error("API Fehler:", error);
    });
}

export function fetchOtherCities(cityArray) {
  fetchWeatherOtherCities(cityArray);
  fetchForecastOtherCities(cityArray);
}

export function fetchNewCity(city, index) {
  fetchWeatherNewCity(city, index);
  fetchForecastNewCity(city, index);
}

export function fetchCurrentCity(city) {
  fetchWeather(city);
  fetchForecast(city);
}

