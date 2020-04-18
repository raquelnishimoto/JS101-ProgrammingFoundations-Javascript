/*
Write a function that converts a non-negative integer value
(e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.
Your function should do this the old-fashioned way and construct the
string by analyzing and manipulating the number.
*/

const NUMBER_TO_STRING = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToStringOne(num) {
  let mod = 10;
  let divisor = 1;
  let arrayOfStr = [];
  let product = num;

  do {
    let digit = Math.floor((num % mod) / divisor);
    arrayOfStr.unshift(NUMBER_TO_STRING[digit]);
    mod *= 10;
    divisor *= 10;
    product /= 10;
  } while (Math.floor(product) > 0);

  return arrayOfStr.join('');
}

function integerToString(num) {
  let string = [];

  do {
    let digit = num % 10;
    num = Math.floor(num / 10);

    string.unshift(NUMBER_TO_STRING[digit]);
  } while (num > 0);

  return string.join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"