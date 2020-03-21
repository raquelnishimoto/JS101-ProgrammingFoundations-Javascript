/*
** Write a program that asks the user to enter an integer greater than 0, 
** then asks whether the user wants to determine the sum or 
** the product of all numbers between 1 and the entered integer, inclusive.
*/

// Option 1
let rlSync = require('readline-sync')

let number = Number(rlSync.question('Please enter an integer greater than 0: '));
let answer = rlSync.question("Enter 's' to compute the sum, or 'p' to compute the product. ")
console.log(typeof answer);
let sum = 0;
let product = 1;
let value = 1;

while (number >= value) {
  if (answer === 's') {
    sum += value;
  } else if (answer === 'p') {
    product *= value;
    console.log(product);
  }
  value += 1;
}

if (answer === 's') {
   console.log(`The sum of the integers between 1 and ${number} is ${sum}`);
} else {
  console.log(`The sum of the product between 1 and ${number} is ${product}`);
};

// Option 2

function sumNumbers(targetNum) {
  let sum = 0;

  for (let num = 1; num <= targetNum; num++) {
    sum += num;
  }
  return sum;
}

function prodNumbers(targetNum) {
  let product = 1;

  for (let num = 1; num <= targetNum; num++) {
    product *= num;
  }
  return product;
}

console.log('Please enter and integer greater than 0: ');
let targetNumber = parseInt(rlSync.prompt(), 10);

console.log("Enter 's' to compute the sum, or 'p' to compute the product. ");
let answer = rlSync.prompt();

if (answer === 's') {
  let sum = sumNumbers(targetNumber);
  console.log(`The sum of the integers between 1 and ${targetNumber} is ${sum}.`);
} else if (answer === 'p') {
  let product = prodNumbers(targetNumber);
  console.log(`The product of the integers between 1 and ${targetNumber} is ${product}.`);
} else {
  console.log(`Unknown operation!`);
}

/*
Further Exploration
** What if the input was an array of integers instead of just a single integer? How would your computeSum and computeProduct functions change? 
** Given that the input is an array, how might you make use of the Array.prototype.reduce() method?
*/


console.log('Please enter and integer greater than 0: ');
let targetNumber = parseInt(rlSync.prompt(), 10);
let numbers = [];

for (let num = 1; num <= targetNumber; num++) {
  numbers.push(num);
}

function computeSum(numbers) {
  return numbers.reduce((sum, num) => {
    return sum + num;
  });
}

function computeProduct(numbers) {
  return numbers.reduce((product, num) => {
    return product * num;
  })
}

console.log("Enter 's' to compute the sum, or 'p' to compute the product. ");
let answer = rlSync.prompt();

if (answer === 's') {
  let sum = computeSum(numbers);
  console.log(`The sum of the integers between 1 and ${targetNumber} is ${sum}.`);
} else if (answer === 'p') {
  let product = computeProduct(numbers);
  console.log(`The product of the integers between 1 and ${targetNumber} is ${product}.`);
} else {
  console.log(`Unknown operation!`);
}