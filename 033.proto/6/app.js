// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо отобразить на экране объект (помните, что окно браузера
//     не воспринимает объекты как тип данных JavaScript. Для отображения неоходимо
//     преобразовать строку в ...)

const obj = {};
const btn = document.querySelector(`button`);
const inp = document.querySelector(`input`);

const isValid = (inp_) => {
    if (isNaN(inp_.value)) throw new Error(`no letter`)
}

btn.addEventListener(`click`, () => {
    try {
        isValid(inp)

        const div = document.querySelector(`.obj`)
        for (let i = 0; i < +inp.value; i++) {
            obj[i] = i;
        }

        div.innerHTML = JSON.stringify(obj);

    }
    catch (error) {
        alert(error.message)
    }
})
