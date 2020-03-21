/*
** Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
** The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
** You can ignore input validation and assume that the user will enter numbers.
*/

let rlSync = require('readline-sync');

console.log('What is the bill?');
let bill = rlSync.prompt();
bill = parseInt(bill, 10);

console.log('What is the tip percentage?');
let tipPercentage = rlSync.prompt();
tipPercentage = parseInt(tipPercentage, 10);

let tip = bill * (tipPercentage / 100);
let total = (bill + tip).toFixed(2);

console.log(`The tip is $${tip.toFixed(2)}.`);
console.log(`The total is $${total}.`);
