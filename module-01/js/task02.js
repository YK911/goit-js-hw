function task2(){

'use strict';

const total = 100;
const ordered = prompt('Укажите количество товара');
let result;

if (ordered <= total) {
    result = 'Заказ оформлен, с вами свяжется менеджер';
} else {
    result = "На складе недостаточно товаров!"
}

console.log(result);
}