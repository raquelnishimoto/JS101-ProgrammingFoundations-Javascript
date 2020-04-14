// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/*
On lines 9-11, one, two, three are initialised and assigned values of type array
with string "one", "two" and "three" respectively.
On line 13, the fuction messWithVars() is called and passed these variables as
arguments. In the function, starting from line 4:
the variables one, two and three are reassigned to new values.
Although, objects are mutable, reassigned will change the reference
from the original argument to a new object.

variable one will still have value ["one"],
variable two will still have value ["two"],
variable three will still have value ["three"],
*/
