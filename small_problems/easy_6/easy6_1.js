/*
Write a function that takes a string, doubles every character in the
string, and returns the result as a new string.
*/

function repeater(string) {
  const DUPLICATE = 2;
  return string.split('').map((char) => char.repeat(DUPLICATE)).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""