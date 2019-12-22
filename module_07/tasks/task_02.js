// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const addIngridients = arr => {
  const listIngredients = document.querySelector("#ingredients");
  for (let k = 0; k < ingredients.length; k += 1) {
    const newLi = document.createElement("li");
    listIngredients.appendChild(newLi);
    newLi.innerHTML = ingredients[k];
  }
  console.log(listIngredients);
  return listIngredients;
};

addIngridients(ingredients);

export default ingredients;