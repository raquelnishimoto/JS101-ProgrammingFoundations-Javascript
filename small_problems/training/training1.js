/*
loop through the string
captalise char at idx 0 and append the same char x num of times (index times)
push this substring to an array
return the array joined by '-'
*/

// Given the string of chars a..z A..Z do as in the sample cases

function repeat(count, value) {
  let loop = 0;
  let str = '';
  while (loop < count) {
    str += value;
    loop += 1;
  }
  return str;
}

function accum(string) {
  let array = string.split('');
  let result = [];

  for (let idx = 0; idx < array.length; idx++) {
    let subString = [];
    let currChar = array[idx];
    subString.push(currChar.toUpperCase());

    let repeatChar = repeat(idx, currChar);
    subString.push(repeatChar);
    result.push(subString.join(''));
  }
  return result.join('-');
}

console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"