// 16. На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

const obj = {
    key_1: prompt('1 значение'),
    key_2: prompt('2 значение'),
    key_3: prompt('3 значение'),
    key_4: prompt('4 значение'),
    key_5: prompt('5 значение'),
}

let arr = [];
for (let key in obj) {
    if (!isNaN(obj[key])) {
        arr.push(obj[key]);
    }
}
console.log(arr);