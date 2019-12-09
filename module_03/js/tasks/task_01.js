// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение
// используя Object.keys() и for...of

let user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";

for (let item of Object.entries(user)) {
  console.log(item[0], item[1]);
}

export default user;
