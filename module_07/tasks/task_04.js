// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const decrementButton = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  '#counter button[data-action="increment"]'
);
const counter = document.getElementById("value");

const updateConter = function(value) {
  counter.innerHTML = value;
};

const increment = function() {
  counterValue++;
  updateConter(counterValue);
};

const decrement = function() {
  counterValue--;
  updateConter(counterValue);
};

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

export default counterValue;
