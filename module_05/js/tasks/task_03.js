class Storage {
  constructor(array) {
    this.items = array;
  }

  getItems(array) {
    return this.items;
  }

  addItem(array) {
    this.items.push(array);
  }

  removeItem(array) {
    const index = items.indexOf(array);
    items.splice(index, 1);
    return this.items;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

export default Storage;
