// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = 'qwert123!';

function isValid(str_) {
    try {
        let newStr = str_.replaceAll(/[0-9 \!\@\#\$\%\^\&]+/gm, "")
        if (newStr.length > str_.length) throw new Error(`Что то не так`)
        return newStr;
    } catch (error) {
        return error.message
    }
}

const result = isValid(str)
console.log(result);