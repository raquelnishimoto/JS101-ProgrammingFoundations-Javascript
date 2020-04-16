// In this example, select the key-value pairs where the value is 'Fruit'.

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(options) {
  let fruits = {};
  for (let prop in options) {
    if (produce[prop] === 'Fruit') {
      fruits[prop] = 'Fruit';
    }
  }
  return fruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }