// Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

const num = 12345;

function isValid(num_) {
    try {
        if (!/^[0-9]{6,6}$/gm.test(num_) && !/^[0-9]{4,4}$/gm.test(num_)) throw new Error('Bro go sleep plz')
        return true
    } catch (error) {
        return error.message
    }
}

const result = isValid(num)
console.log(result);