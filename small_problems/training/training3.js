/*
// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.

// Only lower case letters will be used (a-z). No punctuation or digits will be included.


create an object from str1 with each char and its count
loop through each char in str2 and if there is no value found in object str1[char] return false
else substract str1[char] and check if count is larger than 0 if not return false
*/

function getCharCount(string) {
  let object = {};

  string.split('').forEach(char => {
    if (!object[char]) {
      object[char] = 0;
    }
    object[char] += 1;
  });
  return object;
}

function scramble(str1, str2) {
  let charCount = getCharCount(str1);

  for (let idx = 0; idx < str2.length; idx++) {
    let char = str2[idx];
    if (charCount[char] <= 0) return false;

    if (charCount[char] > 0) {
      charCount[char] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('rkqodlw','world') === true); //true
console.log(scramble('cedewaraaossoqqyt','codewars') === true); //true
console.log(scramble('katas','steak') === false); //true
console.log(scramble('scriptjava','javascript') === true); //true
console.log(scramble('scriptingjava','javascript') === true); //true