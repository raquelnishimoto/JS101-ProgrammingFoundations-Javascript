/*
Given the following data structure write some code to return an array
containing the colors of the fruits and the sizes of the vegetables.
The sizes should be uppercase, and the colors should be capitalized.

initialise new array
loop through the values of the object
for each 'color' value return the map of each element captilised
for each 'size' value upcase the string
add these two values to new array
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


function getFruitColorsAndVeggieSize (input) {
  let result = [];
  Object.values(input).forEach(value => {
    if (value['type'] === 'fruit') {
      let fruitColors = value.colors.map(color => {
        return color[0].toUpperCase() + color.slice(1);
      });
      result.push(fruitColors);
    } else {
      let veggieSize = value.size.toUpperCase();
      result.push(veggieSize);
    }
  });
  return result;
}

console.log(getFruitColorsAndVeggieSize(obj));

