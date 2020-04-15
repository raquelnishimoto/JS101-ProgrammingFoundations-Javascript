/*
Write a function that takes a string of digits, and returns
the appropriate number as an integer. The string may have a leading + or - sign;
if the first character is a +, your function should return a positive number;
if it is a -, your function should return a negative number. If no sign is
given, you should return a positive number.
*/

const ASCII_NUM = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70
];

function stringToInteger(string) {
  return string.split('').reduce((acc, curr) => {
    curr = ASCII_NUM.indexOf(curr.charCodeAt(0));
    return (10 * acc) + curr;
  }, 0);
}

function stringToSignedInteger(num) {
  if (num[0] === '-') {
    return stringToInteger(num.slice(1)) * -1;
  } else if (num[0] === '+') {
    return stringToInteger(num.slice(1));
  } else {
    return stringToInteger(num);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true