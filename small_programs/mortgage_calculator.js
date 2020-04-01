/*
** Program
** Calculates monthly repayments based on three inputs from the user:
** 1. Loan amount
** 2. Annual Percentage Rate (APR) (float number - two fixed decimals)
** 3. Loan length (in months)
** Output
** print out on the terminal the following:
** onthly repayment, loan amount, total interest, total cost
*/

const readline = require('readline-sync');
const MESSAGES = require('./mortgage_calculator_messages.json');

/*
* Validate if input is a valid number.
* Invalid numbers are: NaN, '' and 0
*/
function invalidNumber(input) {
  return input.trimStart() === 0 ||
    input === '' ||
    Number(input) < 0 ||
    Number.isNaN(Number(input));
}

// This function will handle country specific monetary format
function formatNumber(num) {
  num = num.trim();
  let result = num.replace(/[^0-9]/g, '');
  if ((/[,|.]\d{2}$/).test(num)) {
    result = result.replace(/(\d{2})$/, '.$1');
  }
  return num === '' || Number(num) < 0 ? num : result;
}

//Function calculates monthly payment whether or not interest is free
let calculate = (loan, monthlyRate, loanInMonths) => {
  if (monthlyRate === 0) {
    return loan / loanInMonths;
  } else {
    return parseFloat(loan) *
      (monthlyRate /
      (1 - Math.pow((1 + monthlyRate), (-parseFloat(loanInMonths)))));
  }
};

function prompt(message) {
  console.log(`=> ${message}`);
}

console.log(MESSAGES.welcome_message);

while (true) {
  console.log(MESSAGES.intro);
  prompt(MESSAGES.enter_loan_amount);
  let loanAtm = formatNumber(readline.question());

  while (invalidNumber(loanAtm)) {
    prompt(MESSAGES.invalid_number);
    loanAtm = formatNumber(readline.question());
  }

  prompt(MESSAGES.enter_year_percentage_rate);
  let annualPercentRate = readline.question();

  while (invalidNumber(annualPercentRate)) {
    prompt(MESSAGES.invalid_number);
    annualPercentRate = readline.question();
  }

  prompt(MESSAGES.enter_loan_length_in_months);
  let loanLenInMonths = readline.question();

  while (invalidNumber(loanLenInMonths)) {
    prompt(MESSAGES.invalid_number);
    loanLenInMonths = readline.question();
  }
  //Coarce loan amount from typeof String to Number
  loanAtm = Number(loanAtm);
  let monthlyPercentRate = parseFloat(((annualPercentRate / 100) / 12));
  let monthlyPayment = calculate(loanAtm, monthlyPercentRate, loanLenInMonths);

  let totalCost = monthlyPayment * loanLenInMonths;
  let totalInterest = totalCost - loanAtm;

  prompt(`Your monthly mortgage repayments is $${monthlyPayment.toFixed(2)}`);
  prompt(`Amount amount: $${loanAtm}\nTotal Interest: $${totalInterest.toFixed(2)}\nTotal Cost: $${totalCost.toFixed(2)}`);

  //Promt user to continue or exit program
  prompt(MESSAGES.continue_program_prompt);
  let exitProgram = readline.question();

  //Any value that is not y, Y, Yes, YES breaks the loop (enter key equates '')
  if (exitProgram === '' || exitProgram[0].toLowerCase() !== 'y') {
    break;
  }
}

prompt(MESSAGES.exit_message);