/*
* Method calls can take expressions as arguments.
* Suppose we define a function called rps as follows,
* which follows the classic rules of the rock-paper-scissors game,
* but with a slight twist: in the event of a tie,
* it awards the win to the first of the two fists.
*/

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

/*
Breaking down each call individually:
1. rps("rock", "paper") - returns "paper"
2. rps("rock", "scissors") - returns "rock"

3. rps("paper", "rock") - returns  "paper"

4. rps("paper", "rock") - returns "paper"

What is the result of the following call? console.lo() prints out "paper".
*/