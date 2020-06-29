
var bar = "baz";
console.log(bar);
bar.toUpperCase();
console.log(bar);
/*

on `line 3` the function `console.log()` is called and passed `bar`
as argument, since the global variable `bar` on `line 2` is assigned
the string `baz`, `baz` is what is output.
Then on `line 4` the return value of the static function `toUpperCase()` called on `bar`
is 'BAZ'.
Following that the function `console.log()` is called and passed `bar` as argument,
since primitive values are immutable and the method `toUpperCase()` is non mutative,
`baz` is what is output.
This example demostrates that primitive data types are immutable, more specifically
that using a string method does not mutate the string.

*/

var foo = [];
console.log(foo);
foo.push("plugh");
console.log(foo);

bar = bar.toUpperCase();
/*
On `line 22` the function `console.log()` is called and passed the global variable `foo`
as argument, since `foo` is assigned an empty array, `[]` is what is output.
Then on `line 24` the function `console.log()` is called and passed the global variable `foo`
as argument, since previously on `line 23` the methd `push()` is called on `foo` and passed
"plugh" as argument, `[ "plugh" ]` is what is output.
This example demonstrates that an array `Object` can be mutated or modified by a destructive
action, since the method `push()` is destructive the array assigned to `foo` can be changed.

Then on `line 26` the global variable `bar` is reassigned a new value `bar.toUpperCase()`.
This reassignement does not mutate the original primitive value assigned to `bar. What
it does it assign `bar` a new value `BAZ`
*/




let foo = 5;

function addTwo(num) {
   num += 2;
}

function addTwo_v2(foo) {
   foo += 2;
}

addTwo(foo);
console.log(foo);

addTwo_v2(foo);
console.log(foo);

/*
On `line 54` the function `addTwo()` is called and passed the global variable `foo`
as argument. On the execution of the function on `lines 46-48` the local variable `num`
is assigned the number `5`. Then on `line 47` num is reassigned a new value resulted from
the operation `5 + 2`.
On `line 55` the function `console.log()` is called and passed `foo` as argument, since
the primitive value 5 assigned to the global variable `foo` cannot be modified by the
previous function `addTwo()`, `5` is what is output.

Then on `line 57` the function `addTwo_v2()` is called and passed the global variable `foo`
as argument. On the execution of the function on `line 50-52` the local variable `foo`
shadows the global variable. Therefore, the reassignment of the local variable on `line 51`
does not modify the global variable `foo`.
On `line 58` the function `console.log()` is called and passed the global variable `foo` as
argument, since this variable was not modified on the execution of the previous line - `line 57`,
`5` is what is output.

This example demonstrates that variable shadowing, where variables in the inner scope will prevent
changes in the outer scope. It also demonstrates that primitive values are immutable.
*/