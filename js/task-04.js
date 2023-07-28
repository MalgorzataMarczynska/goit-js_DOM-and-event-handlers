"use strict";

let counterValue = 0;
const btnDecreased = document.querySelector('button[data-action="decrement"]');
const btnIncreased = document.querySelector('button[data-action="increment"]');
const output = document.querySelector("#value");

//--wersja dłuższa--
// btnDecreased.addEventListener("click", () => {
//   counterValue -= 1;
//   output.textContent = counterValue;
// });
// btnIncreased.addEventListener("click", () => {
//   counterValue += 1;
//   output.textContent = counterValue;
// });

//--wersja krótsza - funkcyjna
const counter = (event) => {
  counterValue += Number(event.currentTarget.textContent);
  output.textContent = counterValue;
};
btnDecreased.addEventListener("click", counter);
btnIncreased.addEventListener("click", counter);
