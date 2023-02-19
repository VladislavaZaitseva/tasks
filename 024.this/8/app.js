// Напишите функцию, принимающую массив в качестве параметра. Необходимо
// оставить в массиве символы без дубликатов. IIFE
// [1, 1, 2, 2, 2, 3, 4, 5, 5, 5] = [1, 2, 3, 4, 5]

const arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5].sort();

(function IIFE(arr_) {
    let newArr = [];
    newArr.push(arr_[0]);

    for (let i = 0; i < arr_.length; i++) {
        if (!newArr.includes(arr_[i])) newArr.push(arr_[i])
    }
    console.log(newArr);

}(arr))