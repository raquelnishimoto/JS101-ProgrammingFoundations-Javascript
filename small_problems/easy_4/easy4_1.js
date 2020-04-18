/*
Build a program that randomly generates Teddy's age,
and logs it to the console. Have the age be a random
number between 20 and 120 (inclusive).
*/


function randomAge(max, min) {
  if (max < min) {
    let upperNum = max;
    let lowerNum = min;

    min = upperNum;
    max = lowerNum;
  }
  let randomNum = (Math.random() * (max - min + 1)) + min;
  return Math.floor(randomNum);
}

console.log(`Teddy is ${randomAge(120, 20)} years old!`);
console.log(`Teddy is ${randomAge(20, 120)} years old!`);