// Write a function that will take a short line of text,
// and write it to the console log within a box.

function logInBox(phrase) {
  let hyphen = '-'.repeat(phrase.length);
  let spaces = ' '.repeat(phrase.length);

  console.log('+-' + hyphen + '-+');
  console.log('| ' + spaces + ' |');
  console.log('| ' + phrase + ' |');
  console.log('| ' + spaces + ' |');
  console.log('+-' + hyphen + '-+');
}

function displaySentence(sentence, size) {

  for (let idx = 0; idx < sentence.length; idx += size) {
    let words = sentence.slice(idx, idx + size);
    let padding = ' '.repeat(size - words.length);
    console.log(`| ${sentence.slice(idx, idx + size)} ${padding}|`);
  }
}
function wrapInBox(phrase, boxSize) {
  let hyphen = '-'.repeat(boxSize);
  let spaces = ' '.repeat(boxSize);

  console.log('+-' + hyphen + '-+');
  console.log('| ' + spaces + ' |');
  displaySentence(phrase, boxSize);
  console.log('| ' + spaces + ' |');
  console.log('+-' + hyphen + '-+');
}

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

wrapInBox('To boldly go where no one has gone before.', 10);

// sliceSentence('To boldly go where no one has gone before.', 10);