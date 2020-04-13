// show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";
let sentece = "Four score and ";

console.log(sentece + famousWords);
console.log(`${sentece}${famousWords}`);
console.log(sentece.concat(famousWords));