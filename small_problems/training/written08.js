let greetingMessage = 'Good Morning';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening');
greetPeople();

/*
The function `changeGreetingMessage()` is called on `line 11` and passed the string `Good Evening` as argument.
Then on `line 7` the function `changeGreetingMessage()` is declared with one parameter `newMessage`.
On the function execution the local variable `newMessage` is initialised and assigned to the string `Good Evening`.
On `line 8` the global variable `greetingMessage` is reassigned to a new value `Good Evening`;

The function `greetPeople()` on `line 12` is called with no arguments. This invokes the execution of the function `greetPeople()`, which is
declared on `line 3`. The function `console.log()` is called on `line 4` and passed the global variable `greetingMessage` as argument,
since `greetingMessage` was reassigned to new value on the execution on `changeGreetingMessage('Good Evening')`, `Good evening` is what is output.
*/


function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive); // logs [9, 2, 3, 4, 5]

/*
The global variable `oneToFive` is initialised on `line 30` and assigned the array `[1, 2, 3, 4, 5]`.
On `line 31` the function `changeFirstElement()` is called and the variable `OneToFive` is passed as argument.
On `line 26` the function `changeFirstElement()` is declared with one parameter `array`. On the execution of
this function, `array` is initialised and assigned the array `[1, 2, 3, 4, 5]`. On `line 27` the first element
at index `0` is reassigned to a new value `9`. This action mutates the `Object` `array`.

The function `console.log()` is called on `line 32` and passed the global variable `oneToFive` as argument,
since `oneToFive` was modified on the execution of `changeFirstElement(oneToFive)`, [9, 2, 3, 4, 5] is what is
output.

This example demonstrates the arrays are pass-by-reference in JavaScript, more specifically both global variable `oneToFive`
and the local variable `array` are reference to the same space in computer memory and that changes
using the syntax `[index]` will reassign the element at that `index` to a new value and mutate the array.
*/

function addToArray(array) {
  return array.concat(0);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive)); // logs [1, 2, 3, 4, 5, 0];
console.log(oneToFive); // logs [1, 2, 3, 4, 5]

/*
The global variable `oneToFive` is initialised and assigned to the array `[1, 2, 3, 4, 5]`.
On `line 55` the function `console.log()` is called and passed the function call `addToArray(oneToFive)` as argument.
On the execution of `addToArray()`, the global variable `oneToFive` is passed as argument. Then on `line 50`, where
the function `addToArray()` is declared `array` is initialised and assigned to the array `[1, 2, 3, 4, 5]`.
On `line 51` the method `concat()` is invoked with `0` as argument and returns a new array `[1, 2, 3, 4, 5, 0]`.
Therefore this return value `[1, 2, 3, 4, 5, 0]` is what is output on `line 55`.

On `line 56` the function `console.log()` is called and passed `oneToFive` as argument, since the previous action on `line 55`
does not mutate the array `oneToFive`, `[1, 2, 3, 4, 5]` is what is output.

This example demonstrates that some methods are non-mutative in JavaScript. Although arrays are pass-by-reference, the caller is not
modified by some methods. Methods such `concat()`returns a new array and therefore does not modify the original `Object` which
the caller had a reference to.

*/
