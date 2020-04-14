// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/*
newAnswer is initialised on line 9 and assigned the return value
of calling messWithIt() passing answer as an argument.
In the function, 42 is assigned to someNumber and summed to 8
On line 6, the program returns 50 to the caller, newAnswer.

On line 11 the value of answer is unaltered and still 42.
This is because numbers are immutable data types and cannot
be modifed by the callee.
Console.log() prints out 34, which is the result of the operation 42 - 8;
*/