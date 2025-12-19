// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//syntax error, decimalNumber has been declared as the parameter, then it to be declared again as const decimalNumber.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(decimalNumber);



// =============> write your explanation here
//Since the decimalNumber is a parameter, it's not neccesary to declare it again as const and assign it a value.
//Only need to assign the specific decimalNumber in console.log with the function name and delete the redeclaration of const decimalNumber = 0.5.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(1));
