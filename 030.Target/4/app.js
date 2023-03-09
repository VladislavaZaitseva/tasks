// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 

const btn = document.querySelector(`button`);
let array = [];
const inp = document.querySelector(`input`);

btn.addEventListener(`click`, () => {
    try {
        const div = document.querySelector(`div`);
        inp.style = `border: 1px solid black;
        border-radius: 10px`

        if (!inp.value.trim()) throw new Error(`empty`);

        array.push(inp.value)
        div.innerHTML = array;
        inp.value = ``;




    } catch (error) {
        inp.style = `border: 3px solid red; border-radius: 10px`
        alert(error.message)
    }
})