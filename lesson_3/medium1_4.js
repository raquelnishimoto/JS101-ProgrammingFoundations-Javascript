// what's there a difference between these implementations,
// other than the method she used to add an element to the buffer?


function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
/*
Yes, there is a difference.
This implementation will modify the caller 'buffer' permanetly.
The object and function behaves as they are being passed-by-reference
where a reference to the argument's actual address in memory is passed
to the function. This is because both
.push() and .shift() are destructive methods.
*/

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
/*
This implementation will NOT modify the caller 'buffer'.
Firstly, because the local variable buffer is a copy of the actual argument
Secondly, because buffer is reassigned to a new object
The object and function behaves as they are being passed-by-value
where a copy of argument's value is passed to the function.
Any modifications in the callee will not be visible to the caller.
*/