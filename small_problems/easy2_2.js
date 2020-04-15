/*
Write a program that will ask for user's name.
The program will then greet the user. If the user writes "name!"
then the computer yells back to the user.
*/

const readline = require('readline-sync');

console.log("What's your name?");
let name = readline.question();

if (name.includes('!')) {
  console.log(`Hello ${name.slice(0, name.length - 1)}. Why are you screaming?`.toUpperCase());
} else {
  console.log(`Hello, ${name[0].toUpperCase()}${name.slice(1)}.`);
}