let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};


let producePairs = Object.entries(produce);

let selection = producePairs.filter((pair) => {
  let [key, value] = pair;
  return value === 'Vegetable';
});

console.log(selection);