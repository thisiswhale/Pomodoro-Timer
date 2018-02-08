var intervalId;
let timer;
const startTime = document.getElementById('time-selector-num');
const breakTime = document.getElementById('breaktime-num');
const addMinute = document.getElementsByClassName('add');
const subtractMinute = document.getElementsByClassName('minus');

for (let i = 0; i < addMinute.length; i++) {
  addMinute[i].addEventListener('click', add);
  subtractMinute[i].addEventListener('click', subtract);
}

start();
function start(){
  stop();
  timer = startTime.textContent * 60;
  run();
}

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  let countdownTimer = timeConverter(timer);
  //  Show the timer in the .display-timer tag.
  document.querySelector('.display-timer').innerHTML = countdownTimer;

  //  Once number hits zero...
  if (timer === 0) {
    stop(); //  ...run the stop function.
    timer = breakTime.textContent * 60;
    setTimeout(run, 2000);
  }
  else{
    timer--;
  }
}

function stop() {
  clearInterval(intervalId); //  Clears our intervalId
}

function add() {
  let value;
  if (this.classList.contains('time-selector-box')) {
    value = parseFloat(startTime.textContent) + 1;
    startTime.innerHTML = value;
  } else if (this.classList.contains('breaktime-box')) {
    value = parseFloat(breakTime.textContent) + 1;
    breakTime.innerHTML = value;
  }

}

function subtract() {
  let value;
  if (this.classList.contains('time-selector-box')) {
    value = parseFloat(startTime.textContent) - 1;
    startTime.innerHTML = value;
  } else if (this.classList.contains('breaktime-box')) {
    value = parseFloat(breakTime.textContent) - 1;
    breakTime.innerHTML = value;
  }
}

function timeConverter(t) {

  //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
