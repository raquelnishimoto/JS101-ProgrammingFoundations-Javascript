// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/*
This is a different scenario, where the objects being passed
to function messWithVars() will actually be modified by .splice()
This is .splice() is a destructive method, which in this case
is replacing the elements in the original object.

variable one will be changed to value ["two"],
variable two will be changed to value ["three"],
variable three will be changed to value ["one"].

*/