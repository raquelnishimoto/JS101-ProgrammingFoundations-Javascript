// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
* On line 3 arr1 is initialised and assigned a value of type Object
* with 5 elemement
* Note: objects are mutable and can behave as pass-by-value or pass-by-reference
* Online 4, arr2 is initialised and assigned to the return value of arr1.slice()
* .slice() returns a shallow copy of arr1
* (they still point to the same space in memory).
* arr2[0] returns the object at index 0 - { first: "value1" }
* arr2[0].first = 42 - will reassign property "first:" to value 42
* because both objects point to the same address in memory,
* changes in arr2 will be visible to arr1.
* on line 6, arr1 will return the modified value:
* [{ first: 42 }, { second: "value2" }, 3, 4, 5]
*/
