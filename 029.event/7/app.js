// Записать в результат удвоенное значение инпута. Добавить проверки

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        const div = document.querySelector('div');
        if (isNaN(inp.value)) throw new Error('Ввели число');
        if (inp.value.trim() === '') throw new Error('epmty')
        div.innerHTML = inp.value * 2;
    } catch (error) {
        alert(error.message)
    }
})