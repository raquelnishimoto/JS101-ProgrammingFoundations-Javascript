/*
Write a function that takes a year as input and returns the century.
The return value should be a string that begins with the century number,
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
*/


function findCentury(number) {
  return Math.ceil(number / 100);
}

function century(number) {
  let century = findCentury(number);

  if (century === 11 || century === 12 || century === 13) {
    return century + 'th';
  } else {
    switch (String(century % 100).slice(-1)) {
      case '1':
        return century + 'st';
      case '2':
        return century + 'nd';
      case '3':
        return century + 'rd';
      default:
        return century + 'th';
    }
  }
}

// exception end with th
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(1227));        // "13th"

console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(10103));       // "102nd"
console.log(century(11201));       // "113th"