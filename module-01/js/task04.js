function task4(){

'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt('Сколько дроидов Вы хотите преобрести?');
let totalPrice = quantity * pricePerDroid;
if (quantity === null) {
    alert('Отменено пользователем!')
} else if (totalPrice >= credits) {
    alert('Недостаточно средств на счету!')
} else {
    alert(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}
console.log(totalPrice)
}