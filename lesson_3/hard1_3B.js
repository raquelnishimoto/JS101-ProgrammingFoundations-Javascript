// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/*
This is the same case as explained in 'hard1_3A',
where variables in function messWithStars() are reassigned
to new values - this will not modify the original argument

variable one will still have value ["one"],
variable two will still have value ["two"],
variable three will still have value ["three"].
*/