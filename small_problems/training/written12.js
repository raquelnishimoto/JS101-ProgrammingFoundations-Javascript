// function foo(a) {
//   a = 10;
// }

// function bar(b) {
//   b = a;
//   return a;
// }

// console.log(bar(2));

/*
Does this code throws an error ? Why ? Why not ?
This code will throw an error of type ReferenceError - since the local variable `a`
defined within the function `foo` is not accessible in the function `bar` where it is
invoked on `line 6`.

This example demonstrates that functions do not share scope in JavaScript, more specifically
that JavaScript will throw an error of type ReferenceError - variable is undefined when
trying to access an variable within an outer scope.
*/



test(5);

let test = function (a) {
  a = 5;
  a = "Bye";
  console.log('Hello');
}


/*
Does this code throws an error or not ? Why ? Why not ?
This code will throw an error of type ReferenceError - when trying to access a variable
before it is initialised.
In JavaScript functions are Objects and first-class function and therefore
can be assigned to a variable as any other data type.
On `line 25` the variable `test` is called and passed the number `5` as argument of the anonymous
function expression. However, at this point the variable `test` is not defined, resulting in a
JavaScript error.
*/

let num1 = 24;

function foo(num2) {
  num2 = 45;
  return num2;
}

foo(num1);
console.log(num1);


// What does the last line ouput ?  Why ?

/*
The function `console.log()` on `line 53` outputs `24`, since primitive types such as
Numbers are immutable and therefore cannot be changed.

The function `foo` is called on `line 52` and passed the gobal variable `num1` as argument.
Within function `foo` the local variable `num2` is initialised and assigned to a copy of the
value assigned to `num1`. Both `num1` and `num2` point to different computer memory spaces
which happen to have the same value. Rassigning `num2` on `line 48` will have no effect on
the global variable `num1`.

This example demonstrates that primity data types are immutable in JavaScript, more specifically
that  variables that are assigned a primitive type cannot change the primitive data type.
*/

let nums = {number1: 10, number2: 20};

const test = obj => {
	obj.number3 = 30;
  obj["number4"] = 40;
}

test(nums);
console.log(nums);

// What does the last line log ? Why ?
/*
The function `console.log()` on line 80 outputs `{number1: 10, number2: 20, number3: 30, number4: 40}.

The function expression assigned to the variable `test` is called on `line 79` and passed the global
variable `nums` as argument. The global variable `nums` is initialised on `line 72` and assigned the
object `{number1: 10, number2: 20}` as argument.

When the function expression is invoked a reference to the Object assigned to `nums` is passed to
the function and this reference is assigned to the local variable `obj`, so much so that both
the global variable `nums` and the local variable `obj` point to the same computer memory space.
On `lines 75-76` two parameters `number3` and `number4` are added - one using dot notation and the other
using bracket notation - to the object which the two variables point to.


This example demonstrates that object are mutable in JavaScript, more specifically that adding properties
or elements to one of the variables will reflect in all the other variables the object is referred to.
*/


// ---

// **Question 5**

// 1) In the previous example, where is the value of the `nums` variable stored ? Why ?



// 2) Now, consider the single line code below:

// ```js
// let num = 123;
// ```

// Where is the value of  the `num` variable stored ?

// ---

// **Question 6**

// ```js
// let word = "Hi";

// const test = () => {
// 	//do something
// }
// console.log(word);
// ```

// Is it possible to assign a new value to the `word` variable within the `test` function so that the last line will ouput something different from `Hi` ? How would you do that ? If it is not possible, explain why.



// ---

// **Question 7**

// ```js
// let word = "Hi";

// const test = (word) => {
// 	//do something
// }
// console.log(word);
// ```

// Is it possible to assign a new value to the `word` variable within the `test` function so that the last line will ouput something different from `Hi` ? How would you do that ? If it is not possible, explain why.

// ---

// **Question 8**

// ```js
// let colors = { color1: 'blue', color2: undefined, color3: 'pink' };

// console.log(colors.color2); // undefined
// console.log(colors.color10); // undefined
// ```

// `color2` is one of `colors`'s own keys with an associated value of `undefined` . Both last lines happen to output `undefined` but `colors10` is not a key of `colors`.

// Is there a way to check whether a string exists as as a property in `colors`  ?