let numbers = [1, 2, 3];
numbers[6] = 5;

/*
** This code will not raise an error.
** It will assign 'undefined' values to number[4], number[5] and 5 to number[6].
** "but the slot is empty -- it doesn't have a value,
** not even undefined, in spite of what the line returns."
*/

console.log(numbers);
console.log(numbers[4]);

