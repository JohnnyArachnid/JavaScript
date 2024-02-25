const stopwatch = document.querySelector('.stopwatch');

stopwatch.textContent = '00:00:00:00';

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

startButton.addEventListener('click', () => startAction());
stopButton.addEventListener('click', () => stopAction());
resetButton.addEventListener('click', () => resetAction());

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startAction() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stopAction() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function resetAction() { 
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  stopwatch.textContent = '00:00:00:00';
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let milliseconds = Math.floor(elapsedTime % 1000 / 10);

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  milliseconds = String(milliseconds).padStart(2, '0');

  stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
