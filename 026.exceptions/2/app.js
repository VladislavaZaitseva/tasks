// На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

const arr = ['as'];

function isValid(arr_) {
    try {
        for (let i = 0; i < arr_.length; i++) {
            if (isNaN(arr[i])) throw new Error('есть строка')
        }

        return true

    } catch (error) {
        return error.message
    }

}

const res = isValid(arr);
console.log(res);

