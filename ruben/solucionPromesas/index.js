(function() {

  'use strict';

  const API_URL = 'datos.json';
  const control = document.querySelector('#article0');
  const userHtml = document.querySelector('#user');
   fetch(API_URL)
     .then(response => response.json())
     .then(jsondata => printResponse(jsondata))
     .catch(err => console.log('Fallo la peticion ' + err));

	const printResponse = (jsondata) => {
		 	let theHtml = '', theRow = '', user ='',genero='';

      user = jsondata.user[0]['name'];
      genero =jsondata.genero[0]['tipo'];
        theHtml = "<ul>";
          for(let key in jsondata.canciones) {theRow ='<li>'  +
          'Artista:&nbsp;' + jsondata.canciones[key]['cantante'] + '<br>'+
          'Titulo:&nbsp;&nbsp;' + jsondata.canciones[key]['titulo'] +'</li>'+'<br>';

          theHtml = theHtml + theRow;
      }

      theHtml = theHtml + '</ul>' ;
      userHtml.innerHTML = 'Lista de canciones de:'+'&nbsp;&nbsp;'+user +'<br>'+
                            'Genero: &nbsp;&nbsp;'+ genero;
      control.innerHTML = theHtml;
	}


})();
