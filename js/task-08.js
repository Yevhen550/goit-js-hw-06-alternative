const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("All fields must be filled!");
  } else {
    const newObj = {
      email: email,
      password: password,
    };
    console.log(newObj);
    formEl.reset();
  }
}
