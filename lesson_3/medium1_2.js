// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

// Option 1
let swappedLetters = [];

[...munstersDescription].forEach(letter => {
  if (letter === letter.toLocaleUpperCase()) {
    swappedLetters.push(letter.toLocaleLowerCase());
  } else {
    swappedLetters.push(letter.toLocaleUpperCase());
  }
});

console.log(swappedLetters.join(''));

// Option 2
let newMunster = munstersDescription.split('').map(letter => {
  if (letter === letter.toLocaleUpperCase()) {
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
}).join('');

console.log(newMunster);