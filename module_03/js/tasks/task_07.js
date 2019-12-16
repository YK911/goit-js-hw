// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const result = {
      id: this.transactions.length,
      type,
      amount
    };
    return this.transactions.push(result);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.createTransaction(amount, Transaction.WITHDRAW);
    // console.log(amount);
  },

  /*
   * Метод возвращает текущий баланс
   */

  sumBalance(type) {
    let balance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === type) {
        balance += this.transactions[i].amount;
      }
    }
    return balance;
  },

  getBalance() {
    let deposit = 0;
    deposit = this.sumBalance("deposit");
    let withdraw = 0;
    withdraw = this.sumBalance("withdraw");
    let balance = deposit - withdraw;
    return balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let target;
    for (const searchingId of this.transactions) {
      if (searchingId.id === id) {
        target = searchingId;
      }
    }
    return target;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {}
};

account.deposit(700);
account.deposit(300);
console.log(account.getBalance()); // 1000
account.withdraw(100);
console.log(account.getBalance()); //900
console.log(account.getTransactionDetails(0)); // {id:0, type:deposit, amount:700}
// console.log(account.getTransactionTotal(Transaction.DEPOSIT)); //1000
console.log(account.transactions);
