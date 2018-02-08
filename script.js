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

startTimer();

function startTimer() {
  timer = startTime.textContent * 60;
  run();
}

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  timer--;
  //  Show the number in the .display-timer tag.
  document.querySelector('.display-timer').innerHTML = timer;

  //  Once number hits zero...
  if (timer === 0) {
    stop(); //  ...run the stop function.
    timer = breakTime.textContent * 60;
    document.querySelector('.display-timer').innerHTML = timer;
    run();
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
