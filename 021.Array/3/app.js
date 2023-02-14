// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести значения массива без дублирования.
// Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента.
// 1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5

const n = prompt('введите количество');
let arr = [];
let arrNew = [];

for (let i = 0; i < n; i++) {
    let a = prompt('введите элемент массива')
    if (!isNaN(a)) arr.push(a);
}

for (let i = 0; i < arr.length; i++) {
    if (!arrNew.includes(arr[i])) {
        arrNew.push(arr[i])
    }
}
if (arrNew.length == 0) {
    console.log('массив пуст');
} else {
    console.log(arrNew);
}