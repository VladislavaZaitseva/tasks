// Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

const str = 'hello, my name is Vladislava';
let letter_ = 'l';

function findLetter(str_, letter_) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str_[i] === letter_) {
            count++
        }
    }

    return count;
}

let result = findLetter(str, letter_);
console.log(result);