// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputValue = document.getElementById("name-input");
const showValue = document.getElementById("name-output");

const inputWord = function(element) {
  const input = element.currentTarget;
  this.textContent = input.value !== "" ? input.value : "незнакомец";
};

inputValue.addEventListener("input", inputWord.bind(showValue));

export default inputWord;
