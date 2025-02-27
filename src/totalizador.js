function precio_neto(a, b) {
  let precio = a * b;
  precio = precio.toFixed(2);
  return precio;
}

function mostrar(cantidad,precio){
  let precio_n = precio_neto(cantidad,precio);
  let mostrar_p = "La cantidad es: " + cantidad  + "<br>" + "El precio por unidad es: " + precio + "<br>" + "El precio neto sera de (" + cantidad + "*"+ precio + "$): " + precio_n+"$";
  return mostrar_p; 
}

export {precio_neto, mostrar};
