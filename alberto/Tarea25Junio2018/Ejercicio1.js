function ensure(value) {
  if(value === undefined) {
    throw new Error('La función no tiene argumentos o no está definida');
  }
  return value;
}
