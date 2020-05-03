/*
Given the following data structure, use a combination of methods,
including filter, to return a new array identical in structure to
the original, but containing only the numbers that are multiples of 3.

Assuming that when there is no multiples of 3 in the array return empty array

loop through the subarrays filter only the elements that are multiple of 3
*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];


let multiplesOfThree = arr.map(innerArray => {
  return innerArray.filter(number => number % 3 === 0);
});

console.log(multiplesOfThree);