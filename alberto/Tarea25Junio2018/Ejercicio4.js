
function registerHandlers(){
  var as = document.getElementsByTagName('a');
  console.log(as[0].innerHTML);

  for (var i = 0; i < as.length; i++) {
    as[i].onclick = (function(index) {
          alert(index);
          return false;
    })(i);
  }
}

registerHandlers();
