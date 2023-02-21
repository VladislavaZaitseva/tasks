// Вычислите сумму массива целых чисел статичного массива используя рекурсию

const num = [1, 2, 3.4, 5, 7.8];

function factorial(num_) {
    let newNum = [];

    for (let i = 0; i < num_.length; i++) {
        if (Number.isInteger(num_[i])) {
            newNum.push(arr_[i])
        }
    }
}

const res = factorial(num);
console.log(res);