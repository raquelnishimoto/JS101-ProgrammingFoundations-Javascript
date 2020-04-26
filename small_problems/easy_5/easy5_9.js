/*
Write a function that counts the number of occurrences of each element
in a given array. Once counted, log each element alongside the number
of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
*/

function generateItemCount(collection) {
  let itemCount = {};

  collection.forEach((item) => {
    item = item.toLowerCase();
    if (itemCount[item]) {
      itemCount[item] += 1;
    } else {
      itemCount[item] = 1;
    }
  });
  return itemCount;
}

function countOccurrences(collection) {
  let itemCount = generateItemCount(collection);

  for (let item in itemCount) {
    console.log(`${item} => ${itemCount[item]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck', 'suv', 'suv'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2