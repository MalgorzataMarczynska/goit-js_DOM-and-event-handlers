"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const controlItems = document.querySelector("#controls");
const input = controlItems.firstElementChild;
const boxes = document.querySelector("#boxes");

let inputValue = 0;
input.addEventListener("input", (event) => {
  inputValue = Number(event.currentTarget.value);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    if (amount > 100) {
      alert(
        "You achived maximum amount of boxes, choose number less than 100!"
      );
      return;
    }
    const newBoxRest = document.createElement("div");
    boxes.append(newBoxRest);
    newBoxRest.classList.add("new-boxes");
    let newDivWidth = 30 + i * 10 + "px";
    let newDivHeight = 30 + i * 10 + "px";
    newBoxRest.style.width = newDivWidth;
    newBoxRest.style.height = newDivHeight;
    //żeby otrzymać wszystkie elementy w jednym kolorze -- newBoxRest.style.backgroundColor = randomColor;
    newBoxRest.style.backgroundColor = getRandomHexColor();
  }
}
function destroyBoxes() {
  const newBoxes = document.querySelectorAll(".new-boxes");
  newBoxes.forEach((box) => {
    box.remove();
  });
}

function resetFunc() {
  input.value = "";
  inputValue = "0";
}
createBtn.addEventListener("click", () => {
  createBoxes(inputValue);
  resetFunc();
});
destroyBtn.addEventListener("click", destroyBoxes);
