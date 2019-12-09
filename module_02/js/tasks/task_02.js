// Задание 2
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай
// функцию calculateEngravingPrice(message, pricePerWord) принимающую строку
// (в строке будут только слова и пробелы) и цену гравировки одного слова,
// и возвращающую цену гравировки.

const calculateEngravingPrice = function (message, price) {

    // ===========Variant1===========
    // const str = message.split(' ');
    // console.log(str);
    // const price = str.length * pricePerWord;
    // return price;

    // ===========Variant2===========
    return message.split(" ").length * price;
};

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10,),); // 80
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20,),); // 160
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100

export default calculateEngravingPrice;