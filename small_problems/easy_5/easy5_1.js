/*
Write a function that takes a floating point number representing an angle
between 0 and 360 degrees, and returns a string representing that angle
in degrees, minutes, and seconds. You should use a degree symbol (˚) to
represent degrees, a single quote (') to represent minutes, and a double
quote (") to represent seconds. There are 60 minutes in a degree,
and 60 seconds in a minute.
*/


/*
degrees - (angle % 360) round to the nearest lower int
minutes - ((angle % degree) * 60) - round to the nearest lower int
seconds - (((angle % degree) * 60) % minutes))) * 60

convert numbers to strings
pad minutes and seconds string represention with 0 - repeat (2 - length) times 0
concatenate first string + (˚) + second string + (') + third number + (")
*/

function dms(angle) {
  let degrees = Math.floor(angle % 360);

  while (degrees < 0) {
    degrees += 360;
  }

  let minutes = 0;
  if (degrees && angle > 0) {
    minutes = Math.floor((angle % degrees) * 60);
  }

  let seconds = 0;
  if (minutes && angle > 0) {
    seconds = Math.floor((((angle % degrees) * 60) % minutes) * 60);
  }

  degrees = String(degrees);
  minutes = String(minutes);
  seconds = String(seconds);

  minutes = '0'.repeat(2 - minutes.length) + minutes;
  seconds = '0'.repeat(2 - seconds.length) + seconds;

  return `${degrees}˚${minutes}'${seconds}"`;

}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"