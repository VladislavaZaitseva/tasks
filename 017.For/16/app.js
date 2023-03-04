// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением, равным 4. Посчитать
// количество повторений числа 4 в массиве

const arr = [1, 2, 5, 9, 4, 13, 4, 10];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        count += 1;
    }
}

console.log(`${count} раз встречается четверка`);