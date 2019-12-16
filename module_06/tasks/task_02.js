import users from "./users.js";

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => color === user.color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

export default getUsersWithEyeColor;
