/*
Write a function that returns true if its integer argument
is palindromic, or false otherwise. A palindromic number
reads the same forwards and backwards.
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true