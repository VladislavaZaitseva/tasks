// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

const btn = document.querySelector('button');
let arr = [];

function isValid(inp) {
    if (inp.value.trim() === '') throw new Error('')
}

btn.addEventListener('click', function () {
    try {
        let inp = document.querySelector('input');
        let div = document.querySelector('.array');
        let div2 = document.querySelector('.avg');
        isValid(inp)
        arr.push(inp.value)

        div.innerHTML = arr;
        inp.value = '';

        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i]
        }
        div2.innerHTML = sum / arr.length
    } catch (error) {
        alert(error.message)
    }
})