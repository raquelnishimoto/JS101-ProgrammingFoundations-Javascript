// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)

/*
* str1 is initialised on line 3 and assigned a value
* of string type "hello world",
* on line 4, str2 is assigned a copy of the value of str1
* on line 5, str2 is reassigned a new string "goodbye!"
* str1 is still pointing to the original value
* on line 6, console.log() will printout "hello there"
*/