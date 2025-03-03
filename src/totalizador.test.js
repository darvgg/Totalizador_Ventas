import { precio_neto, calcular_impuesto_estado, calcular_descuento, calcular_costo_envio,mostrar } from "./totalizador.js";

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
  expect(mostrar(10, 5, "TX", "Alimentos", 0)).toContain("Impuesto por categoría (%2): 1");
  expect(mostrar(10, 5, "TX", "Bebidas Alcoholicas", 0)).toContain("Impuesto por categoría (%10): 5");
  expect(mostrar(10, 5, "TX", "Electronicos", 0)).toContain("Impuesto por categoría (%12): 6");
});

test("Muestra correctamente la información con impuestos y descuentos", () => {
  const resultado = mostrar(20, 3, "TX", "Alimentos");
  expect(resultado).toContain("Precio neto (20 * 3$): 60$");
  expect(resultado).toContain("Impuesto para TX (%6.25): 3.75");
  expect(resultado).toContain("Impuesto por categoría (%2): 1.2");
  expect(resultado).toContain("Precio total (descuento e impuestos): 64.95$");
});

test("Calcula el costo de envio correctamente", () => {
 expect(calcular_costo_envio(34,0.2)).toBe(0); //34 items pesando c/u 200gr
 expect(calcular_costo_envio(15,0.8)).toBe(3.5); //15 items pesando c/u 800gr
 expect(calcular_costo_envio(13,2.2)).toBe(5); //13 items pesando c/u 2.2Kg
 expect(calcular_costo_envio(3,15)).toBe(6); //3 items pesando c/u 15Kg
 expect(calcular_costo_envio(4,22)).toBe(6.50); //4 items pesando c/u 22Kg
 expect(calcular_costo_envio(2,64)).toBe(8); //2 items pesando c/u 64Kg
 expect(calcular_costo_envio(2,103)).toBe(9); //2 items pesando c/u 103Kg
});
