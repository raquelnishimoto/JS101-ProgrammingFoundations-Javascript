/*
Given the following data structure, write some code that returns an object
where the key is the first item in each subarray, and the value is the second
*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let object = {};

arr.forEach(subArray => {
  object[subArray[0]] = subArray[1];
});

console.log(object);