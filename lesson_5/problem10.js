/*
Perform the same transformation of sorting the subarrays we
did in the previous exercise with one difference; sort the
elements in descending order.
*/

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortInDesc = arr.map(array => {
  if (array.every(element => typeof element === 'number')) {
    return array.slice().sort((a, b) => b - a);
  } else {
    return array.slice().sort().reverse();
  }
});

console.log(sortInDesc);