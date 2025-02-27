import sumar from "./sumador";

const cant_item = document.querySelector("#primer-numero");
const precio_item = document.querySelector("#segundo-numero");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItem = Number.parseInt(cant_item.value);
  const precioItem = Number.parseInt(precio_item.value);

  div.innerHTML = "<p>" + sumar(cantItem, precioItem) + "</p>";
});
