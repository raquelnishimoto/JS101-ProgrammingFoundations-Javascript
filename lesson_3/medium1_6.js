// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

/*
According to MDN documentation NaN is not equal to anything, including NaN
A way to reliably test is an element is equal to NaN is to call
Number.isNaN() method, passing the value as argument.
Return true if given value is NaN and false otherwise.
*/