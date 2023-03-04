// Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread

const n = 6;
let arr_1 = [];
let arr_2 = [];

for (let i = 0; i < n; i++) {
    i < 3 ? arr_1.push(prompt('')) : arr_2.push(prompt(''))
}

console.log(arr_1);
console.log(arr_2);

let result = [...arr_1, ...arr_2]

console.log(result);