// The following function unnecessarily uses two return statements to
// return boolean values. How can you eliminate the unnecessary duplication?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// Option 1
function isColorValid(color) {
  return (color === "blue" || color === "green");
}

// Option 2
let isColorValid = (color) => color === "blue" || color === "green";

