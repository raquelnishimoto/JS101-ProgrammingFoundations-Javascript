/*
* The Array.prototype.reverse method reverses the order of elements in an array,
* and Array.prototype.sort can rearrange the elements in a variety of ways,
* including descending. Both of these methods mutate the original array.
* Write two distinct ways of reversing the array without mutating the
* original array. Use reverse for the first solution, and sort for the second.
*/

// Bonus 1: Can you do it using the Array.prototype.forEach() method?

// Bonus 2: Can you do it using the Array.prototype.reduce() method?

// .reverse()
// Option 1
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice().reverse();
console.log(newNumbers);

// // Bonus 1
let arrayForEach = [];
numbers.forEach(num => {
  arrayForEach.unshift(num);
});

console.log(arrayForEach);

// // Bonus 2.1
let arrayReduce = [];
numbers.reduce((acc) => {
  arrayReduce.push(numbers[acc]);
  return acc - 1;
}, numbers.length - 1);

console.log(arrayReduce);

// Bonus 2.2
let arrayRdc = [];
numbers.reduce((acc) => {
  arrayRdc.unshift(numbers[acc]);
  return acc + 1;
}, 0);

console.log(arrayRdc);

// .sort()
// Option 1
let arraySort = [...numbers].sort((num1, num2) => num2 - num1);
console.log(arraySort);
console.log(numbers);

// Bonus 1 - .forEach
let arraySortTwo = [];
numbers.forEach(num => {
  let maxValue = 0;
  if (num > maxValue) {
    arraySortTwo.unshift(num);
    maxValue = num;
  } else {
    arraySortTwo.shift(num);
  }
});

console.log(arraySortTwo);

// Bonus 2 - .reduce()
let arraySortThree = [];
numbers.reduce((acc, curr) => {
  if (curr > acc) {
    arraySortThree.unshift(curr);
    return curr;
  } else {
    arraySortThree.shift(curr);
    return acc;
  }
}, 0);

console.log(arraySortThree);
