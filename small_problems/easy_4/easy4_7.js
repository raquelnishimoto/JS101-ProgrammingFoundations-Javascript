/*
Write a function that takes an array of numbers,
and returns an array with the same number of elements,
with each element's value being the running total from the original array.
*/

// Option 1
function runningTotalOne(array) {
  let listOfTotals = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx++) {
    sum += array[idx];
    listOfTotals.push(sum);
  }
  return listOfTotals;
}

// Option 2
function runningTotal(array) {
  let sum = 0;

  return array.map(function(num) {
    sum += num;
    return sum;
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []