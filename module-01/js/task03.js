function task3(){

'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Запрос пароля');

if (message === null) {
    alert('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
    alert('Добро пожаловать!');
} else {
    alert('Доступ запрещен, неверный пароль!');
}
}