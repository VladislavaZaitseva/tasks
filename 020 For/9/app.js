// Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

const array = [2, 5, 9, 15, 0, 4];
let newarray = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 == 0) {
//         newarray.push(array[i])
//     }
// }

for (let el of array) {
    if (el % 3 == 0) {
        newarray.push(el)
    }
}
console.log(newarray);
