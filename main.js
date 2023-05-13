const dayEle = document.getElementById("day");
const monthEle = document.getElementById("month");
const yearEle = document.getElementById("year");
const form = document.querySelector("form");

const dateCurrent = new Date();

//show input error message
const showError = (input, message) => {
  // get element contain input and style for error
  const formControl = input.parentElement;

  const labels = document.getElementsByClassName("label-input");
  labels.className = "label-input error";

  input.className = "input input-error";

  const error = formControl.querySelector("small");
  error.innerHTML = message;
  error.classList.remove("hidden");
};

//handle Input

const handleInput = () => {
  const dayValue = dayEle.value.trim();
  const monthValue = monthEle.value.trim();
  const yearValue = yearEle.value.trim();

  const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //check date
  if (dayValue === "") {
    showError(dayEle, "This field is required");
  } else if (dayValue > listOfDays) {
    showError(dayEle, "Must be a valid date");
  } else if (monthValue === "1" || monthValue > "2") {
    if (dayValue > listOfDays[monthValue - 1]) {
      showError(dayEle, "Must be a valid date");
    }
  } else if (monthValue === "2") {
    let leapYear = false;
    if ((!(yearValue % 4) && yearValue % 100) || !(yearValue % 400)) {
      leapYear = true;
    }

    if (leapYear && dayValue > 29) {
      showError(dayEle, "Must be a valid date");
    } else if (!leapYear && dayValue >= 29) {
      showError(dayEle, "Must be a valid date");
    }
  }

  //check month
  if (monthValue === "") {
    showError(monthEle, "This field is required");
  } else if (monthValue >= 13) {
    showError(monthEle, "Must be a valid month");
  }

  //check year
  if (yearValue === "") {
    showError(yearEle, "This field is required");
  } else if (yearValue > dateCurrent.getFullYear()) {
    showError(yearEle, "Must be in the past");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleInput();
});
