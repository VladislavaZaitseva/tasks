// Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const str = ['by', 'belarus', 'de', 'ru', 'germany'];

function showResult(str_) {
    const result = str_.filter(function (el) {
        if (el.length <= 2) {
            return true
        } else {
            return false
        }
    })
    return result
}

const result = showResult(str);
console.log(result);