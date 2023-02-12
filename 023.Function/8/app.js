// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ['hello', 'good'];

let words = 0;

function str(arr_) {
    for (let i = 0; i < arr_.length; i++)
        if (!isNaN(arr_[i])) {
            words += 1;
        }
    if (words == 0) {
        return true;
    }
}


const result = str(arr);
console.log(result);

let string = '';

function newResult(arr_) {

    if (result == true) {
        arr_.forEach(function (el) {
            newString += el;
        })
    }
    return newString;
}

const nStr = newResult(arr)
console.log(nStr);