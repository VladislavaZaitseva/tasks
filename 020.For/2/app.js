// [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++
// }

// let i = 0;
// do {
//     console.log(array[i]);
//     i++
// } while (i < array.length)


for (let el of array) {
    console.log(el);
}