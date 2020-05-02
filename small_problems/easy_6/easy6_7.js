/*
Write a function that takes a string argument consisting of a first name,
a space, and a last name, and returns a new string consisting of the last
name, a comma, a space, and the first name.
*/

function swapName(fullName) {
  let [firstName, lastName] = fullName.split(' ').map((name) => name);
  return `${lastName}, ${firstName}`;

}

function swapName_(fullName) {
  let pattern = /(\w+)\s(\w+)/;
  return fullName.replace(pattern, '$2, $1');
}

function swapName__(fullName) {
  let namesSplit = fullName.split(' ');
  let lastName = namesSplit[namesSplit.length - 1];
  let preNames = namesSplit.slice(0, namesSplit.length - 1);

  return `${lastName}, ${preNames.join(' ')}`;
}


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

console.log(swapName_('Joe Roberts'));    // "Roberts, Joe"

console.log(swapName__('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"