if (1 === 1) {
  let a = 'foo'
}

console.log(a);

/*
Within the conditional statement, `lines 1 to 3` define a block
within which the variable `a` is declared and assigned to the string 'foo'.
The `console.log()` function is then called on `line 5`
and passed `a` as its argument, since `a` is not accessible outside the block,
the execution of this code will raise a Reference error.
This example demostrates variable scoping rules in JavaScript, specifically
that a variable declared inside of a block is not accessible outside the block.
*/


let object1 = { a: 1 };
let object2 = { b: 3 };

function foo(obj1, obj2) {
  obj1 = object2;
  obj2 = object1;

}

foo(object1, object2);

console.log(object1);
console.log(object2);

/*
The global variables `object1` and `object2` on `lines 18 and 19`
are assigned to the object { a: 1} and { b: 3 } respectively.

The `function foo` is declared on `line 21` with two parameters `obj1`
and `obj2`. Within the function the local variable obj1 is assigned to
`object2` and the local variable `obj2` is assigned to `object1`.

When function `foo` is called on `line 27` it is passed `object1` and `object2`
as arguments, in the function `obj1` and `obj2` are reassigned:
* the global variable `obj1` and the local variable `object2`
point to the same Object { a: 1 }.
* the global variable `obj2` and the local variable `object1`
point to the same Object { b: 3 }.
This action does not affect the values which `object1` and `object2` point to.

The function `console.log()` is called on `line 29` and passed `object1` as
its argument, since the reassignement in the function does not affect the
value which `object1` and `object2` points to,
{ a: 1 } and { b: 3} is the output.

This example demonstrates that objects variables references a value in
memory in JavaScript, specifically that reassignments a new value to a
variable that was once pointing to the same object as the other
variable will not affect that other variable.
*/