// What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length

/*
The caller (array with three elements of type string) firstly
call method .pop(), which is a destructive method and permanently mutate the
original object. It will remove the last element of the caller and
return that element that was removed.

The return value of this action is 'caterpillar' string which now calls
.length property which contains a value of 11.
*/