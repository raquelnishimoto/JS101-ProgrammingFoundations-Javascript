/*
Suppose this is an array that represents the scores for three players in a game
of three rounds. We want to sort the players in ascending order of their
total score.
let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
=> [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];
*/

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

function sum(array) {
  return array.reduce((acc, curr) => acc + curr);
}

let sorting = scores.sort((a, b) => {
  if (sum(a) < sum(b)) {
    return -1;
  } else if (sum(a) > sum(b)) {
    return 1;
  } else {
    return 0;
  }
});

let sorting_ = scores.sort((a, b) => sum(a) - sum(b));

console.log(sorting[0]);
console.log(sorting[1]);
console.log(sorting[2]);

console.log(sorting_[0]);
console.log(sorting_[1]);
console.log(sorting_[2]);