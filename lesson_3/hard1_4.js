/*
Ben was tasked to write a simple javascript function to determine whether
an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11.
He is not familiar with regular expressions.
Alyssa supplied Ben with a function named isAnIpNumber.
It determines whether a string is a numeric string between 0 and 255 as required
for IP numbers and asked Ben to use it. Here's the code that Ben wrote:
*/

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    //mutating original object while looping
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }
  // all inputs will return true - even the invalid ones
  return true;
}

/*
Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few
things. You're not returning a false condition, and you're not handling the
case when the input string has more or less than 4 components,
e.g., 4.5.5 or 1.2.3.4.5: both those values
should be invalid." Help Ben fix his code.
*/


// Option 1 - using the method provided by Alyssa
function isDotSeparatedIpAddressRefactored(inputString) {
  let dotSeparatedWords = inputString.split(".");
  // check if input has 4 dot-separeted words
  if (dotSeparatedWords !== 4) {
    return false;
  }

  //loop through words without mutating dotSeparatedWords array
  let idx = 0;
  while (idx < dotSeparatedWords.length) {
    let word = dotSeparatedWords[idx];
    if (!isAnIpNumber(word)) {
      return false;
    }
    // increment idx
    idx += 1;
  }
  // only input that has no invalid 'word' will return true.
  return true;
}

//Option 2 - using regex
function isDotSeparatedIpAddressRefactored(inputString) {
  const pattern = /^\d+.\d+.\d+.\d+.$/;
  return pattern.test(inputString);
}

console.log(isDotSeparatedIpAddressRefactored("10.4.5.11."));
console.log(isDotSeparatedIpAddressRefactored("4.5.5"));
console.log(isDotSeparatedIpAddressRefactored("1.2.3.4.5"));