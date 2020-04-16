// What is the callback's return value in the following code?
// Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

/*
The return value of the reassignment num = num * 2 is 1, 4, 9
respectively. Array.prototype.every() looks at the truthiness of the
return value and only returns true if every elements evaluates to a
truthy value. In this case all elements evaluate to a number -
different from 0 - which evaluates to a truthy value.
Therefore, every() returns true.
*/