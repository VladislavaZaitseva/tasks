// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

const n = 5;
let arr = [];


for (let i = 0; i < n; i++) {
    let pr = prompt();
    if (!isNaN(pr)) {
        arr.push(pr);
    }
}


// const result = arr.map(function (el) {
//     return el ** 2;
// })
// console.log(result);

// let arrNew = [];
// arr.forEach(function (el) {
//     arrNew.push(el ** 2);
// })
// console.log(arrNew);

// let arrNew = [];
// for (let i = 0; i < arr.length; i++) {
//     arrNew.push(arr[i] **2)
// }
// console.log(arrNew);

let arrNew = [];

let i = 0;
while (i < arr.length) {
    arrNew.push(arr[i] ** 2)
    i++
}
console.log(arrNew);