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
  expect(mostrar(10, 5, "TX", "Alimentos", 0)).toContain("Impuesto por categoría (2.00%): +$1.00");
  expect(mostrar(10, 5, "TX", "Bebidas Alcoholicas", 0)).toContain("Impuesto por categoría (10.00%): +$5.00");
  expect(mostrar(10, 5, "TX", "Electronicos", 0)).toContain("Impuesto por categoría (12.00%): +$6.00");
});

test("Muestra correctamente la información con impuestos y descuentos", () => {
  const resultado = mostrar(20, 3, "TX", "Alimentos", 0);
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
