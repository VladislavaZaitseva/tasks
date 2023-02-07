// На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 3, 4, 6, 142, 5125];

function showRes(arr_) {
    let countWord = 0;
    for (let i = 0; i < arr_.length; i++) {
        if (!isNaN(arr_[i])) {
            continue;
        } else {
            countWord += 1;
        }
    }

    if (countWord > 0) {
        return false;
    } else return true;
}

let result = showRes(arr);
console.log(result);