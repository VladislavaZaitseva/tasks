// На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 7 -> *******
// ******
// *****
// ****
// ***
// **
// *

const num = 3;

for (let i = num; i > 0; i--) {
    console.log('*'.repeat(i));
}