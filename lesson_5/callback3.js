// What is the output and the return value

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

/*
online 3 map method is being called on a nested array.
each sub array is passed to the callback.
In the callback map method is called on the sub array and
each element of this sub array is passed to the inner callback
where the element of type integer is multiplied by 2.
The result of this operation is then returned to the inner map method,
which returns a new array e.g. [2, 4] [6, 8] to the outer map,
which returns a new array with the two elements transformed [[2, 4], [6, 8]]

this code outputs nothing
and returns [[2, 4], [6, 8]]

*/