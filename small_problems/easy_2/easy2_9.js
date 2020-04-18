/*
Write a function that takes a String of digits, and returns
the appropriate number as an integer. You may not use any of the methods:
Number(), Parse().  Your function should do this the old-fashioned way
and calculate the result by analyzing the characters in the string.
*/
const ASCII_NUM = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70
];
const BASE = 16;

function stringToInteger(string) {
  return string.split('').reduce((acc, curr) => {
    curr = ASCII_NUM.indexOf(curr.charCodeAt(0));
    return (10 * acc) + curr;
  }, 0);
}

function hexadecimalToInteger(string) {
  return string.toUpperCase().split('').reverse().reduce((acc, curr, idx) => {
    curr = ASCII_NUM.indexOf(curr.charCodeAt(0));
    return acc + (curr * (BASE ** idx));
  }, 0);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(hexadecimalToInteger('4D9f') === 19871); //logs true
