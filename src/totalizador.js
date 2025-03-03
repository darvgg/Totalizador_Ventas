function precio_neto(a, b) {
  let precio = a * b;
  return parseFloat(precio.toFixed(2));
}

function obtener_porcentaje_impuesto_estado(cod_estado) {
  let porcentaje_impuesto_estado = 0; // Valor por defecto
  switch (cod_estado) {
    case "CA":
      porcentaje_impuesto_estado = 0.0825;
      break;
    case "AL":
      porcentaje_impuesto_estado = 0.04;
      break;
    case "NV":
      porcentaje_impuesto_estado = 0.08;
      break;
    case "UT":
      porcentaje_impuesto_estado = 0.0665;
      break;
    case "TX":
      porcentaje_impuesto_estado = 0.0625;
      break;
  }
  return porcentaje_impuesto_estado;
}

function calcular_impuesto_estado(precio_n, cod_estado) {
  let impuesto_estado = obtener_porcentaje_impuesto_estado(cod_estado);
  let impuesto = precio_n * impuesto_estado;
  return parseFloat(impuesto.toFixed(2));
}

function obtener_porcentaje_descuento(precio_neto) {
  let porcentaje_descuento = 0; // Valor por defecto
  if (precio_neto >= 1000 && precio_neto < 3000) {
    porcentaje_descuento = 0.03;
  } else if (precio_neto >= 3000 && precio_neto < 7000) {
    porcentaje_descuento = 0.05;
  } else if (precio_neto >= 7000 && precio_neto < 10000) {
    porcentaje_descuento = 0.07;
  } else if (precio_neto >= 10000 && precio_neto < 30000) {
    porcentaje_descuento = 0.1;
  } else if (precio_neto >= 30000) {
    porcentaje_descuento = 0.15;
  }
  return porcentaje_descuento;
}

function calcular_descuento(precio_neto) {
  let porcentaje_descuento = obtener_porcentaje_descuento(precio_neto);
  let descuento = precio_neto * porcentaje_descuento;
  return parseFloat(descuento.toFixed(2));
}

function obtener_porcentaje_impuesto_categoria(categoria) {
  let impuesto_categoria = 0; // Valor por defecto
  switch (categoria) {
    case "Alimentos":
      impuesto_categoria = 0.02;
      break;
    case "Bebidas Alcoholicas":
      impuesto_categoria = 0.1;
      break;
    case "Material Escritorio":
      impuesto_categoria = 0.05;
      break;
    case "Muebles":
      impuesto_categoria = 0.08;
      break;
    case "Electronicos":
      impuesto_categoria = 0.12;
      break;
    case "Vestimenta":
      impuesto_categoria = 0.04;
      break;
    case "Varios":
      impuesto_categoria = 0.06;
      break;
  }
  return impuesto_categoria;
}

function calcular_precio_total_con_impuesto(precio, categoria) {
  let impuesto_categoria = obtener_porcentaje_impuesto_categoria(categoria);
  let precio_total = precio + precio * impuesto_categoria;
  return parseFloat(precio_total.toFixed(2));
}

function calcular_peso_volumetrico(cant_item,peso_item){
  let peso_volumetrico = cant_item * peso_item;
  return parseFloat(peso_volumetrico.toFixed(2));
}

function calcular_costo_envio(cant_item,peso_item){
  let peso_volumetrico = calcular_peso_volumetrico(cant_item,peso_item);
  let costo_envio = 0; // valor por defecto
  if (0 < peso_volumetrico && peso_volumetrico <= 10){
    costo_envio = 0;
  } else if (11 <= peso_volumetrico && peso_volumetrico <= 20){
    costo_envio = 3.5;
  }
  return costo_envio;
}

function mostrar(cantidad, precio, cod_estado, categoria,peso_item) {
  let precio_n = precio_neto(cantidad, precio);
  let porcentaje_impuesto_estado = obtener_porcentaje_impuesto_estado(cod_estado);
  let impuesto_estado = calcular_impuesto_estado(precio_n, cod_estado);
  let porcentaje_descuento = obtener_porcentaje_descuento(precio_n);
  let descuento = calcular_descuento(precio_n);
  let costo_envio = calcular_costo_envio(cantidad, peso_item);

  let porcentaje_impuesto_categoria = obtener_porcentaje_impuesto_categoria(categoria);
  let impuesto_categoria = parseFloat((precio_n * porcentaje_impuesto_categoria).toFixed(2));

  let precio_total = parseFloat((precio_n + costo_envio + impuesto_estado + impuesto_categoria - descuento).toFixed(2));

  let mostrar_p = `
    La cantidad es: ${cantidad}<br>
    El precio por unidad es: ${precio}$<br>
    Código de estado es: ${cod_estado}<br>
    Categoría es: ${categoria}<br>
    Precio neto (${cantidad} * ${precio}$): ${precio_n}$<br>
    Costo de envio: ${costo_envio}$<br>
    Descuento (%${(porcentaje_descuento * 100)}): ${descuento}$<br>
    Impuesto para ${cod_estado} (%${(porcentaje_impuesto_estado * 100)}): ${impuesto_estado}$<br>
    Impuesto por categoría (%${(porcentaje_impuesto_categoria * 100)}): ${impuesto_categoria}$<br>
    Precio total (descuento e impuestos): ${precio_total}$
  `;

  return mostrar_p;
}

export {
  precio_neto,
  calcular_impuesto_estado,
  calcular_descuento,
  mostrar,
  calcular_precio_total_con_impuesto,
  calcular_costo_envio
};
