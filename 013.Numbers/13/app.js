// Вы вводите значение с клавиатуры. Если значение равно 0, то вывести ‘Ноль’, если
// < 0, то вывести ‘Отрицательное’, если > 0, то вывести ‘Положительное

const num = +prompt();

if (num === 0) {
    console.log('ноль');
}

if (num < 0) {
    console.log('число отрицательное');
}

if (num > 0) {
    console.log('число положительное');
}