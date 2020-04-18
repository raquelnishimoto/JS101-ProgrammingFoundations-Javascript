/*
Modify the wordSizes function from the previous exercise to exclude
non-letters when determining word size.
For instance, the word size of "it's" is 3, not 4.
*/

function getListOfWordAlpha(string) {
  return string.replace(/[^A-Z\s]/gi, '').split(' ');
}

function wordSizes(sentece) {
  let listOfWords = getListOfWordAlpha(sentece);
  let object = {};

  for (let idx = 0; idx < listOfWords.length; idx++) {
    let wordLength = listOfWords[idx].length;

    if (wordLength.length === 0 ) continue;

    if (!object[wordLength]) {
      object[wordLength] = 0;
    }
    object[wordLength] += 1;
  }
  return object;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}