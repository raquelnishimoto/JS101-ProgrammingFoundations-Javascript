// Create an object that expresses the frequency with which
// each letter occurs in this string:
// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let statement = "The Flintstones Rock";

// Option 1
let letters = statement.split(' ').join('').split('');

let letterFrequency = {};

letters.forEach((letter) => {
  let occurence = letters.filter((char) => {
    return char.toLowerCase() === letter;
  }).length;
  letterFrequency[letter] = occurence;
});

console.log(letterFrequency);

// Option 2
let onlyLetters = statement.split('').filter((char) => char !== ' ');

let result = {};

onlyLetters.forEach((char) => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);