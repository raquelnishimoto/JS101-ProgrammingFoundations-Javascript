/*
** Build a program that asks the user to enter the length and width of a room in meters, and 
** then logs the area of the room to the console in both square meters and square feet.

** Note: 1 square meter == 10.7639 square feet

** Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
*/

let rlSync = require('readline-sync');
const SQMETER_TO_SQFEET = 10.7639;

let meters = Number(rlSync.question('Enter the length of the room in meters: '));
let width = Number(rlSync.question('Enter the width of your room in meters: '));

let roomInMeter = (meters * width).toFixed(2);
let roomInFeet = (roomInMeter * SQMETER_TO_SQFEET).toFixed(2);

console.log(`The area of the room is ${roomInMeter} square meters (${roomInFeet} square feet).`);