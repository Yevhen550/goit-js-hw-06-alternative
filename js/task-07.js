const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("change", (event) => {
  const onTargetValue = event.target.value;

  textEl.style.fontSize = onTargetValue + "px";
});
