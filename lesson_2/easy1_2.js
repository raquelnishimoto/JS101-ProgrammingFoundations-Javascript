// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

function printOddNumbers() {
  for (let num = 1; num <= 99; num +=2) {
    console.log(num);
  }
}

printOddNumbers();

/*
** Further Exploration:
** Repeat this exercise with a technique different from the one that you used, and different from the one provided. 
** Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
*/

function printOddNumUpTo(num) {
let oddNum = 1;
  while(oddNum <= num) {
    console.log(oddNum);
    oddNum += 2;
  }
}

printOddNumUpTo(100);