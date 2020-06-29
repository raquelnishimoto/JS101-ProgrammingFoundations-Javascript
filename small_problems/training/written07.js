> let a = console.log("Howdy")
> a

/*
The global variable `a` is initialised on `line 1` and assigned to the return value of `console.log("Howdy")`,
since the function `console.log()` returns 'undentified` this is what is assigned to `a`
On `line 2` a returns `undentified` which is the value assigned to it on `line 1`
*/

> 5 * let foo
SyntaxError: Unexpected identifier

/*
`Line 10` is an arithmetic expression where once of the operands is a statement that does not return any value.
Statements always evaluate as `undefined`. Although, JavaScript accepts multiple expressions as part of a larger
expression, it does not accept statements as part of expressions.
*/

// Explain why this code logs '510' instead of 15.
console.log('5' + 10);
/*
The function `console.log()` is called on `line 20` and passed the expression `'5' + 10` as argument,
since the operator is `+`, JavaScript concatenates the two values `'5'` and `10`.
These values are of different types - string and number. In this case, JavaScript implicitly converts the number number to a `String` type
and concatenates the two values, resulting in `510` instead of `15`.
*/


var foo = ['a', 'b', 'c'];
foo.length;  // returns 3
foo[3];      // will this result in an error?
/*
The global variable `foo` is initialised on `line 29` and assigned the array ['a', 'b', 'c']
On `line 30` the property `length` is called on `foo` and returns `3` as its value.
On `line 31` the `[]` accesses element at index `3`. However, there is no element in `foo` at index `3`.
The first element index in `foo` array starts at `0` and last element is at index `2`, trying to access
elements that are not defined will evaluate as `undefined`
*/



> let a = 4
= undefined

> let b = a
= undefined

> a = 7
= 7

> b

/*
Variable declarations such as the ones on `lines 42-45` always evaluate as undefined.
On `line 42` the global variable `a` is initialised and assigned the number `4`.
On `line 45` the global variable `b` is initialised and assigned the value of variable `a`
Now both variables point to different spaces in computer memory wich happen to have the same value
On `line 48` the variable `a` is reassigned a new value `7`.
On `line 51` the variable `b` returns the number `4`, which is the value assigned to it when it was
initialised on `line 45`.
This example demostrates that primitive data types are pass by value in JavaScript, more specifically that
variables pointing to primitive data types are immutable and cannot be changed.
*/


if (1 === 1) {
  let a = 'foo'
}

console.log(a);

/*
The conditional statement on `line 66` evaluates to true and the block defined on `lines 66-68`
is executed. On `line 67` the variable `a` is initialised and assigned the string `foo`.
Now `a` has block-scope.
On `line 70` the function `console.log()` is called and passed the variable `a` as argument, since
the `a` has block-scope it will not be accessible outside of the block.

This example demonstrates that variables initialised inside of a block has block-scope and cannot
be accessed outside of the block.
*/

let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a);

/*
The global variable `a` is initialised on `line 83` and assigned the string 'foo' as argument,
within the block on `lines 85` the variable is accessed and reassigned a new string `bar`.

The function `console.log()` on `line 88` is called and passed the global variable `a` as argument, since
`a` was accessed within the block on `lines 84-86` and reassigned to a new value, `bar` is what is output.

This example demonstrates that global variables can be accessed within blocks as well as outside of the blocks.
*/

{
  let foo = 'bar';
}

console.log(foo);

/*
The statement `let` on `line 101` initialises a local variable with block scope.
The function `console.log()` on `line 104` is called and the variable `foo` is passed
as argument, since `foo` has block scope and cannot be accessed from outside of the block
it will raise an error of type: Reference Error.
*/

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
The global variable `foo` is initialised on `line 113` and assigned the string `bar`.
The statement `let` on `line 115` initialises a local variable `foo` which is block-scoped
and which `shadows` the global variable. The cannot be accessed outside of this block on `lines 114-116`

The function `console.log()` on `line 118` is called and passed `foo` as argument, since
only the global variable is accessible 'bar' is what is output.

This example demonstrates that when variable shadowing occurs, variables in the inner scope will prevents changes
to the variable defined in the outer scope.
*/

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
The statement `const` on `line 132` initialises a global variable. This global variable is assigned a string 'bar'.
Within the block defined on `lines 133 - `35` the statement `const` initialised a local variable `FOO` with the same name
as the global variable. The local variable `shadows` the global variable on `line 132`.

The function `console.log()` on `line 137` is called and passed `FOO` as argument, since the local variable on `line 134`
shadows the global variable on `line 132`, 'bar' is what is output.

This example demonstrates shadowing in JavaScript, more specifically that variables defined in the inner scope
prevents changes to variables in the outerscope when they have the same name in scopes that overlap.
*/