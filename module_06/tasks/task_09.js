import users from "./users.js";

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  return users.sort((userA, userB) => userA.friends.length - userB.friends.length).map(users => users.name + ' x ' + users.friends.length);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

export default getNamesSortedByFriendsCount;
