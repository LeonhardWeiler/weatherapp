# Weather App

A static web app that shows the current weather and a forecast for a city, using the [OpenWeatherMap](https://openweathermap.org/api) API. Search a city, then add more cities to compare. The chosen cities are kept in `localStorage`.

## Run

The scripts are ES modules, so serve the folder over HTTP instead of opening `index.html` directly:

```sh
python3 -m http.server
```

Then open <http://localhost:8000>.

## Structure

- `index.html` – entry page with the city search
- `js/main.js` – search suggestions, city list, `localStorage`
- `js/weather.js` – OpenWeatherMap requests and filling in the data
- `js/blueprint.js` – HTML templates for the weather view
- `css/style.css` – styles; `css/bootstrap.min.css` is vendored Bootstrap
- `fonts/` – Inter font and favicon

## License

GPL-3.0, see [LICENSE](LICENSE).
