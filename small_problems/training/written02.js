// function foo(a) {
//   a = 10;
// }

// function bar(b) {
//   b = a;
//   return a;
// }

// console.log(foo(1));
// console.log(bar(2));

/*
The function `console.log()` on `line 10` output is undefined, since
this function will print to the console the return value of the
funtion `foo()`, which is passed as argument to `console.log()`.

The execution of function `foo()` returns `undefined`, since there is
no explicit return statement. In this case, the function implicitly
returns undefined.

The funtion `console.log()` on `line 11` raises an error of type
`Refference error`. The function `bar()` which is passed as an
argument to function `console.log()`. Then the function `bar()`
is called and passed number 2 as argument.
Within function `bar()` the local variable `b` is
reassigned to the local variable `a`, since functions do not
share scope, the local variable `a`, which was defined in
function `foo()` is not accessible in function `bar()`.

This example demonstrates variable scoping rules in JavaScript,
more specifically that separate functions do not share scope.

*/

function foo2(obj1, obj2, obj3) {

  obj1 = obj2;
  obj3 = obj2;

}

let obj1 = { a: 1 };
let obj2 = { b: 10 };
let obj3 = { c: 100 };

foo2(obj1, obj2, obj3);

console.log(obj1);
console.log(obj2);
console.log(obj3);

/*

The function `foo2()` is called on `line 47` and passed three
global variables of type Object `obj1`, `obj2`, `obj3`.
Within function `foo2()`:
* the global variable `obj1` is shadowed by the local variable `obj1`
* the global variable `obj2` is shadowed by the local variable `obj2`
* the global variable `obj3` is shadowed by the local variable `obj3`

Therefore, the reassignments on `lines 38-39` will not affect the
values of the global variables.
The function `console.log()` is then called on `line 49` and passed `obj1` as
argument, { a: 1 } is what is output since this is the value of the object
assigned to global variable `obj1`.
The function `console.log()` is then called on `line 50` and passed `obj2` as
argument, { b: 10 } is what is output since this is the value of the object
assigned to global variable `obj2`.
The function `console.log()` is then called on `line 51` and passed `obj3` as
argument, { C: 100 } is what is output since this is the value of the object
assined to global variable `obj3`.

This example demonstrates variable shadowing in JavaScript, more specifically
that a variable in the inner scope will prevent changes to a variable in the
outer scope when they are defined with the same name in scopes that overlap.
*/