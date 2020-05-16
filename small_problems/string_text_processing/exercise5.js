/*
Write a function that takes a string as an argument, and returns
that string with every lowercase letter changed to uppercase and
every uppercase letter changed to lowercase. Leave all other
characters unchanged.

map each char in the string, if char is uppercase
convert it to lower case; if char is lower case, convert is
to uppercase; else leave it as is
return the map of chars joined
*/


function swapCase(string) {
  return string.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

