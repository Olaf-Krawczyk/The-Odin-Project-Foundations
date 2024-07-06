const number = document.querySelector(".number");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const zero = document.querySelector(".zero");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiple = document.querySelector(".multiple");
const divinie = document.querySelector(".divinie");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let isZero = false;

let oldNum;
let operator;

clear.addEventListener("click", () => {
  oldNum = "";
  number.textContent = 0;
  isZero = false;
});

plus.addEventListener("click", () => {
  oldNum = number.textContent;
  operator = "+";
  number.textContent = "0";
  isZero = false;
});

minus.addEventListener("click", () => {
  oldNum = number.textContent;
  operator = "-";
  number.textContent = "0";
  isZero = false;
});

multiple.addEventListener("click", () => {
  oldNum = number.textContent;
  operator = "*";
  number.textContent = "0";
  isZero = false;
});

divinie.addEventListener("click", () => {
  oldNum = number.textContent;
  operator = "/";
  number.textContent = "0";
  isZero = false;
});

equal.addEventListener("click", () => {
  if (operator === "+") {
    oldNum = parseInt(oldNum);
    num = parseInt(number.textContent);
    number.textContent = oldNum + num;
  } else if (operator === "-") {
    oldNum = parseInt(oldNum);
    num = parseInt(number.textContent);
    number.textContent = oldNum - num;
  } else if (operator === "*") {
    oldNum = parseInt(oldNum);
    num = parseInt(number.textContent);
    number.textContent = oldNum * num;
  } else if (operator === "/") {
    oldNum = parseInt(oldNum);
    num = parseInt(number.textContent);
    number.textContent = oldNum / num;
  }
});

zero.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 0;
    isZero = true;
  } else {
    number.textContent += 0;
  }
});

one.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 1;
    isZero = true;
  } else {
    number.textContent += 1;
  }
});

two.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 2;
    isZero = true;
  } else {
    number.textContent += 2;
  }
});

three.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 3;
    isZero = true;
  } else {
    number.textContent += 3;
  }
});

four.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 4;
    isZero = true;
  } else {
    number.textContent += 4;
  }
});

five.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 5;
    isZero = true;
  } else {
    number.textContent += 5;
  }
});

six.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 6;
    isZero = true;
  } else {
    number.textContent += 6;
  }
});

seven.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 7;
    isZero = true;
  } else {
    number.textContent += 7;
  }
});

eight.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 8;
    isZero = true;
  } else {
    number.textContent += 8;
  }
});

nine.addEventListener("click", () => {
  if (isZero == false) {
    number.textContent = 9;
    isZero = true;
  } else {
    number.textContent += 9;
  }
});
