// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
The results are all 3.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
// Explain why the output is the way it is
Because num has been declared as a globle const variable which is 103, then the num value can't be changed. There is no parameter as well.
// =============> write your explanation here
Since it's a const globle variable, the num's value is alway 103, that's why no matter what's the value type in console.log the result is always the same.
// Finally, correct the code to fix the problem
// =============> write your new code here


function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
