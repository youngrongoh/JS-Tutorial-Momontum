const clockContainer = document.querySelector('.js-clock');
const clockHours = clockContainer.querySelector('.js-hours');
const clockMinutes = clockContainer.querySelector('.js-minutes');
const clockSeconds = clockContainer.querySelector('.js-seconds');

function getDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockHours.textContent = `${
      hours < 10 ? `0${hours}` : hours}`
    clockMinutes.textContent = `${
      minutes < 10 ? `0${minutes}` : minutes}`
    clockSeconds.textContent = `${
      seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
  getDate();
  setInterval(getDate, 1000)
}

init();