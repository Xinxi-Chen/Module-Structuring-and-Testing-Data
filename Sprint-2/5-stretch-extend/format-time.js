// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  let ampm = "am";

  if (hours === 0) {
    hours = 12;
    ampm = "am";
  }
  else if (hours >= 12) {
    ampm = "pm";
    if (hours > 12) {
      hours -= 12;
    }
  }
  return `${hours}:${minutes} ${ampm}`;
}

const currentOutput = formatAs12HourClock("00:00");
const targetOutput = "12:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("24:00");
const targetOutput2 = "12:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
