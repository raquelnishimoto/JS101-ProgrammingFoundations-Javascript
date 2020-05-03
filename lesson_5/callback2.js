/* eslint-disable max-len */
// give detailed break down

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});


/*
| action                      | performed on          | side effect  | return value                                  | is return value ever used?    |
| variable declaration (myArr)| n/a  | none         | undefined (return value of forEach())         | no, but shown in the terminal |
| method call (eachFor)       | outer array           | none         | undefined  | yes, value is assigned to myArr |
| callback execution          | each sub array        | none         | return value of method call map               | no |
| method call (map)           | each element of the inner array | none | [undefined, undefined] for each callback execution  | yes, returned by the outer callback|
| callback execution (num)    | each element in the sub array | none | explicity returns undefined from function call console.log and implicitly returns undefined when there is no return value for a specific element | yes, used by map |
| function call (console.log) | only on elements of type integer larger than 5 | yes, output the number and return undefined | undefined | yes, by map |

this block of code prints out elements of type integer that are larger than 5 => 18 7 12
it returns undefined
*/