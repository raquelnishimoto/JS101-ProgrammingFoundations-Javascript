/*
* For this practice problem, write a program that creates the following output
* 10 times, with each line indented 1 space to the right of the line above it:
* The Flintstones Rock!
*/

let phrase = "The Flintstones Rock!";
let count = 1;

while (count <= 10) {
  console.log(phrase.padStart(phrase.length + count));
  count += 1;
}