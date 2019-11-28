function task6() {

    'use strict';

    let input;
    let total = 0;

    while (input !== null) {

        input = prompt('Введите число');
        if (Number(input)) {
            total = total + Number(input);

        } else if (input === null) {
            alert(`Общая сумма чисел равна ${total}`);

        } else {
            alert('Было введено не число, попробуйте еще раз');
        }
    }
}