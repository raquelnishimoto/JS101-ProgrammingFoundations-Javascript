// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
console.log(arr);

/*
According to MDN documentation, fill() can have three parameters
the first argument is a static value which will replace elements
from start index (second parameter) to end index (third parameter)
default is array.length

arr.fill(1, 1, 5) - replaces all the elements from arr starting
from index 1 and ending with index 5 exclusively.

We know that from the documentation the method returns the modified array.
However, we do not know if it returns a new array with a copy of the modified
element or the original array.
In order to verify that we print out the values assigned to variable arr
and check if they were permanently changed by the method.

Answer = there were permanently changed by .fill() and on line 5
console.log() displays the mutated array = [1, 1, 1, 1, 1]
*/