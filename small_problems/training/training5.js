// console.log(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"].map(string => string.length));
// console.log(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"].map(string => string.length));
// console.log(["zone", "abigail", "theta", "form", "libe", "zas"].map(string => string.length));

/*
get the longest string in the array
if idx of longest array is larger than array.length
slice strings on the left
else slice strings on the right
*/


function longestConsec(array, qty) {
  if (array.length === 0 || qty > array.length || qty <= 0) return '';

  let subString = array.slice(0, qty);
  let longestString = subString.join('');

  for (let idx = 0; idx < array.length; idx++) {
    subString = array.slice(idx, idx + qty).join('');
    if (longestString.length < subString.length) {
      longestString = subString;
    }
  }
  return longestString;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

console.log(longestConsec(["ABCD", "AB", "A", "ABCD", "ABC", "A", "ABCDE"], 2));

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));