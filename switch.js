const colors = [
  '#1aed28',
  '#866ef0',
  '#e810a7',
  '#2196F3',
  '#d3c5d4',
  '#FF9800',
  '#009688',
  '#86ada7',
  '#2debb5',
  '#f3fa20',
  '#c0ccca',
  '#f50202',
  '#72ad37',
  '#a87290',
];

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

btnStart.addEventListener('click', btnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

const DELAY = 1000;
let timeoutId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const IsSwitch = () => {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

function btnStartClick() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timeoutId = setInterval(() => {
    IsSwitch();
  }, DELAY);
}

function onBtnStopClick() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timeoutId);
}
