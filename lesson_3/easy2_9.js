// Write two one-line expressions to count the number of
// lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// Option 1 - does not work for statement2
console.log([...statement1.match(/t/g)].length);

// Option 2 - works for both
console.log([...statement2].reduce((acc, curr) => {
  return curr === 't' ? acc + 1 : acc;
}, 0));

// Option 3 - works for both
console.log((statement1.match(/t/g) || []).length);
console.log((statement2.match(/t/g) || []).length);