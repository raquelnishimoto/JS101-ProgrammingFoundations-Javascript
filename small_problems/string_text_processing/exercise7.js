/*
Modify the function from the previous exercise so it ignores non-alphabetic
characters when determining whether it should uppercase or lowercase each
letter. The non-alphabetic characters should still be included in the
return value; they just don't count when toggling the desired case.

keep count of the number of alpha chars, loop throug each char evaluate count
if even upCase and if odd lowCase
*/

let isAnAlphabet = char => (/[a-z]/gi).test(char);

function staggeredCase_(sentence) {
  let alphaCount = -1;

  return sentence.split('').map(char => {
    if (isAnAlphabet(char)) {
      alphaCount += 1;
      return alphaCount % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

// Further exploration:
/*
Modify this function so the caller can determine whether non-alphabetic
characters should be counted when determining the upper/lowercase state.
*/

function getStaggered(string) {
  let toggle = true;

  return string.split('').map(char => {
    if (isAnAlphabet(char)) {
      if (toggle) {
        toggle = false;
        return char.toUpperCase();
      } else {
        toggle = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

function getByIdxStaggered(sentence) {
  let toggle = true;

  return sentence.split('').map(char => {
    if (toggle) {
      toggle = false;
      return char.toUpperCase();
    } else {
      toggle = true;
      return char.toLowerCase();
    }
  }).join('');
}

function staggeredCase(sentence, alphaCharsOnly = true) {

  let alphaStaggered = getStaggered(sentence);
  let idxStaggered = getByIdxStaggered(sentence);

  return alphaCharsOnly ? alphaStaggered : idxStaggered;
}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");

console.log(staggeredCase('ALL_CAPS', false) === "AlL_CaPs");                     // true
console.log(staggeredCase('ignore 77 the 444 numbers', false) === "IgNoRe 77 ThE 444 NuMbErS");    // true