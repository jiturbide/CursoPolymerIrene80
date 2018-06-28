(function() {

  'use strict';
 const user = 'solucionPromesas/datos.json';
 const cancion = 'solucionPromesas/canciones.json';
 const API_URL = user.user.concat(cancion.canciones);

  const control = document.querySelector('#article0');

   fetch(API_URL)
     .then(response => response.json())
     .then(jsondata => printResponse(jsondata))
     .catch(err => console.log('Fallo la peticion ' + err));

	const printResponse = (jsondata) => {
		 	let theHtml = '';
		 	let theRow = '';

    //  theHtml = "<table style='width:100%' padd><tr> <th>Concepto</th> <th>Valor</th> </tr>";

      for(let key in jsondata.user) {

theRow += jsondata.user[key]['name'];
  theRow += jsondata.user[key]['id'];
         theHtml = theHtml + theRow;
      }

      //theHtml = theHtml + '</table>';

		 	control.innerHTML = theHtml;
	}


})();
