/*
Write a function that takes an array of strings, and
returns an array of the same values with all vowels (a, e, i, o, u) removed.

loop through the strings in the array, filter all chars that are not
vowels (ignore case)
return a new array with the same values
*/

function removeVowels_(array) {
  return array.map(str => {
    return str.split('').filter(char => (/[^aeiou]/i).test(char)).join('');
  });
}

function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]