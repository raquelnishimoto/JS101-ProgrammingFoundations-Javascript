/*
Write a function that returns the next to last word in the String passed to it
as an argument. Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.
*/

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function penultimate(words) {
  words = words.split(' ');
  return words[words.length - 2];
}

// Further Exploration
// Write a function that returns the middle word of a phrase or sentence.

function middle(words) {
  let wordsArray = words.trim().split(' ');

  if (wordsArray.length <= 1) {
    return words;
  } else if (wordsArray.length % 2 === 0) {
    return wordsArray[(wordsArray.length / 2) - 1];
  } else {
    return wordsArray[Math.floor(wordsArray.length / 2)];
  }
}

console.log(middle(' '));
console.log(middle('word'));
console.log(middle('Launch school'));
console.log(middle('Launch school online'));
console.log(middle('Launch school is online'));
console.log(middle('Launch school online is great!'));


