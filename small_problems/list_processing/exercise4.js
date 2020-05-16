/*
Write a function that takes a string argument,
and returns a list of all substrings that start
from the beginning of the string, ordered from shortest to longest.
*/

/*
get all substrings from the string
sort by substring length
*/

function getSubstrings(str) {
  let substrings = [];

  for (let idx = 0; idx < str.length; idx++) {
    substrings.push(str.slice(0, idx + 1));
  }
  return substrings;
}

function substringsAtStart(str) {
  let subStrings = getSubstrings(str);
  let sortedByLength = subStrings.sort((a, b) => a.length - b.length);

  return sortedByLength;
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]