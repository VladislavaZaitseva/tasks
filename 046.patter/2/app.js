// 2. Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные

const array = [];

document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input');
    const arr = document.querySelector('.arr');
    const even = document.querySelector('.even');
    const notEven = document.querySelector('not_even');

    array.push(input.value);
    arr.innerHTML = array;
    input.value = '';

    const even_ = [];
    const notEven_ = [];
    array.forEach((el) => el % 2 === 0 ? even.push(el) : notEven.push(el));

    even.innerHTML = even_;
    notEven.innerHTML = notEven_;
})