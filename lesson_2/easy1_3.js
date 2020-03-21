// Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

function logEvenNumbers() {
  let evenNum = 2;

  while(evenNum <= 99) {
    console.log(evenNum);
    evenNum += 2;
  }
}

logEvenNumbers();