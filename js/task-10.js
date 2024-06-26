function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxEl = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");

let boxSize = 30;

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const amo = +(amount.currentTarget.value = inputEl.value);
  let newArr = [];

  for (let i = 0; i < amo; i++) {
    boxSize += 10;
    const newDiv = document.createElement("div");
    const color = getRandomHexColor();
    newDiv.style.backgroundColor = color;
    newDiv.style.width = `${boxSize}px`;
    newDiv.style.height = `${boxSize}px`;
    newArr.push(newDiv);
  }

  boxEl.append(...newArr);
}

function destroyBoxes() {
  boxEl.innerHTML = "";
  inputEl.value = "";
  boxSize = 20;
}
