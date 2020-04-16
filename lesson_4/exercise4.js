// create a function called multiply that can take an additional
// argument to determine the transformation criterion.
// code a function that lets you multiply every array item by a specified value.

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]

function multiply(numbers, value) {
  let newNumbers = [];

  for (let idx = 0; idx < numbers.length; idx += 1) {
    newNumbers.push(numbers[idx] * value);
  }
  return newNumbers;
}