let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
The function `foo()` is called on `line 6` and passed no arguments.
On `line 2` the function `foo()` is defined and within the function
the local variable `bar` is initialised and assigned to the number `2`
this local variable shadows the global variable initialised outside the function
on `line 1`.

The function `console.log()` on `line 7` is called and passed the global variable `bar` as argument,
since the global variable `bar` on `line 1` was shadowed by the local variable on `line 3`, `1` is what
is output.

This example demonstrates variable shadowing in JavaScript, more specifically that variables in the inner
scope cannot modify variables in the outer scope when these variables have the same name in scopes that
overlap.
*/

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*
The function `scream()` is called on `line 31` and passed the string `Yipeee` as argument.
The function `scream()` is defined on `line 25` and the parameter `words` is assigned
to the string `Yipeee` - this creates a local scope.
Within the function on `line 26` the local variable `words` is reassigned a new value
using `+` to concatenate two strings `Yipeee` and `!!!`. Now the local variable `words` has a new value
`Yipeee!!!!`. On the following line, the statement `return` will stop the execution of the remaining
code and return undefined. This means that `console.log(words)` is unreacheable.
*/