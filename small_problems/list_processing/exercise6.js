// Write a function that returns a list of all
// palindromic substrings of a string.

/*
get all the substrings from a string
get all the substrings that are palindromes
return the list of palindromes as an array
*/

function getSubstrings(str) {
  let subStrings = [];

  for (let idx = 0; idx < str.length; idx++) {
    for (let innerIdx = idx + 2; innerIdx <= str.length; innerIdx++) {
      subStrings.push(str.slice(idx, innerIdx));
    }
  }
  return subStrings;
}

function getPalindromes(list) {
  return list.filter(str => str === str.split('').reverse().join(''));
}

function palindromes(string) {

  let substrings = getSubstrings(string);
  let listOfPalindromes = getPalindromes(substrings);

  return listOfPalindromes;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));