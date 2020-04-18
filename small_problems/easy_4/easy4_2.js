/*
Write a program that solicits six numbers from the user,
then logs a message that describes whether or not the sixth
number appears amongst the first five numbers.
*/

const readline = require('readline-sync');

function isNumInInput(list, num) {
  console.log(list.includes(num));
  return list.includes(num);
}

console.log('Enter 1st number: ');
let firstNum = readline.prompt();

console.log('Enter 2nd number: ');
let secondNum = readline.prompt();

console.log('Enter 3rd number: ');
let thridNum = readline.prompt();

console.log('Enter 4th number: ');
let fourNum = readline.prompt();

console.log('Enter 5th number: ');
let fifthNum = readline.prompt();

console.log('Enter last number: ');
let lastNum = readline.prompt();

let numbers = [firstNum, secondNum, thridNum, fourNum, fifthNum];

if (isNumInInput(numbers, lastNum)) {
  console.log(`The number ${lastNum} appears in ${numbers.join()}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numbers.join()}.`);
}