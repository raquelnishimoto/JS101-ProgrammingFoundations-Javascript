// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

/*
Both numArray and object refer to the same address in computer memory.
As a consequence, a change to any of the objects will be visible to
both - the change to value from property "first" will show in object.
Last line 8 outputs { first: [1, 2] }.
*/