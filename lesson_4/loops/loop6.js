/*
write a for loop that loops over the elements of the array cities and
logs the length of each string to the console. If the element is null,
skip forward to the next iteration without logging anything to the console.
*/

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let idx = 0; idx < cities.length; idx++) {
  if (cities[idx] === null) continue;

  console.log(cities[idx].length);
}