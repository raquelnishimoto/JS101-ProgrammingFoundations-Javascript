// Build a program that logs when the user will retire
// and how many more years the user has to work until retirement.
const readline = require('readline-sync');

let today = new Date();
let year = today.getFullYear();

console.log('What is your age? ');
let currentAge = Number(readline.prompt());

console.log('At what age would you like to retire? ');
let retirementAge = Number(readline.prompt());

let yearsToRetire = retirementAge - currentAge;
let retirementYear = Number(year) + yearsToRetire;

console.log(`It's ${year}. You will retire in ${retirementYear}`);
console.log(`You have only ${yearsToRetire} of work to go.`);