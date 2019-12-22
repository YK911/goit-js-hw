// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const listItems = document.querySelectorAll(".item");
console.dir(document.querySelectorAll(".item"))
console.log(`В списке ${listItems.length} категории`);

const logHeading = idx => {
  const allHeadings = document.querySelectorAll("h2");
  console.log(`Категория: ${allHeadings[idx].textContent}`);
  const allLists = document.querySelectorAll("li.item");
  const littleList = allLists[idx].querySelectorAll("li");
  console.log(`Количество элементов: ${littleList.length}`);
};

logHeading(0);
logHeading(1);
logHeading(2);

export default logHeading;