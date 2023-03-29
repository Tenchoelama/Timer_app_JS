const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#start-button");
const stopBtn = document.querySelector("#stop-button");
const resetBtn = document.querySelector("#reset-button");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function formatTime(milliseconds) {
  // format the elapsed time in the format of "00:00:000"
  let minutes = Math.floor(milliseconds / 60000);
  let seconds = Math.floor((milliseconds % 60000) / 1000);
  let millisecondsFormatted = milliseconds % 1000;
  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    ":" +
    (millisecondsFormatted < 100
      ? millisecondsFormatted < 10
        ? "00"
        : "0"
      : "") +
    millisecondsFormatted
  );
}

function startTimer() {
  // get the current time and start the timer interval
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formatTime(elapsedTime);
  }, 10);

  // disable the start button and enable the stop button and reset button
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function stopTimer() {
  // clear the timer interval
  clearInterval(timerInterval);

  // enable the start button and disable the stop button
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  // reset the elapsed time and update the timer display
  elapsedTime = 0;
  timer.textContent = "00:00:000";

  // disable the stop button and reset button
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

// add event listeners to the buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);