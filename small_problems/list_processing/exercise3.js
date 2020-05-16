/*
Write a function that takes two array arguments, each containing
a list of numbers, and returns a new array containing the products
of all combinations of number pairs that exist between the two arrays.
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

/*
loop through the first array, multiplying each element by
each value in the second list
push the product of this operation to a new array
return this array sorted
*/

let multiply = (num1, num2) => num1 * num2;


function multiplyAllPairs(array1, array2) {

  let product = [];

  array1.forEach(numOne => {
    array2.forEach(numTwo => {
      product.push(multiply(numOne, numTwo));
    });
  });

  return product.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
