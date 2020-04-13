/* Determine whether the following object of people and their age
** contains an entry for 'Spot'
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages['Spot'] !== undefined);
console.log(ages.hasOwnProperty('Spot'));
console.log(ages.hasOwnProperty('Lily'));

/*
** One way of identifying wether a property exists in an object
** is verify if the value from this property is undefined.

** Another way is to use the built in method .hasOwnProperty()
** which returns a boolean value has the specified property
*/