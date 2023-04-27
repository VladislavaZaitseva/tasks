// 1. Посчитать количество гласных и согласных в строке

const vowel = 'AEIOU'.toLowerCase;

const btn = document.querySelector('button')
const inp = document.querySelector('.input')


btn.addEventListener('click', () => {

    const inp = document.querySelector('.inpOne').value

    let countVowel = 0;

    for (let i = 0; i < inp.lenght; i++) {
        if (vowel.includes(inp[i])) {
            count += 1;
        }
    }
    const countCons = inp.lenght - countVowel

    document.querySelector('.count').innerHTML = countVowel;
    document.querySelector('.count').innerHTML = countCons;
})