/*
Write a function that takes a string argument, and returns true
if all of the alphabetic characters inside the string are uppercase;
false otherwise. Ignore characters that are not alphabetic.

loop trough each char in the string
if the char is not alphabetic ignore
if the char is lower case return false
if at the end of the loop there are no lowercase chars, return true
*/

function isUppercase_(string) {

  for (let idx = 0; idx < string.length; idx++) {
    if ((/[^A-Z]/gi).test(string[idx])) continue;
    if (string[idx] === string[idx].toLowerCase()) return false;
  }

  return true;
}

function isUppercase(string) {
  return !(/[a-z]/g).test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true