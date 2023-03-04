// *Вычислите сумму массива чисел статичного массива используя рекурсию

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);
console.log(arr.length - 1);

function sum(arr_, number) {
    if (number == 0) return arr_[number];
    return arr_[number] + sum(arr_, number - 1);
}

const result = sum(arr, arr.length - 1)
console.log(result);