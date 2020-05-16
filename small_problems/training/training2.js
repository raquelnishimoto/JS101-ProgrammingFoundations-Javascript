/*
get all the combination of characters in the string
offset idx 0 and increase idx + 1 up to the length of the string
loop through the substrings and compare each length against a MAX value
return the MAX value
*/


//Find the length of the longest substring in the given string that is the same in reverse.

//As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

//If the length of the input string is 0, return value must be 0.

//Example:
//"a" -> 1
//"aab" -> 2
//"abcde" -> 1
//"zzbaabcd" -> 4
//"" -> 0

function getSubstrings(string) {
  let subStrings = [];

  for (let idx = 0; idx < string.length; idx++) {
    for (let innerIdx = idx + 1; innerIdx <= string.length; innerIdx++) {
      subStrings.push(string.slice(idx, innerIdx));
    }
  }
  return subStrings;
}

function getPalindromes(list) {
  return list.filter(sequence => sequence === sequence.split('').reverse().join(''));
}

let longestPalindrome = (sequence) => {

  let subStrings = getSubstrings(sequence);
  let palindromes = getPalindromes(subStrings);
  let longestSize = 0;

  palindromes.forEach(seq => {
    if (seq.length > longestSize) {
      longestSize = seq.length;
    }
  });
  return longestSize;
};

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9