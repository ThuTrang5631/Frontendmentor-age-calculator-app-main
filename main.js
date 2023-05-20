const dayEle = document.getElementById("day");
const monthEle = document.getElementById("month");
const yearEle = document.getElementById("year");
const form = document.querySelector("form");

const dayResultEle = document.getElementById("days-result");
const monthResultEle = document.getElementById("months-result");
const yearResultEle = document.getElementById("years-result");

const dateCurrent = new Date();
const dayCurrent = dateCurrent.getDate();
const monthCurrent = 1 + dateCurrent.getMonth();
const yearCurrent = dateCurrent.getFullYear();

//show input error message
const showError = (input, message) => {
  // get element contain input and style for error
  const formControl = input.parentElement;

  input.className = "input input-error";

  const error = formControl.querySelector("small");
  error.innerHTML = message;
  error.classList.remove("hidden");
};

const hideError = (input) => {
  const formControl = input.parentElement;

  input.className = "input";

  const error = formControl.querySelector("small");
  error.classList.add("hidden");
};

//handle Input

const handleInput = (dayValue, monthValue, yearValue) => {
  let isValidate = true;
  const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //check date
  if (dayValue === "") {
    showError(dayEle, "This field is required");
    isValidate = false;
  } else if (dayValue > listOfDays || dayValue < 1) {
    showError(dayEle, "Must be a valid day");
    isValidate = false;
  } else if (
    monthCurrent == monthValue &&
    yearCurrent == yearValue &&
    dayCurrent < dayValue
  ) {
    showError(dayEle, "Must be a date in the past");
    isValidate = false;
  } else if (monthValue === "1" || monthValue > "2") {
    if (dayValue > listOfDays[monthValue - 1]) {
      showError(dayEle, "Must be a valid date");
      isValidate = false;
    }
  } else if (monthValue === "2") {
    let leapYear = false;
    if ((!(yearValue % 4) && yearValue % 100) || !(yearValue % 400)) {
      leapYear = true;
    }

    if (leapYear && dayValue > 29) {
      showError(dayEle, "Must be a valid date");
      isValidate = false;
    } else if (!leapYear && dayValue >= 29) {
      showError(dayEle, "Must be a valid date");
      isValidate = false;
    }
  } else {
    hideError(dayEle);
  }

  //check month
  if (monthValue === "") {
    showError(monthEle, "This field is required");
    isValidate = false;
  } else if (monthValue >= 13 || monthValue <= 0) {
    showError(monthEle, "Must be a valid month");
    isValidate = false;
  } else if (monthValue > monthCurrent && yearValue == yearCurrent) {
    showError(monthEle, "Must be a month in the past");
    isValidate = false;
  } else {
    hideError(monthEle);
  }

  //check year
  if (yearValue === "") {
    showError(yearEle, "This field is required");
    isValidate = false;
  } else if (yearValue > dateCurrent.getFullYear()) {
    showError(yearEle, "Must be in the past");
    isValidate = false;
  } else if (yearValue <= 0) {
    showError(yearEle, "Must be a valid year");
  } else {
    hideError(yearEle);
  }

  if (!isValidate) {
    const labels = document.getElementsByClassName("label-input");
    Array.from(labels).forEach((label) => {
      label.style.color = "hsl(0, 100%, 67%)";
    });
  } else {
    const labels = document.getElementsByClassName("label-input");
    Array.from(labels).forEach((label) => {
      label.style.color = "hsl(0, 1%, 44%)";
    });
  }

  return isValidate;
};

//handle calculate age

const handleCalculateAge = (dayValue, monthValue, yearValue) => {
  // get date's today
  console.log("date", dateCurrent);
  let yearAge;
  let monthAge;
  let dayAge;

  if (handleInput(dayValue, monthValue, yearValue)) {
    // caculate year age

    if (
      monthCurrent > monthValue ||
      (monthCurrent == monthValue && dayCurrent >= dayValue)
    ) {
      yearAge = yearCurrent - yearValue;
    } else {
      yearAge = yearCurrent - yearValue - 1;
    }

    //caculate month age

    if (dayCurrent >= dayValue) {
      monthAge = monthCurrent - monthValue;
    } else if (dayCurrent < dayValue) {
      monthAge = monthCurrent - monthValue - 1;
    }
    monthAge = monthAge < 0 ? monthAge + 12 : monthAge;

    //caculate day age
    const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (dayCurrent >= dayValue) {
      dayAge = dayCurrent - dayValue;
    } else {
      dayAge = dayCurrent - dayValue + listOfDays[monthValue - 1];
    }

    //show results
    dayResultEle.innerHTML = dayAge;
    monthResultEle.innerHTML = monthAge;
    yearResultEle.innerHTML = yearAge;

    console.log(dayAge, monthAge, yearAge);
  } else {
    yearResultEle.innerHTML = "";
    monthResultEle.innerHTML = "";
    dayResultEle.innerHTML = "";
    yearResultEle.insertAdjacentHTML(
      "afterbegin",
      `<span class="result-line"></span>
      <span class="result-line"></span>`
    );
    monthResultEle.insertAdjacentHTML(
      "afterbegin",
      `<span class="result-line"></span>
      <span class="result-line"></span>`
    );
    dayResultEle.insertAdjacentHTML(
      "afterbegin",
      `<span class="result-line"></span>
      <span class="result-line"></span>`
    );
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //get value from input
  const dayValue = dayEle.value.trim();
  const monthValue = monthEle.value.trim();
  const yearValue = yearEle.value.trim();
  handleCalculateAge(dayValue, monthValue, yearValue);
});
