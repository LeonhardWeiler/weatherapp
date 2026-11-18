# Weather App

Static weather page: search a city, show current weather and forecast from the OpenWeatherMap API. Plain HTML, CSS and ES modules with vendored Bootstrap; no build step, no dependencies, no tests.

## Layout

- `index.html` – search page, loads `js/main.js`
- `js/main.js` – search, suggestions, city list in `localStorage`
- `js/weather.js` – API calls and filling the DOM
- `js/blueprint.js` – HTML templates for the weather view
- `css/style.css` – own styles; `*.min.*` files are vendored Bootstrap, do not edit

The API key is in both `js/main.js` and `js/weather.js`.

## Run

ES modules need HTTP, not `file://`:

```sh
nix run nixpkgs#python3 -- -m http.server 8000
```

Open http://localhost:8000.

## Check

No automated checks. Run the page and search a city; the browser console must stay free of errors.
