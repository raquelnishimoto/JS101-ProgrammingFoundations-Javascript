let x;

if (x = 5) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

/*
The global variable `x` is initialised on `line 1`, since there is no value assigned to it, its
return value is `undefined`.
within the conditional `if` statement the global variable is assigned to the number `5`, since this
expression evaluates to true the following block of code on `lines 3-5` will be executed.
Therefore the function `console.log()` on `line 4` outputs "how can this be true?".

This example demonstrates that everything that is falsy - not `0`, `undefined`, empty '', Null, false - will
be truthy, more spectifically that the expression where the variable is assigned to a value on `line 4`
evaluates to true.
*/


function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
The function `barCodeScanner()` is called on `line 35` and passed the string `113` as argument.
On the execution of the function `barCodeScanner()` which is defined on `line 22` with one parameter,
the string `113` is assigned to the local variable serial.

Within the `switch` statement which creates a block from `lines 23-32` once the case statement `on line 26`
evalutes to true all the other following code from `lines 27-32` are executed. This is because there is
no `break` statement between the cases to prevent that the other cases are executed.
*/


function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);

/*
The function `isArrayEmpty()` is called on `line 52` and passed an empty array as argument.
On the execution of function `isArrayEmpty()` which is defined on `line 48` with one parameter,
the local variable `arr` is assigned to the empty array.

Within the `if` condition on `lines 49-51` `arr` is truthy, since empty arrays are truthy or evaluate to true in JavaScript.
Then the function `console.log()` with argument 'Not Empty' is executed and 'Not empty' is output.
*/