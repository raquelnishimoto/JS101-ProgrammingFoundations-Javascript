// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/*
According to MDN documentation, the 'return' statement is affected by
"automatic semicolon insertion (ASI)". No line terminator is allowed
between the 'return' keyword and the expression.
This means that the expression from second() from line 11-13
will not be executed and that a semicolon will be inserted on line 10.
As a consequence, second() returns 'undefined', differently from first(),
which returns the object { prop1: "hi there"}
*/