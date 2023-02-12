// На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

const num = 4;

function isValid(num_) {
    return typeof num_ == 'number' ? true : false;

}


function fact(num_) {

    const booly = isValid(num);
    if (booly == true) {

        let count = 1;
        for (let i = 1; i <= num_; i++) {
            count *= i;
        }
        return count;
    } else return 'error'

}

const result = fact(num);
console.log(result);