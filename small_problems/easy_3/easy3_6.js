/*
Madlibs is a simple game where you create a story template with
"blanks" for words. You, or another player, then construct a list
of words and place them into the story, creating an often silly
or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb,
an adverb, and an adjective, and injects them into a story that you create.
*/

const readline = require('readline-sync');


function display(message) {
  console.log(`=> ${message}`);
}

display("Enter a noun: ");
let noun = readline.question();


display("Enter a verb: ");
let verb = readline.question();


display("Enter an adjective: ");
let adjective = readline.question();


display("Enter an adverb: ");
let adverb = readline.question();

display(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);