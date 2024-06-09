function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createBtn.addEventListener('click', handlerCreate);
destroyBtn.addEventListener('click', handlerDestroy);

function handlerCreate() {
  const amount = Number(inputNumber.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = '';
  }
  else {
    alert(`Please enter a number between 1 and 100.`);
  }
}

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesDiv.textContent = ''; // або boxesDiv.innerHTML = '';
  boxesDiv.append(...boxes); // або boxes.forEach(box => boxesDiv.appendChild(box));
}

function handlerDestroy() {
  boxesDiv.textContent = ''; // або boxesDiv.innerHTML = '';
}

