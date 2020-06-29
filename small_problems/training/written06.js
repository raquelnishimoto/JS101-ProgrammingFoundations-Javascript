> 'foo' + 'bar'
= 'foobar'

/*
The operator `+` concatenates the string 'foo' to the string 'bar`
The return value of this operation is `foobar`.
*/

> '5' - 3
= 2

/*
Any other arithimetic operations that do not use operand `+` such as `-` will implicitly coerce any other operands to a `Number` type.
The string `5` on `line 9` will be implicitly coerced to a Number type, since the arithimetic operation `5 - 3 = 2` `2` is what is output.
*/

> 0 / 0
/*
The operation `0 / 0` is an invalid operation. Javascript does not throw an error. It instead returns `NaN` which is a Number data type.
*/

> 'hello' / 20
/*
The operation on `line 22` returns `NaN` which is a `Number` data type, since one of the operands, the string `hello` cannot be converted to a
`Number` data type.
This example demostrates that JavaScript tries to implicitly convert the operands to a `Number` type when possible, when the operand cannot
be converted to a number will returns `NaN` (not a number).
*/

> Number('1')
= 1

> Number('foo')
= NaN

/*
The function `Number` on `line 30` is called and passed the string `1` as argument and returns
a number if the string contains only a valid number.
The function `Number` on `line 33` is called and passed the string `foo` as argument, since
`foo` cannot be converted to a valid number, the function returns `NaN`.

This example demostrates explicit coersion in JavaScrip, more specifically that in explicit coersion
the function `Number` takes a string as an argument and tries to convert it to a number when possible.
*/


