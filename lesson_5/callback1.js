/* eslint-disable max-len */
// give detailed break down

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/*
| action                      | performed on          | side effect  | return value                                  | is return value ever used?    |
| method call (map)           | nested array          | none         | new array with transformed elements => [1, 3] | no, but showed in the terminal|
| callback execution          | each sub array        | none         | arr[0]                                        | yes, used by map to perform tranformation |
| element access [0]          | each sub array        | none         | element at idx 0 of each array                | yes, used by console.log() to print out the value and by the exclicit return statement on line 5|
| function call (console.log) | each element at idx 0 | outputs the integer value at idx 0 | undefined | no |

this block of code prints out => 1 3
and returns [1, 3]
*/