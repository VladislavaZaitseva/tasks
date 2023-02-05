// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = 3;
let arr = [];
let arr1 = 0;

for (let i = 0; i < n; i++) {
    arr.push(prompt(''));
    if (!isNaN(pro)) {

    }
}

// arr.forEach(function (elem) {
//     if (!isNaN(elem)) {
//         return arr1 += elem;
//     }
// })
// console.log(arr1);

let result = arr.reduce(function (sum, elem) {
    return sum + elem;
})
console.log(result);