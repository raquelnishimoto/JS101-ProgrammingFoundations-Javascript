/*
Write a function that takes an array of numbers, and
returns the sum of the sums of each leading subsequence for that array.

get the combination of all numbers
loop through the numbers, summing them
return this sum
*/

function getCombinationNum(list) {
  let groupOfNums = [];

  for (let idx = 0; idx < list.length; idx++) {
    groupOfNums.push(...list.slice(0, idx + 1));
  }
  return groupOfNums;
}

function sumOfSums(listOfNums) {
  let numSums = getCombinationNum(listOfNums);

  return numSums.reduce((acc, curr) => acc + curr);

}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35