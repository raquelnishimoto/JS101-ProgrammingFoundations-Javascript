// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?
bar(foo());

/*
The program will execute foo() first.
foo() function has a default parameter that is not used anywhere
it returns a string of value 'yes', which is passed to
bar() function as an argument.
when bar() function is executed param is assigned to value "yes"
on line 8, param === "no" evaluates to false and therefore
returns "no" to the caller.
Answer is function invocation returns "no".
*/