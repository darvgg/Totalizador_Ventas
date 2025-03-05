function precioNeto(cantidad, precio) {
  let total = cantidad * precio;
  return parseFloat(total.toFixed(2));
}

function obtenerPorcentajeImpuestoEstado(estado) {
  const impuestos = {
    CA: 0.0825,
    AL: 0.04,
    NV: 0.08,
    UT: 0.0665,
    TX: 0.0625
  };
  return impuestos[estado] || 0;
}

function calcularImpuestoEstado(precioN, estado) {
  return parseFloat((precioN * obtenerPorcentajeImpuestoEstado(estado)).toFixed(2));
}

function obtenerPorcentajeDescuento(precioNeto) {
  if (precioNeto >= 30000) return 0.15;
  if (precioNeto >= 10000) return 0.10;
  if (precioNeto >= 7000) return 0.07;
  if (precioNeto >= 3000) return 0.05;
  if (precioNeto >= 1000) return 0.03;
  return 0;
}

function calcularDescuento(precioNeto) {
  return parseFloat((precioNeto * obtenerPorcentajeDescuento(precioNeto)).toFixed(2));
}

function obtenerPorcentajeImpuestoCategoria(categoria) {
  const impuestos = {
    "Alimentos": 0.02,
    "Bebidas Alcoholicas": 0.1,
    "Material Escritorio": 0.05,
    "Muebles": 0.08,
    "Electronicos": 0.12,
    "Vestimenta": 0.04,
    "Varios": 0.06
  };
  return impuestos[categoria] || 0;
}

function obtenerPorcentajeDescuentoCliente(tipoCliente) {
  const descuentos = {
    "Normal": 0.00,
    "Recurrente": 0.005,
    "Antiguo Recurrente": 0.01,
    "Especial": 0.015
  };
  return descuentos[tipoCliente] || 0;
}

function calcularPrecioTotalConImpuesto(precio, categoria) {
  return parseFloat((precio + precio * obtenerPorcentajeImpuestoCategoria(categoria)).toFixed(2));
}

function calcularPesoVolumetrico(cantidad, pesoItem) {
  return parseFloat((cantidad * pesoItem).toFixed(2));
}

function calcularCostoEnvio(cantidad, pesoItem) {
  let pesoVolumetrico = calcularPesoVolumetrico(cantidad, pesoItem);
  if (pesoVolumetrico <= 10) return 0;
  if (pesoVolumetrico <= 20) return 3.5;
  if (pesoVolumetrico <= 40) return 5;
  if (pesoVolumetrico < 80) return 6;
  if (pesoVolumetrico <= 100) return 6.5;
  if (pesoVolumetrico <= 200) return 8;
  return 9;
}

function mostrar(cantidad, precio, estado, categoria, pesoItem, tipoCliente) {
  let precioN = precioNeto(cantidad, precio);
  let impuestoEstado = calcularImpuestoEstado(precioN, estado);
  let impuestoCategoria = precioN * obtenerPorcentajeImpuestoCategoria(categoria);
  let descuentoCliente = precioN * obtenerPorcentajeDescuentoCliente(tipoCliente);
  let precioTotal = precioN + impuestoEstado + impuestoCategoria - descuentoCliente;
  
  return `
    Precio neto (${cantidad} * $${precio.toFixed(2)}): $${precioN.toFixed(2)}<br>
    Impuesto para ${estado} (${(obtenerPorcentajeImpuestoEstado(estado) * 100).toFixed(2)}%): +$${impuestoEstado.toFixed(2)}<br>
    Impuesto por categoría (${(obtenerPorcentajeImpuestoCategoria(categoria) * 100).toFixed(2)}%): +$${impuestoCategoria.toFixed(2)}<br>
    Descuento del Tipo de Cliente ${tipoCliente}: -$${descuentoCliente.toFixed(2)}<br>
    Precio total (con descuentos e impuestos): $${precioTotal.toFixed(2)}<br>
  `;
}

export {
  precioNeto,
  calcularImpuestoEstado,
  calcularDescuento,
  mostrar,
  calcularPrecioTotalConImpuesto,
  calcularCostoEnvio
};

