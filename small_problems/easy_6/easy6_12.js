/* eslint-disable max-lines-per-function */
/*
Write a function that takes a string as argument, and returns true
if all parentheses in the string are properly balanced, false otherwise.
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
*/

// loop through opening parent
// test if following chars include a closing parent, if not return false
// if found save that idx number and repeat process from this idx on

function isBalanced(string) {
  let keepCount = 0;

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      keepCount += 1;
    } else if (string[idx] === ")") {
      keepCount -= 1;
    }
    if (keepCount < 0) return false;
  }
  return keepCount === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);