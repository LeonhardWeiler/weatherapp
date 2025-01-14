fetch('https://api.openweathermap.org/data/2.5/weather?q=villach&units=metric&APPID=2fa73590fd8b5a4c6e68098ad5625395')
.then((weather) => {
    return weather.json();
})
.then(displayResults);

function displayResults(weather) {
  console.log(weather);
}
