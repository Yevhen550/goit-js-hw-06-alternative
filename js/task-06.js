const inputEl = document.querySelector("#validation-input");
const lengthBasic = inputEl.dataset.length;

inputEl.addEventListener("blur", (event) => {
  const length = event.target.value.length;

  if (length === +lengthBasic) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
