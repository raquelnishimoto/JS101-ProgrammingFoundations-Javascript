// How would you sort the following array by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];

console.log(words.sort((a, b) => a.length - b.length));

let sort = words.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return 0;
  }
});

console.log(sort);
