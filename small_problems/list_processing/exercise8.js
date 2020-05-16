/*
Write a function that takes a grocery list (a two-dimensional array)
with each element containing a fruit and a quantity,
and returns a one-dimensional array of fruits, in which each fruit
appears a number of times equal to its quantity.

loop though the elements and repeat element at idx[0] times at idx[1]
add a space after each word, split the string at each space
*/

function buyFruit(listOfFruitCount) {
  let repetition = '';

  listOfFruitCount.forEach(fruitCount => {
    let [fruit, count] = fruitCount;
    repetition += `${fruit} `.repeat(count);
  });

  return repetition.trim().split(' ');
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]