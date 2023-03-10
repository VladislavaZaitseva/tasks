// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const str = '+123456789';

function isValid(str_) {
    try {
        if (!/^(\-|\+)[0-9] + $/gm.test(str_)) throw new Error('')
        return true;
    } catch (error) {
        return error.message;
    }
}

const result = isValid(str);
console.log(result);