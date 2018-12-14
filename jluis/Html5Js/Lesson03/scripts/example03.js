/*Archivo de funciones de javascript */

//'use strict';
//Question 03

var persona;
persona = new person();
persona.name = 'Arges'
persona.surname = 'MushiEl'
persona.edad = 34;
object.freeze(persona);
delete persona.surname;
for(propiedad of persona) {
  console.log(propiedad.value);
}
let person = function() {
  this.education = 'IT'
}
