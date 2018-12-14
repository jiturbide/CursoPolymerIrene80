/*Archivo de funciones de javascript */

'use strict';
let valor = 10;
console.log("Desde example02.js");
print(valor);

console.log("Variable types");
var a = 'Hola Mundo';
var b = 10.0
var c = true;
var object = Object.create(Object.prototype);
var d = null;
var e = undefined;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(object);

var fdeclare = function () {
  'use strict';
  if(true) {
    x = "var declared in a block"; //x sigue siendo visible dentro del la funcion
  }
  console.log(x);
  console.log(a); //Esta variable se sigue viendo
};
console.log("fdeclare();");
fdeclare();
console.log('x:' + x); //x sigue visible despues de la función
//console.log("fdeclareVariable();");
//fdeclareVariable();
//console.log("fdeclare.fdeclareVariable();");
//fdeclare.fdeclareVariable();

let foo = function () {
  return 5;
}
let m = foo;

console.log(m);
