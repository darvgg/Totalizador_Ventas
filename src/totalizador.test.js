import { precio_neto, calcular_impuesto_estado, calcular_descuento, calcular_costo_envio, mostrar } from "./totalizador.js";

test("Calcula el precio neto correctamente", () => {
  expect(precio_neto(10, 5)).toBe(50.00);
});

test("Calcula el impuesto por estado correctamente", () => {
  expect(calcular_impuesto_estado(100, "TX")).toBe(6.25);
  expect(calcular_impuesto_estado(200, "CA")).toBe(16.50);
});

test("Calcula el descuento correctamente", () => {
  expect(calcular_descuento(2000)).toBe(60.00);  // 3% de descuento
  expect(calcular_descuento(5000)).toBe(250.00); // 5% de descuento
});

test("Calcula el impuesto por categoría correctamente", () => {
  const resultado1 = mostrar(10, 5, "TX", "Alimentos", 0, "Normal");
  console.log("Salida para Alimentos:", resultado1);

  expect(resultado1).toContain("Impuesto por categoría (2.00%): +$1.00");

  const resultado2 = mostrar(10, 5, "TX", "Bebidas Alcoholicas", 0, "Normal");
  console.log("Salida para Bebidas Alcoholicas:", resultado2);

  expect(resultado2).toContain("Impuesto por categoría (10.00%): +$5.00");
});


test("Muestra correctamente la información con impuestos y descuentos", () => {
  const resultado = mostrar(20, 3, "TX", "Alimentos", 0, "Normal");
  expect(resultado).toContain("Precio neto (20 * $3.00): $60.00");
  expect(resultado).toContain("Impuesto para TX (6.25%): +$3.75");
  expect(resultado).toContain("Impuesto por categoría (2.00%): +$1.20");
  expect(resultado).toContain("Precio total (con descuentos e impuestos): $64.95");
});

test("Calcula el costo de envío correctamente", () => {
  expect(calcular_costo_envio(34, 0.2)).toBe(0);      // 34 ítems de 200g c/u
  expect(calcular_costo_envio(15, 0.8)).toBe(3.5);   // 15 ítems de 800g c/u
  expect(calcular_costo_envio(13, 2.2)).toBe(5);     // 13 ítems de 2.2Kg c/u
  expect(calcular_costo_envio(3, 15)).toBe(6);       // 3 ítems de 15Kg c/u
  expect(calcular_costo_envio(4, 22)).toBe(6.5);     // 4 ítems de 22Kg c/u
  expect(calcular_costo_envio(2, 64)).toBe(8);       // 2 ítems de 64Kg c/u
  expect(calcular_costo_envio(3, 87)).toBe(9);       // 3 ítems de 87Kg c/u
});

test("Calcula el precio total con el descuento por tipo de cliente", () => {
  expect(mostrar(100, 5, "TX", "Alimentos", 0, "Normal")).toContain("Descuento del Tipo de Cliente Normal: -$0.00");
  expect(mostrar(100, 5, "TX", "Alimentos", 0, "Recurrente")).toContain("Descuento del Tipo de Cliente Recurrente: -$2.50");
  expect(mostrar(100, 5, "TX", "Alimentos", 0, "Antiguo Recurrente")).toContain("Descuento del Tipo de Cliente Antiguo Recurrente: -$5.00");
  expect(mostrar(100, 5, "TX", "Alimentos", 0, "Especial")).toContain("Descuento del Tipo de Cliente Especial: -$7.50");
});


