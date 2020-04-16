// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let allAges = Object.values(ages);

// Option 1
let totalAges = allAges.reduce((acc, curr) => acc + curr);
console.log(totalAges);

// Option 2
let sumOfAges = 0;

allAges.forEach((age) => sumOfAges += age);

console.log(sumOfAges);