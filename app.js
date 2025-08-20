let inputElement = document.querySelector("input");
let remainingText;

function logInputValue(event) {
  remainingText = 60 - event.target.value.length;
}

inputElement.addEventListener("input", logInputValue);
