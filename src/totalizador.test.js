import { precio_neto, calcular_impuesto_estado, calcular_descuento, mostrar } from "./totalizador.js";

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
  expect(mostrar(10, 5, "TX", "Alimentos")).toContain("Impuesto por categoría (%2): 1");
  expect(mostrar(10, 5, "TX", "Bebidas Alcoholicas")).toContain("Impuesto por categoría (%10): 5");
  expect(mostrar(10, 5, "TX", "Electronicos")).toContain("Impuesto por categoría (%12): 6");
});

test("Muestra correctamente la información con impuestos y descuentos", () => {
  const resultado = mostrar(20, 3, "TX", "Alimentos");
  expect(resultado).toContain("Precio neto (20 * 3$): 60$");
  expect(resultado).toContain("Impuesto para TX (%6.25): 3.75");
  expect(resultado).toContain("Impuesto por categoría (%2): 1.2");
  expect(resultado).toContain("Precio total (descuento e impuestos): 64.95$");
});
