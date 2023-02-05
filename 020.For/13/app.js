// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of

const arr = [-30, -15, -10, -2, -7, -4, 1, 3, 5, 8, 9, 17];
let count = 0;

// for (let i = 0; i < arr.lenght; i++) {
//     if (arr[i] > 0) {
//         count += arr[i];
//     }
// } console.log(count);

for (let el of arr) {
    if (el > 0) {
        count += el;
    }
} console.log(count);