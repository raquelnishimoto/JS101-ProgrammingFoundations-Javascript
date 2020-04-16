// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
The return value of this code is a new array with
two elements => [undefined, 'bear]
.map() returns a new array with each value replaced by
the callback's return value. In the first iteration
the element 'ant' does not evaluate to a truthy value
and does not executes the block of code 4-6. Because there is
no explict return value for this case, undefined will be
returned.
In the second iteration, element of type string 'bear'
will evaluate to a truthy value in the expression
elem.length > 3 and execute the block 4-6. In this block
there is an explicit return value num. This iteration
will return a copy of the element itself.
*/