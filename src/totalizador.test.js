import { precio_neto, calcular_impuesto_estado, calcular_descuento, calcular_precio_total_con_impuesto } from "./totalizador.js";

describe("Mostrara el precio neto del producto", () => {
  it("Muestra la cantidad del producto ingresado", () => {
    expect(precio_neto(7,5)).toEqual(35);
  });
});

describe("Mostrara el impuesto segun el estado", () => {
  it("Muestra el impuesto segun el estado de CA", () => {
    expect(calcular_impuesto_estado(10,"CA")).toEqual(0.83);
  });
  it("Muestra el impuesto segun el estado de AL", () => {
    expect(calcular_impuesto_estado(10,"AL")).toEqual(0.4);
  });
  it("Muestra el impuesto segun el estado de NV", () => {
    expect(calcular_impuesto_estado(10,"NV")).toEqual(0.8);
  });
  it("Muestra el impuesto segun el estado de UT", () => {
    expect(calcular_impuesto_estado(10,"UT")).toEqual(0.67);
  });
  it("Muestra el impuesto segun el estado de TX", () => {
    expect(calcular_impuesto_estado(10,"TX")).toEqual(0.63);
  });
});

describe("Mostrar el descuento segun el precio neto", () => {
  it("Muestra el descuento correspondiente a 1000$", () => {
    expect(calcular_descuento(1000)).toEqual(30);
  });
  it("Muestra el descuento correspondiente a 3000$", () => {
    expect(calcular_descuento(3000)).toEqual(150);
  });
  it("Muestra el descuento correspondiente a 7000$", () => {
    expect(calcular_descuento(7000)).toEqual(490);
  });
  it("Muestra el descuento correspondiente a 10000$", () => {
    expect(calcular_descuento(10000)).toEqual(1000);
  });
  it("Muestra el descuento correspondiente a 30000$", () => {
    expect(calcular_descuento(30000)).toEqual(4500);
  });
});

describe("Mostrar el precio total con el impuesto por categoría", () => {
  it("Muestra el precio total con el impuesto de Alimentos", () => {
    expect(calcular_precio_total_con_impuesto(100, "Alimentos")).toEqual(105);
  });
  it("Muestra el precio total con el impuesto de Bebidas Alcoholicas", () => {
    expect(calcular_precio_total_con_impuesto(100, "Bebidas Alcoholicas")).toEqual(118);
  });

  it("Muestra el precio total con el impuesto de Material de Escritorio", () => {
    expect(calcular_precio_total_con_impuesto(100, "Material Escritorio")).toEqual(107);
  });
});
