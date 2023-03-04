// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
    let pt = prompt();
    if (isNaN(pt)) {
        arr.push(pt)
    }
}

// let result = arr.filter(function (el) {
//     return el[0] == 'a' || el[0] == 'h' ? true : false;
// })
// console.log(result);

// let arrNew = [];
// arr.forEach(function (el) {

//     if (el[0] == 'a' || el[0] == 'h') {
//         arrNew.push(el)
//     }
// })
// console.log(arrNew);


let arrNew = [];

let i = 0;
while (i < n) {
    if (arr[i][0] == 'a' || arr[i][0] == 'h') {
        arrNew.push(arr[i][0])
    }
    i++
}
console.log(arrNew);