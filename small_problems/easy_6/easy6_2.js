/*
Write a function that takes a string, doubles every consonant character
 in the string, and returns the result as a new string. The function
 should not double vowels ('a','e','i','o','u'), digits, punctuation, or
 whitespace.
*/

function doubleConsonants(string) {
  const DUPLICATE = 2;
  let exclude = /[^aeiou\d\s\W]/i;

  return string.split('').map((char) => {
    if (exclude.test(char)) {
      return char.repeat(DUPLICATE);
    } else {
      return char;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""