// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// Option 1
let listOfAges = Object.values(ages);
let minimumAge = Math.min(...listOfAges);

console.log(minimumAge);

// Option 2
let allAges = Object.values(ages);
let minAge = allAges[0];

allAges.forEach((age) => {
  if (age < minAge) {
    minAge = age;
  }
});
console.log(minAge);