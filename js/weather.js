const weather = document.querySelector('.js-weather');

const API_KEY = '322b480723ef83f7e2f973700fe70668';
const COORDS = 'coords';

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response) {
    return response.json();
  }).then(function(json) {
    const temperature = json.main.temp;
    const place = json.name;
    const icon = json.weather[0].icon
    const img = `<img class="weather__icon" src="http://openweathermap.org/img/wn/${icon}@2x.png">`
    console.log(icon)
    weather.innerHTML = `(${img}) ${Math.round(temperature)}℃ @ ${place}`
  })
}

function saveCoords(coordObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('Can\'t access geo location')
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude)

  }
}

export function init() {
  loadCoords();
}

init();