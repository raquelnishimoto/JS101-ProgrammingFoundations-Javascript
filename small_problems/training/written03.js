/*
Section 1
*/

let arr = [];
console.log(arr);              // []
console.log(arr.length);       // 0
console.log(Object.keys(arr))  // []



let arr = [2, 4, 6]
arr[-3] = 5;
arr['foo'] = 'a';
console.log(arr);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // [ '0', '1', '2', '-3', 'foo' ]
arr.map(x => x + 1);           // [ 3, 5, 7 ]

/*
The global variable `arr` is initalised in `line 12` and to the array [2, 4, 6]
On `line 13` the property `-3` is initialised and assigned to the number `5`.
On `line 14` the property of type string is initialised and assigned to the string `a`

On `line 15` the funtion `console.log()` is called and passed arr as its argument,
since the addion of the two properties on `lines 13 to 14` mutate the object arr,
[ 2, 4, 6, '-3': 5, foo: 'a' ] is what is output.

On `line 16` the function `console.log()` is called passed arr.length as argument, since
the property lenght identifies only the elements in the array, `3` is what is output.

On `line 17` the function `console.log()` is called and passed the built-in function
Object.keys(arr), since the function Object.keys() returns all properties in the array,
[ '0', '1', '2', '-3', 'foo' ] is what is output.

On `line 18` the built in function `map()` is called and for each element in the array arr,
since it returns a new array with only the elements transformed by the operation of summing
the element to 1 and ignores properties that are non-element keys - [ 3, 5, 7 ] is what is
output.
*/

let arr = [];
arr[-3] = 5;
arr['foo'] = 'a';

// Is arr empty?
console.log(arr.length);       // 0
console.log(Object.keys(arr))  // [ '-3', 'foo' ]

/*
The answer to this question is `it depends`. If we are only interested in the elements of
an array, then the answer is `yes` - the array `arr` is empty. However, if we want to included non-elements, then the
answer is 'no' arr contains two non-elements `-3` and `foo`.

The function `console.log()` is called on `line 47` and passed `arr.length` as argument, since
the property `.length` indentifies only elements in the array, the output is zero. Then, in this
case arr is empty.

The function `console.log()` is also called on `line 48` but this time it is passed the built-in
function `Object.keys()` as argument, since the function `Object.keys()` returns a new array with
all properties in the array `arr`, [ '-3', 'foo' ], which is a non-empty array is what is output.
In this case, arr is not empty.

This example demonstrates that arrays are objects in JavaScript, more specifically that some, but not
all properties are elements of the array.
*/

/*
Section 2
*/

let arr = [2, 4, 6];
arr.length = 5;
arr[4] = undefined
console.log(arr);              // [2, 4, 6, <1 empty item>, undefined ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2', '4']

/*
On `line 72` the global variable `arr` is initialised and assigned the array with three elements
[2, 4, 6]. On `line 73` the lenght property pertaining `arr` is assigned a new value `5`.
This action will append two empty items to `arr`. Therefore the value of these items is not set.

On `line 74` the item at `index 4` is accessed and assigned the value `undefined`. When on `line 75`
the function `console.log()` is called and passed `arr` as argument, the output is [2, 4, 6, <1 empty item>, undefined ]

On `line 76` the function `console.log()` is called and passed `arr.length` as argument, since `length` includes
all indexed elements in the array, the output is 5, which is the return value resulted from calling the
property `.length` on the array `arr`.

On `line 77` the function `console.log()` is called and passed the built-in method `Object.keys()`, since
there is no value at `arr[3]` the method `Object.keys()` will exclude it from the returned array and the
function `console.log()` will return ['0', '1', '2', '4'].

This example demonstrates that arrays are sparse in JavaScript, and the the number of elements in a array is
not necessarily the same. For example, the length of array `arr` is `5` but it has only four elements.

*/


let arr = [];
arr.length = 3;

// Is arr empty? Explain.
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // []

/*
The answer is it depends on whether or not we are including the gaps in the array.
If we are including gaps to determine whether the array `arr` is empty, then
the array is `no` arr is not empty. On calling the property `.length` on the array `arr`
the result is the number `3`, demonstrating that the array is not empty.

However, if we want no exclude empty items and only include properties that have a value set, then
the answer is 'yes', the array `arr` is empty.

*/