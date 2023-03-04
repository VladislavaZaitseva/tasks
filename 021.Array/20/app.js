// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filte

const n = 6;
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt())
}

// const res = arr.filter(function (el) {
//     if (el > 0) {
//         return true
//     }
// })
// console.log(res);

let newArr = [];

arr.forEach(function (el) {
    if (el > 0) {
        newArr.push(el);
    }
})
console.log(newArr);