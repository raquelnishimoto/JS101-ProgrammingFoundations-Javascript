// Given a string, return a new string that replaces
// every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";
let replacement = advice.replace('important', 'urgent');

console.log(replacement);

// Can you figure out how to replace all occurrences?

let adviceTwo = "Few things in life are as important as house training your pet dinosaur. Important things should be done first!";
let wordOfAdvice = adviceTwo.split(' ');
let newAdvice = [];

wordOfAdvice.forEach(word => {
  if (word === 'important') {
    newAdvice.push('urgent');
  } else if (word === 'Important') {
    newAdvice.push('Urgent');
  } else {
    newAdvice.push(word);
  }
});

newAdvice = newAdvice.join(' ');
console.log(newAdvice);