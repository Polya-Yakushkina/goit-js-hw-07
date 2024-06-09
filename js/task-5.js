function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const backColor = document.querySelector('.color');

button.addEventListener('click', handlerClick);

function handlerClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  backColor.textContent = document.body.style.backgroundColor;
}

