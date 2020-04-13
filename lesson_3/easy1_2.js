//How can you determine whether a given string ends with an exclamation mark(!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

/*
** In order to return a boolean value,
** we can use a built-in string method .endsWith()
** that takes a substring as an argument and returns true
** if this substring is found in the caller.
*/

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));