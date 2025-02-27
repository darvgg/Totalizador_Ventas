import { precio_neto } from "./totalizador.js";

describe("Mostrara el precio neto del producto", () => {
  it("Muestra la cantidad del producto ingresado", () => {
    expect(precio_neto(7,5)).toEqual(35);
  });
});


