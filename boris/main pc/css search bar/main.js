const suggestionList = ["orange", "apple", "banana"];
const inputField = document.querySelector("#search-box");
const autocompleteBox = document.querySelector(".autocomplete");
inputField.addEventListener("focusin", () => {
  autocompleteBox.classList.add("shown");
});
inputField.addEventListener("focusout", () => {
  autocompleteBox.classList.remove("shown");
});

const optionClick = (event) => {
  inputField.value = event.target.innerText;
};
inputField.addEventListener("keyup", () => {
  const available = suggestionList.filter(
    (suggest) => suggest.indexOf(inputField.value) !== -1
  );

  autocompleteBox.innerHTML = "";
  available.forEach((item) => {
    const li = document.createElement("li");

    li.classList.add("autocomplete-suggestion");

    li.onclick = optionClick;
    li.innerText = item;
    autocompleteBox.appendChild(li);
  });
});
