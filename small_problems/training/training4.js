
/*
if array.length is equal to 0 || if qty is larger than array length || qty is less than or equal to 0 return ""

sort the elements based on their length in ASC
filter only the elements that are of different length
slice qty elements in the array
return this slice as a joined string

*/


function longestConsec(array, qty) {
  if (array.length === 0 || qty > array.length || qty <= 0) return '';
  let sortedArray = array.slice().sort((a, b) => a.length - b.length);
  let uniqueLength = [];
  let result = [];


  for (let idx = sortedArray.length - 1; idx >= 0; idx--) {
    let lastLength = uniqueLength[0] || '';

    if (sortedArray[idx].length !== lastLength.length) {
      uniqueLength.unshift(sortedArray[idx]);
    }
  }
  uniqueLength.slice(-qty).forEach(string => {
    result[array.indexOf(string)] = string;
  });
  return result.join('');
}


// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true

// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));

console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));