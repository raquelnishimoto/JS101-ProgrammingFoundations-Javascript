/*
Write a function that takes a string and returns an object containing
three properties: one representing the number of characters in the
string that are lowercase letters, one representing the number of
characters that are uppercase letters, and one representing the
number of characters that are neither.

filter all chars in a string that are lowercase
and assing this as a value to 'lowercase' key
do the same with uppercase and neither chars, including spaces
*/

function letterCaseCount(str) {
  let caseCount = {};

  caseCount['lowercase'] = str.match(/[a-z]/g) || 0;
  caseCount['uppercase'] = str.match(/[A-Z]/g) || 0;
  caseCount['neither'] = str.match(/[^a-z]/gi) || 0;

  for (let prop in caseCount) {
    if (caseCount[prop]) {
      caseCount[prop] = caseCount[prop].length;
    }
  }

  return caseCount;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }