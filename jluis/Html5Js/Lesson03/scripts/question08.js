function fcreaBotones() {
  var cuantos = document.getElementById("txtCuantos").value;
  var htmlinterno = "";
  var cssclass = "";
  for(var i=1; i <= cuantos; i++) {
    if(i%2 == 1) {
      cssclass = "impar";
    } else {
      cssclass = "par";
    }
    htmlinterno = htmlinterno + "<input type='button' id='btn" + i + "' value='Boton " + i + "' class='" + cssclass +"' onclick='fclick(" + i +");'></input><br/>"
  }
  document.getElementById("divAreaBotones").innerHTML = htmlinterno;
  console.log(htmlinterno);
}

function fclick(element)
{
  alert("Click en " + element);
}
