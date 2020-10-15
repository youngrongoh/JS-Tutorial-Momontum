const body = document.querySelector('body');

function handleImgLoad() {
  
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `imgs/${imgNumber + 1}.jpg`
  image.classList.add('bgImage');
  body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * 5);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber)
}

init();