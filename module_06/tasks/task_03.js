import users from "./users.js";
// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  return users.filter((user) => gender === user.gender);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

export default getUsersWithGender;