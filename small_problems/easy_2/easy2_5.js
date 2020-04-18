/*
Write a program that prompts the user for two positive integers,
and then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power.
Do not worry about validating the input.
*/

const readline = require('readline-sync');

const sum = (num1, num2) => num1 + num2;
const subtrat = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const modulus = (num1, num2) => num1 % num2;
const power = (num1, num2) => Math.pow(num1, num2);

console.log('Enter first number: ');
let firstNum = readline.question();
firstNum = Number(firstNum);

console.log('Enter second number: ');
let secondNum = readline.question();
secondNum = Number(secondNum);

function displayOperation(result) {
  console.log(`=> ${result}`);
}

displayOperation(sum(firstNum, secondNum));

displayOperation(subtrat(firstNum, secondNum));

displayOperation(multiply(firstNum, secondNum));

displayOperation(divide(firstNum, secondNum));

displayOperation(modulus(firstNum, secondNum));

displayOperation(power(firstNum, secondNum));