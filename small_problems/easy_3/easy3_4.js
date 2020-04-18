/*
Write a function that calculates and returns the index of the first
Fibonacci number that has the number of digits specified by the
argument. (The first Fibonacci number has an index of 1.)
You may assume that the argument is always an integer greater than
or equal to 2.
*/

// Option 1
function fibonacci(num) {
  if (num <= 0) {
    return 0;
  }

  if (num < 2) {
    return 1;
  }

  return fibonacci(num - 2) + fibonacci(num - 1);
}

function findFibonacciIndexByLengthSlow(size) {
  let num = 1;

  while (String(fibonacci(num)).length !== size) {
    num += 1;
  }
  return num;
}


// Option 2
function findFibonacciIndexByLength(size) {
  let num1 = 1;
  let num2 = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = num1 + num2;
    index += 1;
    num1 = num2;
    num2 = fibonacci;
  } while (String(fibonacci).length < size);

  return index;
}


console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

// console.log(fibonacci(7));