// Using the forEach method, write some code to output all vowels
// from the strings in the arrays. Don't use a for or while loop.

/*
loop through each element in obj, then for each of these elements
loop through the string elements, then
loop through the chars, filtering all vowels
what the output is like? arry with string of these vowels
*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let pattern = /[aeiou]/gi;

Object.values(obj).forEach(array => {
  array.forEach(word => {
    word.match(pattern).forEach(vowel => {
      console.log(vowel);
    });
  });
}
);
