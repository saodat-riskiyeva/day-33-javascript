const productNameInputElement = document.getElementById("product-name");
const remainingTextElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const remainingTextChars = maxAllowedChars - event.target.value.length;

  remainingTextElement.textContent = remainingTextChars;

  if (remainingTextChars <= 10) {
    remainingTextElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
  } else {
    remainingTextElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);

// =========================================================

for (let i = 0; i < 10; i = i + 2) {
  console.log(i);
}

const users = ["Max", "John", "Jane", "Alice", "Bob"];

for (const user of users) {
  console.log(user);
}

const useInfo = {
  name: "Max",
  age: 30,
  isAdmin: true,
};
for (const key in useInfo) {
  console.log(`${key}: ${useInfo[key]}`);
}

const isOk = false;

while (isOk) {
  console.log("It is OK");
}
