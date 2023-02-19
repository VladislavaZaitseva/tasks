// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

const obj = {
    1: 'hschool',
    2: 123456,
};

(function count(obj) {
    let count = 0;
    for (let key in obj) {
        if (key) {
            count++
        }
    }

    console.log(count);
}(obj))
