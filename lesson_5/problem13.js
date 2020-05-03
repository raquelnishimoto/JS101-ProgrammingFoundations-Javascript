/*
Given the following data structure, sort the array so
that the sub-arrays are ordered based on the sum of
the odd numbers that they contain.

loop through the sub arrays and sum the odd numbers of a and of b
and sort in Asc order the arrays based on this result
*/

function sumOddNum(array) {
  let oddNums = array.filter(num => num % 2 === 1);
  return oddNums.reduce((acc, curr) => acc + curr);
}

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let result = arr.sort((a, b) => sumOddNum(a) - sumOddNum(b));

console.log(result);