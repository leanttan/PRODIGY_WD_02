let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const lapList = document.getElementById('lapList');

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

function start() {
  if (!isRunning) {
    timer = setInterval(run, 10);
    isRunning = true;
  }
}

function run() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  displayTime();
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTime();
  lapList.innerHTML = '';
}

function lap() {
  const lapTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapList.appendChild(lapItem);
}

function displayTime() {
  displayMinutes.textContent = minutes.toString().padStart(2, '0');
  displaySeconds.textContent = seconds.toString().padStart(2, '0');
  displayMilliseconds.textContent = milliseconds.toString().padStart(2, '0');
}