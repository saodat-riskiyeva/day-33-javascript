let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
}
paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function logInputValue(event) {
  // console.log(inputElement.value);
  console.log(event.target.value);
}

inputElement.addEventListener("input", logInputValue);
