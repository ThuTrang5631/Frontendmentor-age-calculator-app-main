const dateEle = document.getElementById("day");
const monthEle = document.getElementById("month");
const yearEle = document.getElementById("year");
const form = document.querySelector("form");

//show input error message
const showError = (input, message) => {
  // get element contain input and style for error
  const formControl = input.parentElement;

  const labelDay = formControl.querySelector("label");
  labelDay.style.color = "hsl(0, 100%, 67%)";

  input.className = "input input-error";

  const error = formControl.querySelector("small");
  error.innerHTML = message;
  error.classList.remove("hidden");
};

//handle Input

const handleInput = () => {
  const dateValue = dateEle.value.trim();
  const monthValue = monthEle.value.trim();
  const yearValue = yearEle.value.trim();

  //check date
  if (dateValue === "") {
    showError(dateEle, "This field is required");
  }

  //check month
  if (monthValue === "") {
    showError(monthEle, "This field is required");
  }

  //check year
  if (yearValue === "") {
    showError(yearEle, "This field is required");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleInput();
});
