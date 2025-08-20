let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
}
paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function logInputValue() {
  console.log(inputElement.value);
}

inputElement.addEventListener("input", logInputValue);
