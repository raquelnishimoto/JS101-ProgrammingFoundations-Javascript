/*
Write a function that takes a positive integer, n, as an argument,
and logs a right triangle whose sides each have n stars.
*/


function triangle(size) {
  const STAR = '*';
  const SPACE = ' ';

  for (let idx = 0; idx <= size; idx++ ) {
    let spaces = `${SPACE.repeat(size - idx)}`;
    let stars = `${STAR.repeat(idx)}`;
    console.log(`${spaces}${stars}`);
  }

}

triangle(5);
triangle(9);