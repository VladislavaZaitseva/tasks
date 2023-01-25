// Пользователь вводит строку.
// Необходимо вывести все гласные отдельной строкой fullstack => ua

const str = prompt('');

let result = '';

for (let i = 0; i < str.length; i++) {
   if (str[i] === 'u' || str[i] === 'a'){
        result += str[i]
    }
}