// На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.

const str = '12345';

function main(str_) {
    let num = 0;
    for (let i = 0; i < str_.length; i++) {
        num += str_[i] ** i
    }
    return num
}

const res = main(str);
console.log(res);