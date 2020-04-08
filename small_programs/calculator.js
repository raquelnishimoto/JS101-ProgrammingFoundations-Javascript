/*
** Our first program in this course will be a command line calculator program:

** Ask the user for two numbers.
** Ask the user for the type of operation to perform:
** add, subtract, multiply or divide.
** Perform the calculation and display the result.

** Problem: build a calculator that takes two inputs (integers) from the user
** and perform four operations:
- sum
- substract
- multiply
- divide
input:
- ask the user for two numbers
- ask the user which operation they want to perform
a - for addition
s - for sum
d - for division
m - for multiplication
invalid input:
- validate if input is a number
- validate if operation is one of the valid options
 output:
- based on the operation chosen by the user:
- add, sub, multi or divide the two numbers
- print on the terminal the result of the calculation

** Example:
2 + 3 = 5
2.5 + 2.5 = 5
2.5 * 3 = 7.5
6 / 10 = 0.6
45 * 2.3 = 98.9

** Data structure:
input of numbers should be converted from string to numbers (parseFloat)

** Algorithm:
- get firstNumber and secondNumber and check if they are a valid number
- if not ask again for valid number
- store firstNumber and convert string to number
- get chosen operation and check if is valid option -one of the four options
- if not ask again for valid option
- store secondNumber and convert string to number
- store the chooson operation
- for each operation have a separate function
- based on the chosen operation call the coresponding function
- return the result in float points (do not exlude decimals)
*/
const MESSAGES = require('./resources/calculator_messages.json');
const readline = require('readline-sync');
const LANGUAGE = 'pt';

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('welcome');

let calculate = true;

while (calculate) {
  prompt("ask first number");
  let firstNumber = readline.question();

  while (invalidNumber(firstNumber)) {
    prompt("invalid number");
    firstNumber = readline.question();
  }

  prompt("ask second number");
  let secondNumber = readline.question();

  while (invalidNumber(secondNumber)) {
    prompt("invalid number");
    secondNumber = readline.question();
  }

  prompt("which operation");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("invalid option");
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(firstNumber) + Number(secondNumber);
      break;
    case '2':
      output = Number(firstNumber) - Number(secondNumber);
      break;
    case '3':
      output = Number(firstNumber) * Number(secondNumber);
      break;
    case '4':
      output = Number(firstNumber) / Number(secondNumber);
      break;
  }

  console.log(`The result is ${output}.`);

  prompt('continue?');
  let answer = readline.question();

  switch (LANGUAGE) {
    case 'en':
      if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
        calculate = true;
      } else {
        calculate = false;
      }
      break;
    case 'pt':
      if (LANGUAGE === 'pt' && (answer.toLowerCase() === 'sim' || answer.toLowerCase() === 's')) {
        calculate = true;
      } else {
        calculate = false;
      }
      break;
  }
}
