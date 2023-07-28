"use strict";

const validationInput = document.querySelector("#validation-input");

const checkStringLength = () => {
  const userString = validationInput.value;
  const optLength = validationInput.dataset.length;
  if (userString.length == optLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
    return;
  }
  validationInput.classList.add("invalid");
  validationInput.classList.remove("valid");
  return;
};
validationInput.addEventListener("blur", checkStringLength);
