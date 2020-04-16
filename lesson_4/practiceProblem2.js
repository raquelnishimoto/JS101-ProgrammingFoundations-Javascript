// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

/*
the method map() will return a new array with the callback's return value
in this case the callback function has multi-lines is no explicit return
value. Javascript will automatically insert a semi colon on three and return
undefined in each eteration.

map will return a new array with 'undefined' value in place of each element
that underwent transformation => [undefined, undefined, undefined];
*/