// Напишите программу, в которой вычисляется сумма, разность и произведение
// двух целых чисел, введенных с клавиатуры.

const a = +prompt();
const b = +prompt();

if (a % 1 === 0) {
    console.log('целое число', true);
} else {
    console.log('дробное число', false);
}

if (b % 1 === 0) {
    console.log('целое число', true);
} else {
    console.log('дробное число', false);
}

console.log(a + b);
console.log(a - b);
console.log(a * b);