/*
Write a function that takes a string as an argument, and returns
that string with a staggered capitalization scheme. Every other character,
starting from the first, should be capitalized and should be followed by
a lowercase or non-alphabetic character. Non-alphabetic characters should
not be changed, but should be counted as characters for determining when to
switch between upper and lower case.

loop through each char in the string, evaluate if idx is even, if yes
evaluate if char is a alpha character, if yes Upcase it, else return it as is
do same for char at odd idx but lower the case if char is alphabetic
return string with the swapped chars
*/

function isAnAlphabet(char) {
  return (/[a-z]/gi).test(char);
}

function staggeredCase(phrase) {
  return phrase.split('').reduce((acc, curr, idx) => {
    if (idx % 2 === 0) {
      return isAnAlphabet(curr) ? acc + curr.toUpperCase() : acc + curr;
    } else {
      return isAnAlphabet(curr) ? acc + curr.toLowerCase() : acc + curr;
    }
  }, '');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");                     // true
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 NuMbErS");    // true