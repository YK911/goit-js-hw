// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// ===========Variant1===========
// const findLongestWord = function (string) {
// const arr = string.split(' ');
// // console.log(arr)
// let longestWord = arr[0];
// for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i].length > longestWord.length) {
//         longestWord = arr[i];
//     }
// }
// return string.split(" ").sort((a,b) => b.length - a.length)[0]
// };

// ===========Variant2===========
const findLongestWord = function (string) {return string.split(" ").sort(function (a, b) {return b.length - a.length;})[0];};

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'

export default findLongestWord;