// Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

const str = 'hschool';

function doArr(str_) {
    let arr = str_.split(' ');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr.push(arr[i].toUpperCase());
        } else newArr.push(arr[i].toLowerCase())
    }
    return newArr.join('');
}

const result = doArr(str);
console.log(result);