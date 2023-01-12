// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения ax2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

const a = +prompt();
const b = +prompt();
const c = +prompt();

const value = b * b - 4 * a * c;

if (value > 0) {
    const x1 = (-b - Math.sqrt(value)) / (2 * a);
    const x2 = (-b + Math.sqrt(value)) / (2 * a);

    if (x1 > x2) {
        console.log(x2, x1);
    }
    else if (x1, x2) {
        console.log(x1, x2);
    }
    else if (value === 0) {
        console.log(-b / (2 * a));
    }
    else if (value < 0) {
        console.log('нет корней');
    }
}