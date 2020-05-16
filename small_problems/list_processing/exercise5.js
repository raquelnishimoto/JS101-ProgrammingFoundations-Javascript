/*
Write a function that returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.
This means that all substrings that start at position 0 should come first,
then all substrings that start at position 1, and so on. Since multiple
substrings will occur at each position, return the substrings at a
given position from shortest to longest.

You may (and should) use the substringsAtStart function you wrote
in the previous exercise:

*/

function getSubstrings(str) {
  let subStrings = [];

  for (let idx = 0; idx < str.length; idx++) {
    subStrings.push(str.slice(0, idx + 1));
  }

  return subStrings;
}

function substringsAtStart(str) {
  let subStrings = getSubstrings(str);
  let sortedByLength = subStrings.sort((a, b) => a.length - b.length);

  return sortedByLength;
}


function getStrings(string) {
  let subStr = [];

  for (let idx = 0; idx < string.length; idx++) {
    subStr.push(string.slice(idx));
  }

  return subStr;
}

function substrings(str) {
  let result = [];
  // get each substring idx + 1 up to string.length
  let strings = getStrings(str);

  // loop through the elements in strings passing them to substringsAtStart()
  strings.forEach(str => {
    result.push(substringsAtStart(str));
  });

  return result;
}


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]