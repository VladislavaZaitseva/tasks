// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const arr = [2, 3, 4, 5, 6];
let count = 0;

function num (arr_) {

    arr_.forEach(function (el) {
        if (isNaN(el)) {
            count += 1;
        }
    })

    if (count == 0) {
        return true
    }

}

const newNun = num(arr);
console.log(newNun);

function res (arr_) {
    if (newNum == true) {

        let newArr = arr_.map(function (el) {
            return el * el;
        })

        return arr;
    }
}

const newRes = res(arr);
console.log(newRes);