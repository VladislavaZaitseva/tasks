// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. 

const num = +prompt();
let arr = [];

for (let i = 0; i < num; i++) {
    arr.push(prompt())
}
console.log(arr);