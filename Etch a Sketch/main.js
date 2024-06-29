const container = document.querySelector(".container");
const change = document.querySelector(".change");
let userOption = 16;

change.addEventListener("click", () => {
  let userOption = prompt("Choose number between 1 to 100");
  userOption = parseInt(userOption);
  if (userOption < 1 || userOption > 100 || isNaN(userOption)) {
    console.log("WRONG");
  } else {
    const allDiv = document.querySelectorAll(".container div");
    for (let div of allDiv) {
      div.remove();
    }
    for (let i = 1; i <= userOption * userOption; i++) {
      const div = document.createElement("div");
      div.classList.add(`${i}`);
      div.setAttribute("style", `width: ${320 / userOption}px; height: ${320 / userOption}px; border: 2px solid black`);
      container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${userOption}, ${320 / userOption}px)`;

    const newDivs = document.querySelectorAll(".container div");
    for (let divs of newDivs) {
      divs.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        divs.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      });
    }
  }
});

for (let i = 1; i <= userOption * userOption; i++) {
  const div = document.createElement("div");
  div.classList.add(`${i}`);
  div.setAttribute("style", `width: 20px; height: 20px; border: 2px solid black`);
  container.appendChild(div);
}

const initialDivs = document.querySelectorAll(".container div");

for (let divs of initialDivs) {
  divs.addEventListener("mouseover", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    divs.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}
