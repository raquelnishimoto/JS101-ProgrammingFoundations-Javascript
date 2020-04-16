/*
Loop over the elements of the array fish, logging each one.
Terminate the loop after logging the string 'Nemo'.
*/

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let idx = 0; idx < fish.length; idx++) {
  console.log(fish[idx]);

  if (fish[idx] === 'Nemo') break;
}
