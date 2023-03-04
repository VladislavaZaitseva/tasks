// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение. 

const arr = [1, 2, 3, 'qwert', 5];

function isValid(arr_) {
    try {
        for (let i = 0; i < arr_.length; i++) {
            if (typeof (arr_[i]) == 'string') throw new Error(`you have string ${arr[i]}`)
        }
        return true;
    } catch (error) {
        return error.message
    }
}

let result = isValid(arr)
console.log(result);