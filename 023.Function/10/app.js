// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [1, 2, 3, 4, 5, 6, 7];


function isValid(arr_) {
    const booly = arr_.every((el) => typeof el === 'number' ? true : false)
    return booly;
}


function filterArr(arr_) {
    const bool = isValid(arr)

    if (bool == true) {
        const res = arr_.filter((el) => el % 2 == 0 ? true : false)
        return res;
    } else return 'error'

}

const result = filterArr(arr)
console.log(result);