// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const div = document.querySelector('.array')
const div2 = document.querySelector('.uniq')

let arr = [];

btn.addEventListener('click', function () {

    try {
        isValid()
        arr.push(inp.value)
        div.innerHTML = arr;

        const uniq = [];

        for (let i = 0; i < arr.length; i++) {
            if (!uniq.includes(arr[i]))
                uniq.push(arr[i])
        }
        div2.innerHTML = uniq
    } catch (error) {
        alert(error.message)
    }
})

function isValid() {
    if (inp.value == '') throw new Error('вы ничего не ввели');
    if (isNaN(inp.value)) throw new Error('вы ввели букву')
}