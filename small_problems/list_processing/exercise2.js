/* Write a function that takes an array of integers between 0 and 19,
and returns an array of those integers sorted based on the English word
for each number:

map the key integer and value word of numbers from 0 to 19
retrive all words based on the list of integers, sort them,
and get the keys based on the list of words. Finally, convert
these numbers (strings) to integers.
*/

function alphabeticNumberSort(listOfNum) {
  const NUM_TO_WORDS = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',
    12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
    17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
  };

  let listOfWords = listOfNum.map(integer => {
    return NUM_TO_WORDS[`${integer}`];
  });

  let sortedNum = listOfWords.sort().map(word => {
    for (let prop in NUM_TO_WORDS) {
      if (NUM_TO_WORDS[prop] === word) return prop;
    }
    return -1;
  });

  return sortedNum.map(string => Number(string));
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));