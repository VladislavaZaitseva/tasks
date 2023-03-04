// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

const n = 5;

function doArr(n_) {
    let arr = [];
    for (let i = 0; i < n_; i++) {
        let prom = prompt('element of array');
        arr.push(+prom);
    }
    return arr;
}

function isValid(arr_) {
    const check = arr_.every(function (el) {
        if (typeof (el) == 'number') {
            return true;
        } else return false;
    })
    return check;
}

function newArr(arr_) {
    const booly = isValid(arr_1);

    if (booly == true) {
        let newArray = [];
        for (let i = 0; i < arr_.length; i++) {
            if (arr_[i] % 2 == 0) {
                newArray.push(arr_[i] ** 2)
            }
        }
        return newArray;
    } else return 'error'
}

const arr_1 = doArr(n);
const res = newArr(arr_1);
console.log(res);