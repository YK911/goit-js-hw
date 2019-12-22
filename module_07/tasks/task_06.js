// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputTag = document.querySelector("#validation-input");
const symbol = inputTag.dataset.length;

const enteringText = function(element) {
  const enterСharacters = element.currentTarget;

  if (enterСharacters.value.length == symbol) {
    enterСharacters.style.borderColor = document.getElementById(
      "validation-input"
    ).className = "valid";
  } else {
    enterСharacters.style.borderColor = document.getElementById(
      "validation-input"
    ).className = "invalid";
  }
};

inputTag.addEventListener("blur", enteringText);

export default enteringText;
