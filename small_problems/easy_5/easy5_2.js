/*
Write a function that takes two arrays as arguments,
and returns an array containing the union of the values from the two.
There should be no duplication of values in the returned array,
even if there are duplicates in the original arrays.
You may assume that both arguments will always be arrays.
*/

function union(array1, array2) {
  let newArray = [];

  array1.concat(array2).forEach((num) => {
    if (!newArray.includes(num)) {
      newArray.push(num);
    }
  });
  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([], [])); // []
console.log(union([0, 1, 23], [0, 1, 23]));