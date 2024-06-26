const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const newItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listDelete = document.createElement("button");

  listItem.appendChild(listText);
  listItem.appendChild(listDelete);

  listText.textContent = newItem;
  listDelete.textContent = "Delete";
  list.appendChild(listItem);

  listDelete.addEventListener("click", () => {
    list.removeChild(listItem);
  });
  input.focus();
});
