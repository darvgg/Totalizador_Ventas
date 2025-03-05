import { mostrar } from "./totalizador.js";

const tipo_cliente_select = document.querySelector("#cliente-Select");
const cant_item = document.querySelector("#primer-numero");
const precio_item = document.querySelector("#segundo-numero");
const peso_item = document.querySelector("#tercer-numero");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const estado_select = document.querySelector("#estados-Select");
const categoria_select = document.querySelector("#categoria-Select");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tipo_cliente = tipo_cliente_select.value;
  const cantItem = Number.parseFloat(cant_item.value);
  const precioItem = Number.parseFloat(precio_item.value);
  const pesoItem = Number.parseFloat(peso_item.value);
  const cod_estado = estado_select.value;
  const categoria = categoria_select.value;

  // Validación de entrada
  if (isNaN(cantItem) || isNaN(precioItem) || isNaN(pesoItem)) {
    div.innerHTML = "<p style='color: red;'>Por favor, complete todos los campos numéricos.</p>";
    return;
  }

  // Verificar si mostrar() está definida correctamente
  try {
    const resultado = mostrar(cantItem, precioItem, cod_estado, categoria, pesoItem, tipo_cliente);
    div.innerHTML = `<p>${resultado}</p>`;
  } catch (error) {
    console.error("Error al ejecutar la función mostrar():", error);
    div.innerHTML = "<p style='color: red;'>Hubo un error al calcular el total.</p>";
  }
});

// Prueba manual para verificar si el div funciona correctamente
document.querySelector("#resultado-div").innerHTML = "<p>Prueba de inserción de texto.</p>";

