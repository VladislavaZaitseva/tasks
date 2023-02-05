// На входе пустой объект, массив, n – количество элементов массива. Далее
// производится заполнение массива с клавиатуры. Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce). Добавить проверки на ввод чисел

const obj = {};
let arr = [];
const n = 5;

for (let i = 0; i < 0; i++) {
    let pro = prompt();
    if (!isNaN(pro)) {
        arr.push(+pro)
    }
}

let result = arr.reduce(function (sum, el) {
    return sum + el
}, 0)

obj.sum = result;
console.log(obj); 