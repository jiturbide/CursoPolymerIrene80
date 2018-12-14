'use strict';

console.log('Question 05');

var numbers = [1,3,4,5,6,3,4, 4, 4];
function countDuplicates(numbers) {
  var anterior = -1000000;
  var duplicates = [];
  numbers.sort();
  for (var x in numbers) {
    if(numbers[x] == anterior) {
      if(duplicates.indexOf(numbers[x]) == -1) {
         duplicates.push(numbers[x]);
      }
    }
    anterior = numbers[x];
  }
  console.log(duplicates);
  return duplicates.lenght;
};
var dups2 = countDuplicates(numbers);
console.log(dups2);
