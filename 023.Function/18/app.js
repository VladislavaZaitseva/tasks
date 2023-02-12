// Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”. 

const date = '22/12/2023';

function isValid(date_) {
    if (typeof (date_) === 'string') {
        return true;
    }
}

function doDate(date_) {
    const bool = isValid(date);
    if (bool == true) {
        let dateNew = date_.split('/').reverse().join('-');
        return dateNew;
    } else return 'error';
}

const result = doDate(date);
console.log(result);