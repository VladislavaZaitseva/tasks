// На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = 5;
const JS = 'javascript';
let arr = [];

for (let i = 0; i < n; i++) {
    let pro = prompt();
    if (isNaN(pro)) {
        arr.push(pro);
    }
}

let newArr = [];

arr.forEach(function (el) {
    if (el.includes(JS)) {
        newArr.push(el);
    }
})
console.log(newArr);
