# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

**Desktop:**

![image](https://github.com/ThuTrang5631/Frontendmentor-age-calculator-app-main/assets/70875419/bd23b8b1-5e1c-4ed8-a7d1-50b007e78d8d)

**Mobile:** 

![image](https://github.com/ThuTrang5631/Frontendmentor-age-calculator-app-main/assets/70875419/f56448a9-49e2-470b-b0ce-f212a3ffd2ae)


### Links

- Solution URL: https://github.com/ThuTrang5631/Frontendmentor-news-homepage
- Live Site URL: https://thutrang5631.github.io/Frontendmentor-age-calculator-app-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascipt core

### What I learned

1. Add file font for project
```
@font-face {
  font-family: "Poppins Bold";
  src: url("./assets/fonts/Poppins-Bold.ttf") format(truetype);
}

@font-face {
  font-family: "Poppins BoldItalic";
  src: url("./assets/fonts/Poppins-BoldItalic.ttf") format(truetype);
}

@font-face {
  font-family: "Poppins ExtraBold";
  src: url("./assets/fonts/Poppins-ExtraBold.ttf") format(truetype);
}
```
2. Create variable for colors and breakpoint. When you use, you take the corresponding variable. 
```// colors

$purple: hsl(259, 100%, 65%);

$off-black: hsl(0, 0%, 8%);

//breakpoints

$breakpoint-xl: 1439px;

```
3. To add event for element.
Example: Add `submit` event for form.
```
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // handle function when submit
 }
 ```
 4. To returns an array from any object with a length property. Use `Array.from()`

### Continued development

Using too many `if...else` for function to handle validate form.


## Author

- LinkedIn: https://www.linkedin.com/in/thutrang5631/
- Frontend Mentor - https://www.frontendmentor.io/profile/ThuTrang5631
