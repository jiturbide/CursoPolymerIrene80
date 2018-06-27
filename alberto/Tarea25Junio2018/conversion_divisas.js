class Conversion{
  constructor(factorConversion){
    this.factorConversion = factorConversion;
  }

  convierteAPesos(cantidadDivisa){
    return cantidadDivisa / this.factorConversion;
  }

  convierteDesdePesos(cantidadPesos){
    return cantidadPesos * this.factorConversion;
  }
}

const divisaDolar = new Conversion(1/20);
console.log(divisaDolar.convierteAPesos(2));
console.log(divisaDolar.convierteDesdePesos(40));
