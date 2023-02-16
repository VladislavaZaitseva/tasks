// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = {
    1: 'qwert',
    2: 512,
    3: 'it NaN',
    4: 505,
    5: 1235677,
    6: 4,
};

(function (obj_) {
    let newObj = {};

    for (let key in obj_) {

        if (!isNaN(obj[key])) {
            newObj[key] = obj[key]
        }
    }

    console.log(newObj);
    
}(obj))