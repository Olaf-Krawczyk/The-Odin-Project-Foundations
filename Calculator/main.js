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
const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plusMinus");

const tabela = [];
let maxNumber = 0;
let changed = false;

const addToCalc = (nmb) => {
  if (maxNumber == 8) {
  } else {
    if (parseFloat(number.textContent) == 0) {
      number.textContent = `${nmb}`;
      maxNumber++;
    } else {
      number.textContent += `${nmb}`;
      maxNumber++;
    }
  }
};

const add = (num) => {
  tabela.push(num);
  console.log(tabela);
};

zero.addEventListener("click", () => {
  addToCalc(0);
});

one.addEventListener("click", () => {
  addToCalc(1);
});

two.addEventListener("click", () => {
  addToCalc(2);
});

three.addEventListener("click", () => {
  addToCalc(3);
});

four.addEventListener("click", () => {
  addToCalc(4);
});

five.addEventListener("click", () => {
  addToCalc(5);
});

six.addEventListener("click", () => {
  addToCalc(6);
});

seven.addEventListener("click", () => {
  addToCalc(7);
});

eight.addEventListener("click", () => {
  addToCalc(8);
});

nine.addEventListener("click", () => {
  addToCalc(9);
});

clear.addEventListener("click", () => {
  number.textContent = "0";
  maxNumber = 0;
});

plusMinus.addEventListener("click", () => {
  console.log(number.textContent);
  if (changed) {
    number.textContent = parseFloat(number.textContent) * -1;
  } else {
    number.textContent = `-${number.textContent}`;
    changed = true;
  }
});

plus.addEventListener("click", () => {
  add(parseFloat(number.textContent));
});
