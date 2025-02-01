const structure = `
    <header class="container">
      <div class="heading">
        <h1 class="text-xl temp-current"></h1>
        <img class="icon-heading img-current">
      </div>
      <div class="subtitle">
        <p class="city name-current"></p>
        <p class="description desc-current"></p>
      </div>
    </header>
    <main class="container">
      <div class="col-12 timeline">
        <div class="line">
          <div class="time" id="time-12">
            <img class="icon img-current">
            <div class="time-temp temp-current"></div>
            <div class="line-v"></div>
            <div class="time-number time-current"></div>
          </div>
          <div class="time" id="time-13">
            <img class="icon img-current-1">
            <div class="time-temp temp-current-1"></div>
            <div class="line-v"></div>
            <div class="time-number time-current-1"></div>
          </div>
          <div class="time" id="time-14">
            <img class="icon img-current-2">
            <div class="time-temp temp-current-2"></div>
            <div class="line-v"></div>
            <div class="time-number time-current-2"></div>
          </div>
          <div class="time" id="time-15">
            <img class="icon img-current-3">
            <div class="time-temp temp-current-3"></div>
            <div class="line-v"></div>
            <div class="time-number time-current-3"></div>
          </div>
          <div class="time" id="time-16">
            <img class="icon img-current-4">
            <div class="time-temp temp-current-4"></div>
            <div class="line-v"></div>
            <div class="time-number time-current-4"></div>
          </div>
          <div class="time" id="time-17">
            <img class="icon img-current-5">
            <div class="time-temp temp-current-5"></div>
            <div class="line-v"></div>
            <div class="time-number time-current-5"></div>
          </div>
        </div>
      </div>
      <div class="row next-days">
        <div class="col-12 col-md-4 next-day-container">
          <h3 class="day text-l day-1"></h3>
          <p class="min-tmp min-temp-day-1"></p>
          <div class="line-tmp med-temp-day-1"></div>
          <p class="max-tmp max-temp-day-1"></p>
        </div>
        <div class="col-12 col-md-4 next-day-container">
          <h3 class="day text-l day-2"></h3>
          <div class="min-tmp min-temp-day-2"></div>
          <div class="line-tmp med-temp-day-2"></div>
          <div class="max-tmp max-temp-day-2"></div>
        </div>
        <div class="col-12 col-md-4 next-day-container">
          <h3 class="day text-l day-3"></h3>
          <div class="min-tmp min-temp-day-3"></div>
          <div class="line-tmp med-temp-day-3"></div>
          <div class="max-tmp max-temp-day-3"></div>
        </div>
        <div class="col-12 col-md-4 next-day-container">
          <h3 class="day text-l day-4"></h3>
          <div class="min-tmp min-temp-day-4"></div>
          <div class="line-tmp med-temp-day-4"></div>
          <div class="max-tmp max-temp-day-4"></div>
        </div>
        <div class="col-12 col-md-4 next-day-container">
          <h3 class="day text-l day-5"></h3>
          <div class="min-tmp min-temp-day-5"></div>
          <div class="line-tmp med-temp-day-5"></div>
          <div class="max-tmp max-temp-day-5"></div>
        </div>
        <div class="col-12 col-md-4 next-day-container">
          <h3 class="day text-l day-6"></h3>
          <div class="min-tmp min-temp-day-6"></div>
          <div class="line-tmp med-temp-day-6"></div>
          <div class="max-tmp max-temp-day-6"></div>
        </div>
      </div>
    </main>
    <footer class="container">
      <div class="other-city-grid">
        <div class="city-preview-box">
          <div class="title">
            <h2 class="text-l city-1"></h2>
            <p class="city-1-temp-current"></p>
          </div>
          <div class="preview">
            <div class="city-preview">
              <h3 class="day city-1-day-0"></h3>
              <div class="min-tmp city-1-min-temp-current"></div>
              <div class="line-tmp city-1-med-temp-current"></div>
              <div class="max-tmp city-1-max-temp-current"></div>
              <img class="icon city-1-img-current">
            </div>
            <div class="city-preview">
              <h3 class="day city-1-day-1"></h3>
              <div class="min-tmp city-1-min-temp-day-1"></div>
              <div class="line-tmp city-1-med-temp-day-1"></div>
              <div class="max-tmp city-1-max-temp-day-1"></div>
              <img class="icon city-1-img-day-1">
            </div>
            <div class="city-preview">
              <h3 class="day city-1-day-2"></h3>
              <div class="min-tmp city-1-min-temp-day-2"></div>
              <div class="line-tmp city-1-med-temp-day-2"></div>
              <div class="max-tmp city-1-max-temp-day-2"></div>
              <img class="icon city-1-img-day-2">
            </div>
          </div>
        </div>
        <div class="city-preview-box">
          <div class="title">
            <h2 class="text-l city-2"></h2>
            <p class="city-2-temp-current"></p>
          </div>
          <div class="preview">
            <div class="city-preview">
              <h3 class="day city-2-day-0"></h3>
              <div class="min-tmp city-2-min-temp-current"></div>
              <div class="line-tmp city-2-med-temp-current"></div>
              <div class="max-tmp city-2-max-temp-current"></div>
              <img class="icon city-2-img-current">
            </div>
            <div class="city-preview">
              <h3 class="day city-2-day-1"></h3>
              <div class="min-tmp city-2-min-temp-day-1"></div>
              <div class="line-tmp city-2-med-temp-day-1"></div>
              <div class="max-tmp city-2-max-temp-day-1"></div>
              <img class="icon city-2-img-day-1">
            </div>
            <div class="city-preview">
              <h3 class="day city-2-day-2"></h3>
              <div class="min-tmp city-2-min-temp-day-2"></div>
              <div class="line-tmp city-2-med-temp-day-2"></div>
              <div class="max-tmp city-2-max-temp-day-2"></div>
              <img class="icon city-2-img-day-2">
            </div>
          </div>
        </div>
        <div class="city-preview-box">
          <div class="title">
            <h2 class="text-l city-3"></h2>
            <p class="city-3-temp-current"></p>
          </div>
          <div class="preview">
            <div class="city-preview">
              <h3 class="day city-3-day-0"></h3>
              <div class="min-tmp city-3-min-temp-current"></div>
              <div class="line-tmp city-3-med-temp-current"></div>
              <div class="max-tmp city-3-max-temp-current"></div>
              <img class="icon city-3-img-current">
            </div>
            <div class="city-preview">
              <h3 class="day city-3-day-1"></h3>
              <div class="min-tmp city-3-min-temp-day-1"></div>
              <div class="line-tmp city-3-med-temp-day-1"></div>
              <div class="max-tmp city-3-max-temp-day-1"></div>
              <img class="icon city-3-img-day-1">
            </div>
            <div class="city-preview">
              <h3 class="day city-3-day-2"></h3>
              <div class="min-tmp city-3-min-temp-day-2"></div>
              <div class="line-tmp city-3-med-temp-day-2"></div>
              <div class="max-tmp city-3-max-temp-day-2"></div>
              <img class="icon city-3-img-day-2">
            </div>
          </div>
        </div>
      </div>
    </footer>
`;

const body = document.querySelector('body');
body.innerHTML = structure;
