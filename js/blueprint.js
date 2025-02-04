export function createStructure() {
const structure = `
    <header class="container">
      <div class="heading">
        <h1 class="text-xl temp-current"></h1>
        <img class="icon-heading img-current">
      </div>
      <div class="subtitle">
        <div class="which-city">
          <p class="city name-current"></p>
          <div class="change-city-icon">
            <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.294 7.959c.259-.324.207-.796-.116-1.055s-.795-.208-1.055.115l1.171.94zM6.811 14.849l.568.49c.006-.006.012-.013.017-.02l-.585-.47zM6.64 15.267l-.748-.049-.001.014.75.035zM6.5 18.29l-.749-.035a.805.805 0 00.003.112l.746-.077zM7.287 18.977l.025.75c.05-.002.1-.009.148-.02l-.173-.73zM10.287 18.266l.173.73.012-.003-.185-.727zM10.672 18.022l.579.477.006-.008-.585-.469zM17.297 10.959c.259-.324.207-.796-.116-1.055s-.795-.208-1.055.115l1.171.94zM12.127 7.021c-.259.324-.207.796.116 1.055s.796.208 1.055-.115l-1.171-.94zM14.3 5.51l.585.469c.01-.012.02-.025.03-.038l-.615-.431zM15.929 5.19l.48-.576a.8.8 0 00-.075-.055l-.405.631zM18.166 7.052l.531-.53a.8.8 0 00-.051-.047l-.48.577zM18.503 7.873h.75v-.001l-.75.001zM18.157 8.69l-.525-.536c-.021.021-.041.043-.06.066l.585.47zM16.127 10.02c-.26.323-.208.795.115 1.055.324.259.796.208 1.055-.115l-1.17-.94zM13.454 7.379c-.061-.41-.443-.692-.853-.63-.41.062-.692.444-.631.854l1.484-.224zM16.813 11.233c.41-.056.698-.434.642-.844-.056-.41-.434-.698-.844-.643l.202 1.487zM12.124 7.021L6.226 14.38l1.17.939 5.898-7.359-1.17-.939zM6.243 14.359a1.6 1.6 0 00-.35.86l1.497.098a.792.792 0 00.01-.023l-1.157-.935zM5.891 15.232l-.14 3.023 1.498.07.14-3.023-1.498-.07zM5.754 18.367c.082.792.762 1.386 1.558 1.36l-.05-1.499c-.003 0-.005 0-.006 0a.2.2 0 01-.005-.002l-.006-.005a.2.2 0 01-.004-.006l-1.49.152zM7.46 19.707l3-0.711-.346-1.46-3 .711.346 1.46zM10.472 18.993c.305-.078.578-.251.779-.494l-1.157-.954c.002-.003.005-.005.009-.006l.369 1.454zM11.257 18.491l6.04-7.532-1.17-.939-6.04 7.532 1.17.939zM13.297 7.959l1.588-1.98-1.17-.938-1.588 1.98 1.17.938zM14.914 5.941c.139-.197.408-.25.611-.12l.81-1.263c-.88-.563-2.047-.334-2.648.52l1.227.863zM15.449 5.766l2.237 1.862.96-1.153-2.237-1.862-.96 1.153zM17.635 7.582c.076.076.118.18.117.287h1.5c.003-.508-.197-.996-.556-1.355l-.561 1.068zM17.753 7.869c-.001.107-.045.21-.121.285l1.05 1.072c.363-.355.568-.84.571-1.347l-1.5-.01zM17.572 8.22l-1.445 1.8 1.17.939 1.445-1.8-1.17-.939zM11.97 7.601c.35 2.331 2.507 3.949 4.843 3.632l-.202-1.486c-1.523.207-2.929-.848-3.157-2.368l-1.484.222z"
                fill="#000000"
              />
            </svg>
          </div>
        </div>
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
        <div class="add-city-box">
          <div class="plus-icon"></div>
        </div>
      </div>
    </footer>
`;

const body = document.querySelector('body');
body.innerHTML = structure;
}

export function addCity(id) {
  const smallCity = `
          <div class="title">
            <div class="city-group">
              <h2 class="text-l city-${id}"></h2>
              <div class="delete-city-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            </div>
            <p class="city-${id}-temp-current"></p>
          </div>
          <div class="preview">
            <div class="city-preview">
              <h3 class="day city-${id}-day-0"></h3>
              <div class="min-tmp city-${id}-min-temp-current"></div>
              <div class="line-tmp city-${id}-med-temp-current"></div>
              <div class="max-tmp city-${id}-max-temp-current"></div>
              <img class="icon city-${id}-img-current">
            </div>
            <div class="city-preview">
              <h3 class="day city-${id}-day-1"></h3>
              <div class="min-tmp city-${id}-min-temp-day-1"></div>
              <div class="line-tmp city-${id}-med-temp-day-1"></div>
              <div class="max-tmp city-${id}-max-temp-day-1"></div>
              <img class="icon city-${id}-img-day-1">
            </div>
            <div class="city-preview">
              <h3 class="day city-${id}-day-2"></h3>
              <div class="min-tmp city-${id}-min-temp-day-2"></div>
              <div class="line-tmp city-${id}-med-temp-day-2"></div>
              <div class="max-tmp city-${id}-max-temp-day-2"></div>
              <img class="icon city-${id}-img-day-2">
            </div>
          </div>
  `;

  const otherCityGrid = document.querySelector('.other-city-grid');
  const div = document.createElement('div');
  div.classList.add('city-preview-box')
  div.innerHTML = smallCity;
  otherCityGrid.insertBefore(div, otherCityGrid.firstChild);
}

export function inputCity(use) {
  const inputStructure = `
    <div class="popup-container">
      <input type="text" class="popup-input" placeholder="Enter a city name">
      <div class="popup-suggestions"></div>
    </div>
  `;

  const body = document.querySelector('body');
  const div = document.createElement('div');
  div.classList.add('popup-box');
  div.setAttribute('use', use);
  div.innerHTML = inputStructure;
  body.appendChild(div);

  document.body.style.overflow = 'hidden';

  const popupInput = document.querySelector('.popup-input');
  popupInput.focus();
}
