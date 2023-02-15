// Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если значения
// массива не соответствуют условию задания, вывести сообщение об ошибке.

const arr = [0, 1, -2, 3, -4, 5];

function isvalid(arr_) {
    for (let i = 0; i < arr_.length; i++) {
        if (!isNaN(arr_[i])) {
            return true
        } else {
            return false
        }
    }

    return true
}



function arr1(arr_) {
    const bool = isvalid(arr);
    if (bool == true) {
        let max = 0;
        let min = 0;

        for (let i = 0; i < arr_.length; i++) {
            if (arr_[i] > max) {
                max = arr_[i];
            } else if (arr_[i] <= min) {
                min = arr_[i];
            }
        }

        return `минимальное число ${min} максимальное число ${max}`
    }

}

const res = arr1(arr);
console.log(res);


