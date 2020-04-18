/*
Using the multiply() function from the "Multiplying Two Numbers" problem,
write a function that computes the square of its argument (the square is
the result of multiplying a number by itself).
*/

const multiply = (num1, num2) => num1 * num2;

const square = num => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true

/*
Further Exploration
What if we wanted generalize this function to a "power to the n" type function:
cubed, to the 4th power, to the 5th, etc. How would we go about doing so while
still using the multiply() function?
*/

function power(num, n) {
  let result = num;

  while (n > 1) {
    result = multiply(result, num);
    n -= 1;
  }
  return result;
}

console.log(power(-8, 3));