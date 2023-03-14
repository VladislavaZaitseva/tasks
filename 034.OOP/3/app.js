// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки


class WordString {
    isValid(str){
        if(isNaN(str)) throw new Error('у вас число')
    }

    reverseString(str) {
        try {
            return str.split('').reverse().join('');
        } catch (error) {
            return error.message
        }
    }

    upperFirst(str) {
        try {
            let result = str[0].toUpperCase() + str.slice(1)
            return result
        } catch (error) {
            return error.message
        }
    }

    upperEvery(str) {
        try {
            let words = str.split(' ');
            let newWords = '';
            for (let i = 0; i < words.length; i++) {
                newWords += words[i][0].toUpperCase() + words[i].slice(1) + ' ';
            }
            return newWords;
        } catch (error) {
            return error.message
        }
    }
}

const wordString = new WordString();
const str = wordString.reverseString('test')
console.log(str);

const strApper = wordString.upperFirst('hello')
console.log(strApper);

const upperF = wordString.upperEvery('hello world');
console.log(upperF);