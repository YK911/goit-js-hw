// Задание 5
// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку.
// Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово
// то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

const checkForSpam = function (str) {
    const message = str.toLowerCase();

    const indexOfSpam = message.indexOf("spam");
    const indexOfSale = message.indexOf("sale");

    return indexOfSpam >= 0 || indexOfSale >= 0 ? true : false;
};

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] *How to earn fast money?')); // true

export default checkForSpam;