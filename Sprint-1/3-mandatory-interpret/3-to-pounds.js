const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p", We need a starting string representing the price in pence to work with.
// 2. Line 3-6 removes the 'p' from the end of String. We cannot performing mathematical formatting on the letter 'p'.
// 3. Line 8 Ensure the string is at least 3 characters long by adding specific padding zeros to the start if necessary.
// 4. Line 9-12 Extracts the "pounds" part of the price(except the last two digits). In currency, the last two digits are always the pence.
// 5. Line 14-16 Extracts the "pence" part (the last two digits).
// 6. Line 18 Assembles the final string and prints it to the console.//