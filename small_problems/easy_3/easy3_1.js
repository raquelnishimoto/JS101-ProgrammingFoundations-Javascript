/*
Write a function that takes a string argument and returns a new string
that contains the value of the original string with all consecutive
duplicate characters collapsed into a single character.
*/
// Option 1
function crunchOne(sentence) {
  let result = '';
  let index = 0;

  for (let idx = 0; idx < sentence.length; idx++) {
    if (result[index - 1] !== sentence[idx]) {
      result += sentence[idx];
      index += 1;
    }
  }
  return result;
}

//Option 2
function crunch(phrase) {
  let result = '';

  for (let idx = 0; idx < phrase.length; idx++) {
    if (phrase[idx] !== phrase[idx + 1]) {
      result += phrase[idx];
    }
  }
  return result;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""