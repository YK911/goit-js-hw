import './css/styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  pressStart: document.querySelector('span[data-action="start"]'),
  pressStop: document.querySelector('span[data-action="stop"]'),
  body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const addRandomColor = function() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

let switchColor;

refs.pressStart.onclick = function startChangeColor() {
  switchColor = setInterval(() => {
    addRandomColor();
  }, 1000);
  refs.pressStart.disabled = true;
};

refs.pressStop.onclick = function stopChangeColor() {
  clearInterval(switchColor);
  refs.pressStart.disabled = false;
};
