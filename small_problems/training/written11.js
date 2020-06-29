let myArray = [];
myArray.length = 3;

// is this array empty?
/*
The answer to this question is it depends. The global variable `myArray` is initialised
on `line 1` and assigned the empty array `[]`. Then on `line 2` the value of `myArray`'s property
is reassigned a new value `3`. This reassignment increases the length of the array and adds three empty
elements or ommited elements to `myArray`. If we are concerned about the number of gaps as well as
elements in the array, then we can say that `myArray` is not empty.
However, if we are interested in the `properties` of the array - both elements and non elements, then
we can say that `myArray` is empty - for example, `Object.keys(myArray)` return value is `0` indicating that
the array is empty.

This example demonstrates that arrays can be `sparse` in JavaScript and that to determine
whether or not an array is empty we have to firstly understand what we are interested in. If
our focus is on the number of gaps or elements in an array then we can use the property `lenght`
to determine that. However, if we are interested only in the properties and elements in the array
we need to use the array methods such as `Object.keys()`.

*/

let anotherArr = [];
anotherArr[-3] = 'bla';

// is this array empty?

> const MyArray = [1, 2, 3]
> MyArray[1] = 5
> MyArray
= [1, 5, 3]

> MyArray = [4, 5, 6] // Uncaught TypeError: Assignment to constant variable.


> let arr = []
> arr.length = 3
> arr
> arr[0]
> arr.filter(element => element === undefined)
> arr.forEach(element => console.log(element))
> arr[1] = 3
> arr
> arr.length
> arr.forEach(element => console.log(element))
> Object.keys(arr)



> [1, 2, 3] === [1, 2, 3]
// what does it return, why
> let a = [1, 2, 3]
> let b = a
> a === b
//what does it return, why