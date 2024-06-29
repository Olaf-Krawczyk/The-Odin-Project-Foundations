const container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
  const div = document.createElement("div");
  div.classList.add(`${i}`);
  div.setAttribute("style", "width: 20px; height: 20px; border: 2px solid black");

  container.appendChild(div);
}

const allDiv = document.querySelectorAll("div");

for (let divs of allDiv) {
  divs.addEventListener("mouseover", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    divs.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}
