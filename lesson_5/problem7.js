// Given the following code, what will the final values of a and b be?
// Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

/*
On line 4, a is initialised and assigned 2 interger;
On line 5, b is initialised and assigned an array with 2 intergers.
On line 6, there is a destructuring assigment where
arr is initalised and assigned an array containing a and b as elements

On line 8, we are reassigning the element of arr at idx 0
a new value arr[0] 2 + 2 = 4, this action is destructive and will
modify arr, but not modify a - because numbers are immutable
=> the value of a is still 2.
On line 9, we are reassigning the element at idx 0 of the array
which b points to [5, 8]
and substracting this element 5 to the value which a points to which is 2.
5 - 2 is 3. This reassignment of the element arr[1][0]
is destructive and because
objects are mutable (pass=by-reference) it will permanently modify b.
=> the value of b is [3, 8].
*/