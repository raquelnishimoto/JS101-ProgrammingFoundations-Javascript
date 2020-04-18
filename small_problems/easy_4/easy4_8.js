/* Write a function that takes a string consisting of zero or
more space separated words, and returns an object that shows the
number of words of different sizes.
Words consist of any sequence of non-space characters
*/

// key = word.length
// value = recurrence of words of this size

function wordSizes(string) {
  let listOfWords = string.split(' ');
  let object = {};

  listOfWords.forEach((word) => {
    if (word.length > 0) {
      if (object[word.length] > 0) {
        object[word.length] += 1;
      } else {
        object[word.length] = 1;
      }
    }
  });
  return object;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}