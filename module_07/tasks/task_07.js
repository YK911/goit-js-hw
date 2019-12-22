// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const fontsizeControl = document.querySelector("#font-size-control");
const phrase = document.querySelector("#text");

fontsizeControl.addEventListener("input", sizeUpdate);

function sizeUpdate(element) {
  const slider = element.currentTarget;
  phrase.style.fontSize = slider.value + "px";
}

export default fontsizeControl;
