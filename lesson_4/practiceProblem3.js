// What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

/*
In this case, the single line fat arrow notation allows
the removal of brackets and return is implicitly inserted.

map will return a new array with the return value of the
transformation num * num, replacing each element in the
caller => [1, 4, 9]

*/