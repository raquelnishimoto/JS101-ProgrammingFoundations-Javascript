// What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

/*
the method filter is called on an array of numbers
the filter()'s callback function will evaluate the
callback's truthy value and based on that determine
if the element should be selected or ignored.

since 'hi' evaluates to a truthy value in each iteration
all the elements are selected.

filter will return a new array with a copy of all the elements [1, 2, 3].
*/