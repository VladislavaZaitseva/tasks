// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

let arr = [1, 2, 3, 4, 5];

let nun = 0;

function bool(arr_) {

    for (let i = 0; i < arr_.length; i++) {

        if (isNaN(arr_[i])) {
            num += 1;
        }

        if (num > 0) {
            return false
        } else return true
    }
}

let NumResult = bool(arr);
console.log(NumResult);


function MatSum(arr_) {

    if (NumResult == true) {
        let sum = arr_.reduce(function (sum, el) {
            return sum + el;

        }, 0)
        return sum
    }

}

let resultSum = MatSum(arr);
console.log(resultSum);