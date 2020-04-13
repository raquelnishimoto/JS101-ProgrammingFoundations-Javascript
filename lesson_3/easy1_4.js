/*
** Using the following string, create a new string that contains all
** lowercase letters except for the first character,
** which should be capitalized. (See the example output.)
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

/*
split sentence in two: first word and rest
concatenate first word and rest of the sentence as:
identify the first word and replace charAt(0) with its uppercase equivalent
remaining items are all lower case
print out new sentence
*/

let firstWord = munstersDescription.slice(0, munstersDescription.indexOf(' '));
let secondPart = munstersDescription.slice(munstersDescription.indexOf(' '));
const FIRST_CHAR = firstWord.charAt(0);

let capitalise = firstWord.replace(FIRST_CHAR, FIRST_CHAR.toUpperCase());
console.log(`${capitalise}${secondPart.toLocaleLowerCase()}`);