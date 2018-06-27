function formatDate(userDate) {
  let arreglo = userDate.split("/");
  const year = arreglo[2];
  let month = arreglo[0];
  let day = arreglo[1];

  if (month.length == 1){
    month = '0' + month;
  }
  if (day.length == 1){
    day = '0' + day;
  }

  return year + month + day;
}

console.log(formatDate("12/31/2014"));
