const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const counterValue = document.getElementById("value");

counterValue.textContent = 0;

decrementBtn.addEventListener("click", () => {
  return counterValue.textContent--;
});

incrementBtn.addEventListener("click", () => {
  return counterValue.textContent++;
});
