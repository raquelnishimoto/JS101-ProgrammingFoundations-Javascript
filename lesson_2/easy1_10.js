/*
** Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. 
** For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

** You may assume that the number passed in is an integer greater than 1.
** rules:
** number are unique
** number includes other number (number passed in as a parameter)
** numbers are either multiple by 3 or 5 - modulus of 3 or 5 is 0

** data structure
** input: integer
** output: integer
** array of numbers that will be summed

** algorithm:
** initialise a variable number = 1
** initialise and empty array - multiples.
** loop through all the numbers from 1 up to targetNumber
** in each loop evaluate if number % 3 or number % 5 === 0 returns a truthy value
** if yes, push that number to array of multiples.
** return the sum of the numbers in the array. 
*/


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
console.log(multisum(20));

function multisum(targetNumber) {
  let number = 1;
  let multiples = [];

  while (number <= targetNumber) {
    if ((number % 3 === 0) || (number % 5 === 0)) {
      multiples.push(number);
    }
    number += 1;
  }
  return multiples.reduce((sum, num) => {
    return sum + num;
  });
}