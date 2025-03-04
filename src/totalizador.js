function precio_neto(a, b) {
  let precio = a * b;
  return parseFloat(precio.toFixed(2));
}

function obtener_porcentaje_impuesto_estado(cod_estado) {
  const impuestos = {
    CA: 0.0825,
    AL: 0.04,
    NV: 0.08,
    UT: 0.0665,
    TX: 0.0625
  };
  return impuestos[cod_estado] || 0;
}

function calcular_impuesto_estado(precio_n, cod_estado) {
  return parseFloat((precio_n * obtener_porcentaje_impuesto_estado(cod_estado)).toFixed(2));
}

function obtener_porcentaje_descuento(precio_neto) {
  if (precio_neto >= 30000) return 0.15;
  if (precio_neto >= 10000) return 0.10;
  if (precio_neto >= 7000) return 0.07;
  if (precio_neto >= 3000) return 0.05;
  if (precio_neto >= 1000) return 0.03;
  return 0;
}

function calcular_descuento(precio_neto) {
  return parseFloat((precio_neto * obtener_porcentaje_descuento(precio_neto)).toFixed(2));
}

function obtener_porcentaje_impuesto_categoria(categoria) {
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

function obtener_porcentaje_descuento_cliente(tipo_cliente) {
  const descuentos = {
    "Normal": 0.00,
    "Recurrente": 0.005,
    "Antiguo Recurrente": 0.01,
    "Especial": 0.015
  };
  return descuentos[tipo_cliente] || 0;
}


function calcular_precio_total_con_impuesto(precio, categoria) {
  return parseFloat((precio + precio * obtener_porcentaje_impuesto_categoria(categoria)).toFixed(2));
}

function calcular_peso_volumetrico(cant_item, peso_item) {
  return parseFloat((cant_item * peso_item).toFixed(2));
}

function calcular_costo_envio(cant_item, peso_item) {
  let peso_volumetrico = calcular_peso_volumetrico(cant_item, peso_item);
  if (peso_volumetrico <= 10) return 0;
  if (peso_volumetrico <= 20) return 3.5;
  if (peso_volumetrico <= 40) return 5;
  if (peso_volumetrico < 80) return 6;
  if (peso_volumetrico <= 100) return 6.5;
  if (peso_volumetrico <= 200) return 8;
  return 9;
}

function mostrar(cantidad, precio, cod_estado, categoria, peso_item, tipo_cliente) {
  let precio_n = precio_neto(cantidad, precio);
  let impuesto_estado = calcular_impuesto_estado(precio_n, cod_estado);
  let impuesto_categoria = precio_n * obtener_porcentaje_impuesto_categoria(categoria);
  let descuento_cliente = precio_n * obtener_porcentaje_descuento_cliente(tipo_cliente);
  let precio_total = precio_n + impuesto_estado + impuesto_categoria - descuento_cliente;
  
  return `
    Precio neto (${cantidad} * $${precio.toFixed(2)}): $${precio_n.toFixed(2)}<br>
    Impuesto para ${cod_estado} (${(obtener_porcentaje_impuesto_estado(cod_estado) * 100).toFixed(2)}%): +$${impuesto_estado.toFixed(2)}<br>
    Impuesto por categoría (${(obtener_porcentaje_impuesto_categoria(categoria) * 100).toFixed(2)}%): +$${impuesto_categoria.toFixed(2)}<br>
    Descuento del Tipo de Cliente ${tipo_cliente}: -$${descuento_cliente.toFixed(2)}<br>
    Precio total (con descuentos e impuestos): $${precio_total.toFixed(2)}<br>
  `;
}

export {
  precio_neto,
  calcular_impuesto_estado,
  calcular_descuento,
  mostrar,
  calcular_precio_total_con_impuesto,
  calcular_costo_envio
};
