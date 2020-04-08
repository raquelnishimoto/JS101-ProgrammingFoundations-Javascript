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
const MESSAGES = require('./resources/mortgage_calculator_messages.json');

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
const calculate = (loan, monthlyRate, loanInMonths) => {
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

/*
* This function prompts user to provide input until
* input is a valid number. Once number is valid it returns value to its caller.
*/
function getUserInput(userInput) {
  prompt(MESSAGES[`${userInput}`]);
  let input = formatNumber(readline.question());

  if (userInput === "year_percentage_rate") {
    while (invalidNumber(input)) {
      prompt(MESSAGES.invalid_number);
      input = formatNumber(readline.question());
    }
  } else {
    while (invalidNumber(input) || Number(input) === 0) {
      prompt(MESSAGES.positive_number);
      input = formatNumber(readline.question());
    }
  }
  return input;
}

function displayPaymentInfo(payment, loan, interest, cost) {
  prompt(`Your monthly mortgage repayments is $${payment.toFixed(2)}`);
  prompt(`Loan amount: $${loan}\nTotal Interest: $${interest.toFixed(2)}\nTotal Cost: $${cost.toFixed(2)}`);
}

console.log(MESSAGES.welcome_message);

while (true) {
  let loanAtm = getUserInput("loan_amount");
  let annualPercentRate = getUserInput("year_percentage_rate");
  let loanLenInMonths = getUserInput("loan_length_in_months");

  //Coarce loan amount from typeof String to Number
  loanAtm = Number(loanAtm);
  let monthlyPercentRate = parseFloat(((annualPercentRate / 100) / 12));
  let monthlyPayment = calculate(loanAtm, monthlyPercentRate, loanLenInMonths);

  let totalCost = monthlyPayment * loanLenInMonths;
  let totalInterest = totalCost - loanAtm;

  displayPaymentInfo(monthlyPayment, loanAtm, totalInterest, totalCost);

  //Promt user to continue or exit program
  prompt(MESSAGES.continue_program_prompt);
  let exitProgram = readline.question().toLowerCase();

  //only allow 'y' and 'n' as valid inputs
  while (exitProgram !== 'n' && exitProgram !== 'y') {
    prompt(MESSAGES.valid_exit);
    exitProgram = readline.question().toLowerCase();
  }
  if (exitProgram === 'n') break;
  console.clear();
}

prompt(MESSAGES.exit_message);