import { precio_neto, calcular_impuesto_estado } from "./totalizador.js";

describe("Mostrara el precio neto del producto", () => {
  it("Muestra la cantidad del producto ingresado", () => {
    expect(precio_neto(7,5)).toEqual(35);
  });
});

describe("Mostrara el impuesto segun el estado", () => {
  it("Muestra la cantidad del producto ingresado", () => {
    expect(calcular_impuesto_estado(10,"CA")).toEqual(0.83);
  });
});
