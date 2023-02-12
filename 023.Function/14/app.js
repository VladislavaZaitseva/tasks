// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [-1, -5994, 53, 52, 68, 3513, 6472];

function isValid(arr_) {
    const bool = arr_.every((el) => !isNaN(el) ? true : false);
    return bool;
}

function searchMax(arr_) {
    const bool = isValid(arr);

    if (bool == true) {
        let index = arr[0];
        for (let i = 0; i < arr_.length; i++) {
            if (index < arr[i]) {
                index = arr[i];
            }
        }
        return index;
    } else return 'error'
}

const result = searchMax(arr)
console.log(result);