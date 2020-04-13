// Write four different ways to remove all of the elements from the array:

let numbers = [1, 2, 3, 4];

// Option 1
numbers.splice(0, numbers.length);
console.log(numbers);

// Option 2
numbers = [];
console.log(numbers);

// Option 3
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

// Option 4
while (numbers.length) {
  numbers.shift();
}
console.log(numbers);

// Option 5
numbers.length = 0;