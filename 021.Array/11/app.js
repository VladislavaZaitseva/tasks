// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

const n = 3;
let arr = [];

for (i = 0; i < n; i++) {
    let a = prompt('');
    if (!isNaN(a)) {
        arr.push(a)
    }
}

arr.forEach(function (elem) {
    arr * elem
})
console.log(arr);

// const result = arr.reduce(function (mul, elem) {
//     return mul * elem;
// }, 0)

// console.log(result);


