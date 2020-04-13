// What will the following code output?


console.log(false == '0');
/*
the code will output true because when using non-strict equality to compare
a boolean and a string, JavaScript will implicitly coerce the string
into a number and then compare the two values
0 is falsy and when compared to false
returns true
*/

console.log(false === '0');
/*
the code will output false because when using strict equality to compare
a boolean and a string, JavaScript will take into account that the data type of
these two values are different
*/
