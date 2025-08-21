// let inputElement = document.querySelector("input");
// let remainingText;

// function logInputValue(event) {
//   remainingText = 60 - event.target.value.length;
// }

// inputElement.addEventListener("input", logInputValue);

let productNameInputElement = document.getElementById("product-name");
let remainingTextElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const remainingTextChars = maxAllowedChars - event.target.value.length;

  remainingTextElement.textContent = remainingTextChars;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
