const productNameInputElement = document.getElementById("product-name");
const remainingTextElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const remainingTextChars = maxAllowedChars - event.target.value.length;

  remainingTextElement.textContent = remainingTextChars;

  if (remainingTextChars <= 10) {
    remainingTextElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
