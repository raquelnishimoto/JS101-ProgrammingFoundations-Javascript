// Given this previously seen family object, print the
// name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let prop in munsters) {
  console.log(`${prop[0].toUpperCase() + prop.slice(1)} is a ${munsters[prop].age}-year-old ${munsters[prop].gender}.`);
}
