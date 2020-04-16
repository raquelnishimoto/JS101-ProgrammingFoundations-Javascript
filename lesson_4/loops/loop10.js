// What is the difference between the following two code snippets?

// this code will never run, since the condition to execute block 7-10
// is that counter is larger than 0
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

//This code will execute at least once before it checks the stopping condition
// let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);