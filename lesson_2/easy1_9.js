/*
** The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. 
** Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

** Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

*/

console.log(isLeapYear(2016) === true);      // true
console.log(isLeapYear(2015) === false);      // false
console.log(isLeapYear(2100) === false);      // false
console.log(isLeapYear(2400) === true);      // true
console.log(isLeapYear(240000) === true);    // true
console.log(isLeapYear(240001) === false);    // false
console.log(isLeapYear(2000) === true);      // true
console.log(isLeapYear(1900) === false);      // false
console.log(isLeapYear(1752) === true);      // true
console.log(isLeapYear(1700) === true);      // true
console.log(isLeapYear(1) === false);         // false
console.log(isLeapYear(100) === true);       // true
console.log(isLeapYear(400) === true);       // true

function isLeapYear(year) {
  if (year <= 1752) {
    return year % 4 === 0;
  } else {
    return (year % 400 === 0) || (year % 4 === 0 && !(year % 100 === 0));
  }
}