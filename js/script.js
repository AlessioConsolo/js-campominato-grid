const button = document.getElementById("button");
const grid = document.getElementById("grid");

function createSquare() {
  let currentElement = document.createElement("div");

  currentElement.classList.add("square");

  return currentElement;
}
