// Sum numbers from 0 till a given number using a for loop

const userNumberElement = document.getElementById("user-number");
const buttonCalculateSum = document.querySelector("#calculator button");
const resultSum = document.getElementById("calculated-sum");

let sum = 0;

function calculatedSum() {
  for (let i = 0; i <= userNumberElement.valueAsNumber; i++) {
    sum = sum + i;
  }
  resultSum.textContent = sum;
  resultSum.style.display = "block";
  userNumberElement.value = "";
  sum = 0;
}

buttonCalculateSum.addEventListener("click", calculatedSum);

// Highlights links in the text
const highlightButton = document.querySelector("#highlight-links button");
const links = document.querySelectorAll("#highlight-links a");

function highlightLinks() {
  for (const link of links) {
    link.classList.add("highlight");
  }
}

highlightButton.addEventListener("click", highlightLinks);
