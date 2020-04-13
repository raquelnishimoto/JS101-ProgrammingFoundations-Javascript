// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// Create a new array that contains all values, but in an un-nested format:
// Option 1
console.log(flintstones.flat());

// Option 2
console.log([].concat(...flintstones));

// Option 3 - .reduce()
let flintstonesFam = flintstones.reduce((acc, curr) => {
  return [].concat(acc, curr);
}, []);

console.log(flintstonesFam);

// Option 4 - .forEach
let flintstonesFamily = [];
flintstones.forEach(memberGroup => {
  flintstonesFamily = flintstonesFamily.concat(memberGroup);
});

console.log(flintstonesFamily);
