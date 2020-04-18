// Write a function that takes an integer,
// and converts it to a string representation.

const NUMBER_TO_STRING = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const APPEND = (num) => {
  switch (Math.sign(num)) {
    case 1:
      return '+';
    case -1:
      return '-';
    default:
      return '';
  }
};

const STRIP_SIGN = (num) => {
  if (Math.sign(num) === -1) {
    return num * -1;
  } else {
    return num;
  }
};

function signedIntegerToString(num) {
  let string = '';
  let sign = APPEND(num);
  num = STRIP_SIGN(num);

  do {
    let digit = num % 10;
    num = Math.floor(num / 10);

    string = NUMBER_TO_STRING[digit] + string;
  } while (num > 0);
  return sign + string;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
