/*
Given the following data structure,
return a new array with the same structure,
but with the subarrays ordered --
(alphabetically or numerically as appropriate -- in ascending order.
*/

/*
loop through each element of arr, and sort the elements based on their
data type e.g. Number, String
*/

let arr = [['b', 'c', 'a'], [2, 1, 3, 11], ['blue', 'black', 'green']];

let sortInAsc = arr.map(array => {
  if (array.every(element => typeof element === 'number')) {
    return array.slice().sort((a, b) => a - b);
  } else {
    return array.slice().sort();
  }
});

console.log(sortInAsc);
console.log(arr);