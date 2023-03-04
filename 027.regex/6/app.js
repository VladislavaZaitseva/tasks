// На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const strOne = `C:\\Users\\Admin\\Desktop\\test.txt`;
const strTwo = `C:/Users/Admin/Desktop/test.txt`;

function isValid(strOne_, strTwo_) {
    try {
        if (!/^[A-Z]:[\\|\/][A-Z][a-z]+[\\|\/][A-Z][a-z]+[\\|\/][A-Z][a-z]+[\\|\/][a-z]+\.[a-z]{3,10}$/gm.test(strOne_, strTwo_)) throw new Error('???????')

        return true
    } catch (error) {
        return error.message
    }
}

const res = isValid(strOne, strTwo)
console.log(res);