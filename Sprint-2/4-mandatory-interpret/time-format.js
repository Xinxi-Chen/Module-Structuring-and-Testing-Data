function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// 3 times. First, pad(totalHours); Second, pad(remainingMinutes); Third, pad(remainingSeconds).

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
  0
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
  00, because after the function formatTimeDisplay(61) execute its argorithm, the hour value is 0, then function pad(num) converts all the num to 2 digit format. 
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
  01, because after the function formatTimeDisplay(61) execute its argorithm, the hour value is 1, then function pad(num) converts all the num to 2 digit format, thus why it's 01.